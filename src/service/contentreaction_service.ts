import { ContentReactionBridgeDetailsResponse, ContentReactionBridgeResponse, CreateContentReactionBridgeRequest, toContentReactionBridgeDetailsResponse, toContentReactionBridgeResponse, UpdateContentReactionBridgeRequest } from "../models/contentreactionbridge_model";
import { dbClient } from "../web/db";

export class ContentReactionService {
    static async createReaction(data: CreateContentReactionBridgeRequest): Promise<ContentReactionBridgeResponse>{
        let result = await dbClient.contentReactionBridge.create({
            data: data
        });
        return toContentReactionBridgeResponse(result);
    }

    static async deleteReaction(uuid: string): Promise<ContentReactionBridgeResponse>{
        let result = await dbClient.contentReactionBridge.delete({
            where: {
                uuid: uuid
            }
        });
        return toContentReactionBridgeResponse(result);
    }

    static async updateReaction(uuid: string, data: UpdateContentReactionBridgeRequest): Promise<ContentReactionBridgeResponse>{
        let result = await dbClient.contentReactionBridge.update({
            where: {
                uuid: uuid
            },
            data: data
        });
        return toContentReactionBridgeResponse(result);
    }

    static async readAllDetailsByContentUuid(uuid: string): Promise<ContentReactionBridgeDetailsResponse[]> {
        let result = await dbClient.contentReactionBridge.findMany({
            where: {
                content: uuid
            },
            include: {
                reactionObj: true
            }
        });
        return result.map((el): ContentReactionBridgeDetailsResponse  => {
            let {reactionObj, ...restData} = el;
            return toContentReactionBridgeDetailsResponse(restData, reactionObj);
        });
    }
}