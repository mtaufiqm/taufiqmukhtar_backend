"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentReactionController = void 0;
const zod_1 = __importDefault(require("zod"));
const validation_1 = require("../validation/validation");
const commentreaction_validation_1 = require("../validation/commentreaction_validation");
const commentreaction_service_1 = require("../service/commentreaction_service");
const auth_helper_1 = require("../helper/auth_helper");
class CommentReactionController {
    static async createReaction(req, resp, next) {
        try {
            let comment_uuid = zod_1.default.string().parse(req.params.uuid);
            let jsonBody = req.body;
            let validatedData = validation_1.Validation.validate(commentreaction_validation_1.CommentReactionValidation.CREATE, jsonBody);
            validatedData.comment = comment_uuid;
            let result = await commentreaction_service_1.CommentReactionService.createReaction(validatedData);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
        }
    }
    static async deleteReaction(req, resp, next) {
        try {
            auth_helper_1.AuthHelper.isMinimalAdminThrow(req);
            let uuid = zod_1.default.string().parse(req.params.uuid);
            let result = await commentreaction_service_1.CommentReactionService.deleteReaction(uuid);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
        }
    }
}
exports.CommentReactionController = CommentReactionController;
//# sourceMappingURL=commentreaction_controller.js.map