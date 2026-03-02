"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentController = void 0;
const zod_1 = __importDefault(require("zod"));
const validation_1 = require("../validation/validation");
const comment_validation_1 = require("../validation/comment_validation");
const comment_service_1 = require("../service/comment_service");
const auth_helper_1 = require("../helper/auth_helper");
class CommentController {
    static async createComment(req, resp, next) {
        try {
            let contentUuid = zod_1.default.string().parse(req.params.uuid);
            let jsonBody = req.body;
            let validatedData = validation_1.Validation.validate(comment_validation_1.CommentValidation.CREATE, jsonBody);
            validatedData.content = contentUuid;
            let result = await comment_service_1.CommentService.createComment(validatedData);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
        }
    }
    static async deleteComment(req, resp, next) {
        try {
            auth_helper_1.AuthHelper.isMinimalAdminThrow(req);
            let commentUuid = zod_1.default.string().parse(req.params.uuid);
            let result = await comment_service_1.CommentService.deleteComment(commentUuid);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
        }
    }
}
exports.CommentController = CommentController;
//# sourceMappingURL=comment_controller.js.map