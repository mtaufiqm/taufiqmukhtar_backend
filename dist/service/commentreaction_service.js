"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentReactionService = void 0;
const commentreactionbridge_model_1 = require("../models/commentreactionbridge_model");
const db_1 = require("../web/db");
class CommentReactionService {
    static async createReaction(data) {
        let result = await db_1.dbClient.commentReactionBridge.create({
            data: data
        });
        return (0, commentreactionbridge_model_1.toCommentReactionBridgeResponse)(result);
    }
    static async deleteReaction(uuid) {
        let result = await db_1.dbClient.commentReactionBridge.delete({
            where: {
                uuid: uuid
            }
        });
        return (0, commentreactionbridge_model_1.toCommentReactionBridgeResponse)(result);
    }
}
exports.CommentReactionService = CommentReactionService;
//# sourceMappingURL=commentreaction_service.js.map