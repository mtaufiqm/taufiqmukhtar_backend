"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageCotroller = void 0;
const zod_1 = __importDefault(require("zod"));
const message_service_1 = require("../service/message_service");
const validation_1 = require("../validation/validation");
const MessageValidation_1 = require("../validation/MessageValidation");
class MessageCotroller {
    static async getMessageByUuid(req, resp, next) {
        try {
            let uuid = zod_1.default.string().parse(req.params.uuid);
            let result = await message_service_1.MessageService.getByUuid(uuid);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
        }
    }
    static async getMessageDetailsByUuid(req, resp, next) {
        try {
            let uuid = zod_1.default.string().parse(req.params.uuid);
            let result = await message_service_1.MessageService.getDetailsByUuid(uuid);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
        }
    }
    static async createMessage(req, resp, next) {
        try {
            let jsonBody = req.body;
            let validatedData = validation_1.Validation.validate(MessageValidation_1.MessageValidation.CREATE, jsonBody);
            let result = await message_service_1.MessageService.create(validatedData);
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
            let result = await message_service_1.MessageService.readAll({ limit: limit });
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
        }
    }
    static async readAllDetails(req, resp, next) {
        try {
            let limit = zod_1.default.coerce.number().default(100).parse(req.query.limit);
            let result = await message_service_1.MessageService.readAllDetails({ limit: limit });
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
        }
    }
}
exports.MessageCotroller = MessageCotroller;
//# sourceMappingURL=message_controller.js.map