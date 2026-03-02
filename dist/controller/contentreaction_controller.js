"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentReactionController = void 0;
const validation_1 = require("../validation/validation");
const contentreaction_validation_1 = require("../validation/contentreaction_validation");
const contentreaction_service_1 = require("../service/contentreaction_service");
const zod_1 = __importDefault(require("zod"));
class ContentReactionController {
    static async createReaction(req, resp, next) {
        try {
            let jsonBody = req.body;
            let validatedData = validation_1.Validation.validate(contentreaction_validation_1.ContentReactionValidation.CREATE, jsonBody);
            let result = await contentreaction_service_1.ContentReactionService.createReaction(validatedData);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
        }
    }
    static async deleteReaction(req, resp, next) {
        try {
            let uuid = zod_1.default.string().parse(req.params.uuid);
            let result = await contentreaction_service_1.ContentReactionService.deleteReaction(uuid);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
        }
    }
    //Currently, Dont Make it public
    static async updateReaction(req, resp, next) {
        try {
            let uuid = zod_1.default.string().parse(req.params.uuid);
            let jsonBody = req.body;
            let validatedData = validation_1.Validation.validate(contentreaction_validation_1.ContentReactionValidation.UPDATE, jsonBody);
            let result = contentreaction_service_1.ContentReactionService.updateReaction(uuid, validatedData);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
        }
    }
}
exports.ContentReactionController = ContentReactionController;
//# sourceMappingURL=contentreaction_controller.js.map