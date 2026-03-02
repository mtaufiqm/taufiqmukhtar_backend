"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentReactionService = void 0;
const contentreactionbridge_model_1 = require("../models/contentreactionbridge_model");
const db_1 = require("../web/db");
class ContentReactionService {
    static async createReaction(data) {
        let result = await db_1.dbClient.contentReactionBridge.create({
            data: data
        });
        return (0, contentreactionbridge_model_1.toContentReactionBridgeResponse)(result);
    }
    static async deleteReaction(uuid) {
        let result = await db_1.dbClient.contentReactionBridge.delete({
            where: {
                uuid: uuid
            }
        });
        return (0, contentreactionbridge_model_1.toContentReactionBridgeResponse)(result);
    }
    static async updateReaction(uuid, data) {
        let result = await db_1.dbClient.contentReactionBridge.update({
            where: {
                uuid: uuid
            },
            data: data
        });
        return (0, contentreactionbridge_model_1.toContentReactionBridgeResponse)(result);
    }
    static async readAllDetailsByContentUuid(uuid) {
        let result = await db_1.dbClient.contentReactionBridge.findMany({
            where: {
                content: uuid
            },
            include: {
                reactionObj: true
            }
        });
        return result.map((el) => {
            let { reactionObj, ...restData } = el;
            return (0, contentreactionbridge_model_1.toContentReactionBridgeDetailsResponse)(restData, reactionObj);
        });
    }
}
exports.ContentReactionService = ContentReactionService;
//# sourceMappingURL=contentreaction_service.js.map