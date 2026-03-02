"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageTypeService = void 0;
const error_model_1 = require("../models/error_model");
const messagetype_model_1 = require("../models/messagetype_model");
const db_1 = require("../web/db");
class MessageTypeService {
    static async readAll() {
        let result = await db_1.dbClient.messageType.findMany();
        return result.map((el) => {
            return (0, messagetype_model_1.toMessageTypeResponse)(el);
        });
    }
    static async getByUuid(uuid) {
        let result = await db_1.dbClient.messageType.findUnique({
            where: { uuid: uuid }
        });
        if (!result) {
            throw new error_model_1.ResponseError(404, "Not Found");
        }
        return (0, messagetype_model_1.toMessageTypeResponse)(result);
    }
    static async deleteByUuid(uuid) {
        if (!uuid) {
            throw new error_model_1.ResponseError(400, "Empty Field");
        }
        let result = await db_1.dbClient.messageType.delete({
            where: { uuid: uuid }
        });
        return (0, messagetype_model_1.toMessageTypeResponse)(result);
    }
    static async create(data) {
        let result = await db_1.dbClient.messageType.create({
            data: data
        });
        return (0, messagetype_model_1.toMessageTypeResponse)(result);
    }
}
exports.MessageTypeService = MessageTypeService;
//# sourceMappingURL=messagetype_service.js.map