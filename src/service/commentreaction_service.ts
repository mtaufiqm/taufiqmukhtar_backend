import { CommentReactionBridgeResponse, CreateCommentReactionBridgeRequest, toCommentReactionBridgeResponse } from "../models/commentreactionbridge_model";
import { dbClient } from "../web/db";

export class CommentReactionService {
    static async createReaction(data: CreateCommentReactionBridgeRequest): Promise<CommentReactionBridgeResponse>{
        let result = await dbClient.commentReactionBridge.create({
            data: data
        });
        return toCommentReactionBridgeResponse(result);
    }
    
    static async deleteReaction(uuid: string): Promise<CommentReactionBridgeResponse>{
        let result = await dbClient.commentReactionBridge.delete({
            where: {
                uuid: uuid
            }
        });
        return toCommentReactionBridgeResponse(result);
    }
    
}