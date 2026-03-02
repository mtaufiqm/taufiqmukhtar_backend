"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const comment_model_1 = require("../models/comment_model");
const commentreactionbridge_model_1 = require("../models/commentreactionbridge_model");
const error_model_1 = require("../models/error_model");
const db_1 = require("../web/db");
class CommentService {
    static async getByUuid(uuid) {
        let result = await db_1.dbClient.comment.findUnique({
            where: {
                uuid: uuid
            }
        });
        if (!result) {
            throw new error_model_1.ResponseError(404, "Not Found");
        }
        return (0, comment_model_1.toCommentResponse)(result);
    }
    static async getDetailsByUuid(uuid) {
        let result = await db_1.dbClient.comment.findUnique({
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
        if (!result) {
            throw new error_model_1.ResponseError(404, "Not Found");
        }
        let { reactionBridge, ...restResult } = result;
        let returnObj = { ...restResult, reactions: [] };
        reactionBridge.forEach((el) => {
            let { reactionObj, ...restReactionObj } = el;
            returnObj.reactions.push((0, commentreactionbridge_model_1.toCommentReactionBridgeDetailsResponse)(restReactionObj, reactionObj));
        });
        return returnObj;
    }
    static async readAllDetailsByContentUuid(uuid) {
        let result = await db_1.dbClient.comment.findMany({
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
        let listReturnObj = [];
        result.forEach((el) => {
            let { reactionBridge, ...restResult } = el;
            let returnObj = { ...restResult, reactions: [] };
            reactionBridge.forEach((el) => {
                let { reactionObj, ...restReactionObj } = el;
                returnObj.reactions.push((0, commentreactionbridge_model_1.toCommentReactionBridgeDetailsResponse)(restReactionObj, reactionObj));
            });
        });
        return listReturnObj;
    }
    static async readAll() {
        let result = await db_1.dbClient.comment.findMany();
        return result.map((el) => (0, comment_model_1.toCommentResponse)(el));
    }
    static async readAllByContentUuid(uuid) {
        let result = await db_1.dbClient.comment.findMany({
            where: {
                content: uuid
            },
            orderBy: {
                created_at: "desc"
            }
        });
        return result.map((el) => (0, comment_model_1.toCommentResponse)(el));
    }
    static async createComment(data) {
        let result = await db_1.dbClient.comment.create({
            data: data
        });
        return (0, comment_model_1.toCommentResponse)(result);
    }
    static async updateComment(uuid, data) {
        if (!uuid) {
            throw new error_model_1.ResponseError(400, "Empty Field");
        }
        let updatedData = await db_1.dbClient.comment.update({
            where: { uuid: uuid },
            data: data
        });
        return (0, comment_model_1.toCommentResponse)(updatedData);
    }
    static async deleteComment(uuid) {
        if (!uuid) {
            throw new error_model_1.ResponseError(400, "Empty Field");
        }
        let deletedData = await db_1.dbClient.comment.delete({
            where: { uuid: uuid }
        });
        return (0, comment_model_1.toCommentResponse)(deletedData);
    }
}
exports.CommentService = CommentService;
//# sourceMappingURL=comment_service.js.map