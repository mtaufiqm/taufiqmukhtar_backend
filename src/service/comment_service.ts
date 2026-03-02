import { CommentReactionBridge, ReactionType } from "../generated/prisma/client";
import { CommentDetailsResponse, CommentResponse, CreateCommentRequest, toCommentResponse, UpdateCommentRequest } from "../models/comment_model";
import { toCommentReactionBridgeDetailsResponse } from "../models/commentreactionbridge_model";
import { ResponseError } from "../models/error_model";
import { dbClient } from "../web/db";

export class CommentService {
    static async getByUuid(uuid: string): Promise<CommentResponse>{
        let result = await dbClient.comment.findUnique({
            where: {
                uuid: uuid
            }
        });
        if(!result){
            throw new ResponseError(404, "Not Found");
        }
        return toCommentResponse(result);
    }

    static async getDetailsByUuid(uuid: string): Promise<CommentDetailsResponse>{
        let result = await dbClient.comment.findUnique({
            where: {
                uuid: uuid
            },
            include: {
                reactionBridge: {
                    include: {
                        reactionObj: true
                    }
                }
            }
        });
        if(!result){
            throw new ResponseError(404, "Not Found");
        }
        let {reactionBridge, ...restResult} = result;
        let returnObj: CommentDetailsResponse = {...restResult, reactions: []};
        reactionBridge.forEach((el: CommentReactionBridge & {reactionObj: ReactionType}) => {
            let {reactionObj, ...restReactionObj} = el;
            returnObj.reactions.push(toCommentReactionBridgeDetailsResponse(restReactionObj, reactionObj));
        });
        return returnObj;
    }

    
    static async readAllDetailsByContentUuid(uuid: string): Promise<CommentDetailsResponse[]>{
        let result = await dbClient.comment.findMany({
            where: {
                content: uuid
            },
            include: {
                reactionBridge: {
                    include: {
                        reactionObj: true
                    }
                }
            },
            orderBy: [
                {
                    created_at: "desc"
                }
            ]
        });
        let listReturnObj: CommentDetailsResponse[] = [];
        result.forEach((el) => {
            let {reactionBridge, ...restResult} = el;
            let returnObj: CommentDetailsResponse = {...restResult, reactions: []};
            reactionBridge.forEach((el: CommentReactionBridge & {reactionObj: ReactionType}) => {
                let {reactionObj, ...restReactionObj} = el;
                returnObj.reactions.push(toCommentReactionBridgeDetailsResponse(restReactionObj, reactionObj));
            });
        })
        return listReturnObj;
    }

    static async readAll(): Promise<CommentResponse[]>{
        let result = await dbClient.comment.findMany();
        return result.map((el) => toCommentResponse(el));
    }
    
    static async readAllByContentUuid(uuid: string): Promise<CommentResponse[]>{
        let result = await dbClient.comment.findMany({
            where: {
                content: uuid
            },
            orderBy: {
                created_at: "desc"
            }
        });
        return result.map((el) => toCommentResponse(el));
    }

    static async createComment(data: CreateCommentRequest): Promise<CommentResponse> {
        let result = await dbClient.comment.create({
            data: data
        });
        return toCommentResponse(result);
    }

    static async updateComment(uuid: string, data: UpdateCommentRequest): Promise<CommentResponse> {
        if(!uuid){
            throw new ResponseError(400, "Empty Field");
        }
        let updatedData = await dbClient.comment.update({
            where: {uuid: uuid},
            data: data
        });
        return toCommentResponse(updatedData);
    }

    static async deleteComment(uuid: string): Promise<CommentResponse> {
        if(!uuid){
            throw new ResponseError(400, "Empty Field");
        }
        let deletedData = await dbClient.comment.delete({
            where: {uuid: uuid}
        });
        return toCommentResponse(deletedData);
    }
}