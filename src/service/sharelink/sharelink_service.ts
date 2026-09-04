import { ShareLink } from "../../generated/prisma/client";
import { ResponseError } from "../../models/error_model";
import { CreateSharelinkReq, SharelinkModelResp, toSharelinkModelResp } from "../../models/sharelink/sharelink_model";
import { dbClient } from "../../web/db";
import { redisClient } from "../../web/redis_db";

export class SharelinkService {
    static async getByKey(key: string): Promise<SharelinkModelResp>{
        let resultRedis = await redisClient.hGet(key, "uuid");
        if(!resultRedis){
            throw new ResponseError(404, "Not Found");
        }
        let result = await dbClient.shareLink.findUnique({
            where: {
                uuid: resultRedis
            }
        });
        if(!result){
            throw new ResponseError(404, "Not Found");
        }
        return toSharelinkModelResp(result);
    }
    
    static async readByCreatorId(id: string): Promise<SharelinkModelResp[]>{
        let result = await dbClient.shareLink.findMany({
            where: {
                creator_id: id
            }
        });
        if(result.length === 0){
            return [];
        }
        let stringKeys: string[] = result.map((el): string => el.key);
        let returnedRedis: [(string | null), (string | null)][] = await Promise.all(stringKeys.map((el) => {
            return redisClient.hmGet(el, ["uuid","creator_id"]) as Promise<[(string | null), (string | null)]>;
        }));
        let listValidUuid: string[] = returnedRedis.filter((item: [(string | null), (string | null)]): boolean => {
            if((!item[0]) || (!item[1])){
                return false;
            }
            if(item[1] !== id){
                return false;
            }
            return true;
        }).map(item => item[0]!);
        return result.filter((el): boolean => {
            if(listValidUuid.includes(el.uuid)){
                return true;
            } else {
                return false;
            }
        }).map((el): SharelinkModelResp => {
            return toSharelinkModelResp(el);
        });
    }
    static async createData(data: CreateSharelinkReq): Promise<SharelinkModelResp> {
        //check if key exists in
        let isExistsInRedis = await redisClient.hGet(data.key, "uuid");
        if(isExistsInRedis){
            throw new ResponseError(400, "Link dengan Kata Kunci sudah tersedia");
        }
        let resultDb = await dbClient.shareLink.create({
            data: data
        });
        let resultRedis = await redisClient.hSet(resultDb.key, [["uuid", resultDb.uuid],["creator_id", resultDb.creator_id]]);
        let resultExpire = await redisClient.expire(resultDb.key,SharelinkService.getPeriodInSeconds(resultDb.expire_period));
        console.info(`Success`);
        return toSharelinkModelResp(resultDb);
    }
    static getPeriodInSeconds(period_cat: number): number {
        /**
        0 : 1 Jam
        1 : 2 Jam
        2 : 3 Jam
        3 : 6 Jam
        4 : 12 Jam
        5 : 1 Hari
        **/
       switch(period_cat){
        case 0:
            return 1*60*60;
        case 1:
            return 2*60*60;
        case 2:
            return 3*60*60;
        case 3:
            return 6*60*60;
        case 4:
            return 12*60*60;
        case 5:
            return 24*60*60;
        default:
            return -1;
       }
    }
}