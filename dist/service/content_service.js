"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentService = void 0;
const comment_model_1 = require("../models/comment_model");
const commentreactionbridge_model_1 = require("../models/commentreactionbridge_model");
const content_model_1 = require("../models/content_model");
const contentreactionbridge_model_1 = require("../models/contentreactionbridge_model");
const error_model_1 = require("../models/error_model");
const db_1 = require("../web/db");
class ContentService {
    static async getByUuid(uuid) {
        let result = await db_1.dbClient.content.findUnique({
            where: { uuid: uuid }
        });
        if (!result) {
            throw new error_model_1.ResponseError(404, `Not Found`);
        }
        return (0, content_model_1.toContentResponse)(result);
    }
    static async getDetailsByUuid(uuid) {
        let result = await db_1.dbClient.content.findUnique({
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
        if (!result) {
            throw new error_model_1.ResponseError(404, "Not Found");
        }
        let { reactionBridgeObj, commentObj, ...restResult } = result;
        let returnObj = { ...restResult, reactions: [], comments: [] };
        reactionBridgeObj.forEach((el) => {
            let { reactionObj, ...restReactionObj } = el;
            returnObj.reactions.push((0, contentreactionbridge_model_1.toContentReactionBridgeDetailsResponse)(restReactionObj, reactionObj));
        });
        commentObj.forEach((el) => {
            let { reactionBridge, ...restComment } = el;
            let reactionBridgeList = [];
            el.reactionBridge.forEach((el2) => {
                let { reactionObj, ...restReactionBridge } = el2;
                reactionBridgeList.push((0, commentreactionbridge_model_1.toCommentReactionBridgeDetailsResponse)(restReactionBridge, reactionObj));
            });
            let commentDetails = (0, comment_model_1.toCommentDetailsResponse)(restComment, reactionBridgeList);
            returnObj.comments.push(commentDetails);
        });
        return returnObj;
    }
    static async readAll(props) {
        let result = await db_1.dbClient.content.findMany({
            orderBy: [
                {
                    last_updated: "desc"
                },
                {
                    created_at: "desc"
                }
            ],
            ...(props ? { take: props.limit } : {}),
        });
        return result.map((el) => (0, content_model_1.toContentResponse)(el));
    }
    static async createContent(data) {
        let result = await db_1.dbClient.content.create({
            data: data
        });
        return (0, content_model_1.toContentResponse)(result);
    }
    static async updateContent(uuid, data) {
        if (!uuid) {
            throw new error_model_1.ResponseError(400, "Empty Field");
        }
        let updatedData = await db_1.dbClient.content.update({
            where: { uuid: uuid },
            data: data
        });
        return (0, content_model_1.toContentResponse)(updatedData);
    }
    static async deleteContent(uuid) {
        if (!uuid) {
            throw new error_model_1.ResponseError(400, "Empty Field");
        }
        let deletedData = await db_1.dbClient.content.delete({
            where: { uuid: uuid }
        });
        return (0, content_model_1.toContentResponse)(deletedData);
    }
}
exports.ContentService = ContentService;
//# sourceMappingURL=content_service.js.map