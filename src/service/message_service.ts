import { Message } from "../generated/prisma/client";
import { ResponseError } from "../models/error_model";
import { CreateMessageRequest, MessageDetailsResponse, MessageResponse, toMessageDetailsResponse, toMessageResponse } from "../models/message_model";
import { dbClient } from "../web/db";

export class MessageService {
    static async getByUuid(uuid: string): Promise<MessageResponse>{
        let result = await dbClient.message.findUnique({
            where: {uuid: uuid}
        });
        if(!result){
            throw new ResponseError(404, "Not Found");
        }
        return toMessageResponse(result);
    }

    
    static async getDetailsByUuid(uuid: string): Promise<MessageDetailsResponse>{
        let result = await dbClient.message.findUnique({
            where: {uuid: uuid},
            include: {
                typeObj: true
            }
        });
        if(!result){
            throw new ResponseError(404, "Not Found");
        }
        let {typeObj, ...restData} = result;
        return toMessageDetailsResponse(restData, typeObj);
    }

    static async readAll(props?: {limit: number;}): Promise<MessageResponse[]>{
        let result = await dbClient.message.findMany({
            orderBy: {
                created_at: "desc"
            },
            ...(props?{take: props.limit}:{}),
        });
        return result.map((el: Message): MessageResponse => {
            return toMessageResponse(el);
        });
    }

    static async readAllDetails(props?: {limit: number;}): Promise<MessageDetailsResponse[]>{
        let result = await dbClient.message.findMany({
            orderBy: {
                created_at: "desc"
            },
            include: {
                typeObj: true
            },
            ...(props?{take: props.limit}:{}),
        });
        return result.map((el): MessageDetailsResponse => {
            let {typeObj, ...restData} = el;
            return toMessageDetailsResponse(restData, typeObj);
        });
    }

    static async create(data: CreateMessageRequest): Promise<MessageResponse>{
        let result = await dbClient.message.create({
            data: data
        });
        return toMessageResponse(result);
    }
}