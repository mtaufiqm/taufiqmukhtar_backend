"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageTypeController = void 0;
const messagetype_service_1 = require("../service/messagetype_service");
const zod_1 = __importDefault(require("zod"));
class MessageTypeController {
    static async readAll(req, resp, next) {
        try {
            let result = await messagetype_service_1.MessageTypeService.readAll();
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
        }
    }
    static async getByUuid(req, resp, next) {
        try {
            let uuid = zod_1.default.string().parse(req.params.uuid);
            let result = await messagetype_service_1.MessageTypeService.getByUuid(uuid);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
        }
    }
}
exports.MessageTypeController = MessageTypeController;
//# sourceMappingURL=messagetype_controller.js.map