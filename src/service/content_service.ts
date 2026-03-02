import { Comment, CommentReactionBridge, ContentReactionBridge, ReactionType } from "../generated/prisma/client";
import { CommentDetailsResponse, toCommentDetailsResponse } from "../models/comment_model";
import { CommentReactionBridgeDetailsResponse, toCommentReactionBridgeDetailsResponse } from "../models/commentreactionbridge_model";
import { ContentDetailsResponse, ContentResponse, CreateContentRequest, toContentResponse, UpdateContentRequest } from "../models/content_model";
import { toContentReactionBridgeDetailsResponse } from "../models/contentreactionbridge_model";
import { ResponseError } from "../models/error_model";
import { dbClient } from "../web/db";

export class ContentService {
    static async getByUuid(uuid: string): Promise<ContentResponse>{
        let result = await dbClient.content.findUnique({
            where: {uuid: uuid}
        });
        if(!result){
            throw new ResponseError(404, `Not Found`);
        }
        return toContentResponse(result);
    }

    static async getDetailsByUuid(uuid: string): Promise<ContentDetailsResponse>{
        let result = await dbClient.content.findUnique({
            where: {
                uuid: uuid
            },
            include: {
                reactionBridgeObj: {
                    include: {
                        reactionObj: true
                    }
                },
                commentObj: {
                    include: {
                        reactionBridge: {
                            include: {
                                reactionObj: true
                            }
                        }
                    }
                }
            }
        });
        if(!result){
            throw new ResponseError(404, "Not Found");
        }
        let {reactionBridgeObj, commentObj, ...restResult} = result;
        let returnObj: ContentDetailsResponse = {...restResult, reactions: [], comments: []};
        reactionBridgeObj.forEach((el: ContentReactionBridge & {reactionObj: ReactionType}): void => {
            let {reactionObj, ...restReactionObj} = el;
            returnObj.reactions.push(toContentReactionBridgeDetailsResponse(restReactionObj, reactionObj));
        });
        commentObj.forEach((el: (Comment & {reactionBridge: (CommentReactionBridge & {reactionObj: ReactionType})[]})): void => {
            let {reactionBridge, ...restComment} = el;
            let reactionBridgeList: CommentReactionBridgeDetailsResponse[] = [];
            el.reactionBridge.forEach((el2): void => {
                let {reactionObj, ...restReactionBridge} = el2;
                reactionBridgeList.push(toCommentReactionBridgeDetailsResponse(restReactionBridge, reactionObj));
            });
            let commentDetails: CommentDetailsResponse = toCommentDetailsResponse(restComment, reactionBridgeList);
            returnObj.comments.push(commentDetails);
        })
        return returnObj;
    }

    static async readAll(props?: {limit: number}): Promise<ContentResponse[]>{
        let result = await dbClient.content.findMany({
            orderBy: [
                {
                    last_updated: "desc"
                },
                {
                    created_at: "desc"
                }
            ],
            ...(props?{take: props.limit}: {}),
        });
        return result.map((el) => toContentResponse(el));
    }

    static async createContent(data: CreateContentRequest): Promise<ContentResponse> {
        let result = await dbClient.content.create({
            data: data
        });
        return toContentResponse(result);
    }

    static async updateContent(uuid: string, data: UpdateContentRequest): Promise<ContentResponse> {
        if(!uuid){
            throw new ResponseError(400, "Empty Field");
        }
        let updatedData = await dbClient.content.update({
            where: {uuid: uuid},
            data: data
        });
        return toContentResponse(updatedData);
    }

    static async deleteContent(uuid: string): Promise<ContentResponse> {
        if(!uuid){
            throw new ResponseError(400, "Empty Field");
        }
        let deletedData = await dbClient.content.delete({
            where: {uuid: uuid}
        });
        return toContentResponse(deletedData);
    }
}