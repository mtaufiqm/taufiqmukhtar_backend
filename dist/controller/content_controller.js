"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentController = void 0;
const validation_1 = require("../validation/validation");
const content_validation_1 = require("../validation/content_validation");
const content_service_1 = require("../service/content_service");
const zod_1 = __importDefault(require("zod"));
const auth_helper_1 = require("../helper/auth_helper");
const comment_service_1 = require("../service/comment_service");
class ContentController {
    static async createContent(req, resp, next) {
        try {
            auth_helper_1.AuthHelper.isMinimalAdminThrow(req);
            let jsonData = req.body;
            let validatedData = validation_1.Validation.validate(content_validation_1.ContentValidation.CREATE, jsonData);
            validatedData.created_by = req.user.username;
            let result = await content_service_1.ContentService.createContent(validatedData);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
        }
    }
    static async updateContent(req, resp, next) {
        try {
            auth_helper_1.AuthHelper.isMinimalAdminThrow(req);
            let uuid = zod_1.default.string().parse(req.params.uuid);
            let jsonData = req.body;
            let validatedData = validation_1.Validation.validate(content_validation_1.ContentValidation.UPDATE, jsonData);
            let result = await content_service_1.ContentService.updateContent(uuid, validatedData);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
        }
    }
    static async deleteContent(req, resp, next) {
        try {
            auth_helper_1.AuthHelper.isMinimalAdminThrow(req);
            let uuid = zod_1.default.string().parse(req.params.uuid);
            let result = await content_service_1.ContentService.deleteContent(uuid);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
        }
    }
    static async getContentDetails(req, resp, next) {
        try {
            let uuid = zod_1.default.string().parse(req.params.uuid);
            let result = await content_service_1.ContentService.getDetailsByUuid(uuid);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
        }
    }
    static async readAll(req, resp, next) {
        try {
            let limit = zod_1.default.coerce.number().default(100).parse(req.query.limit);
            let result = await content_service_1.ContentService.readAll({ limit: limit });
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
        }
    }
    static async readAllCommentDetailsByContent(req, resp, next) {
        try {
            let uuid = zod_1.default.string().parse(req.params.uuid);
            let result = await comment_service_1.CommentService.readAllDetailsByContentUuid(uuid);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
        }
    }
}
exports.ContentController = ContentController;
//# sourceMappingURL=content_controller.js.map