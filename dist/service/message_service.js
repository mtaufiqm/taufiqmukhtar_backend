"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageService = void 0;
const error_model_1 = require("../models/error_model");
const message_model_1 = require("../models/message_model");
const db_1 = require("../web/db");
class MessageService {
    static async getByUuid(uuid) {
        let result = await db_1.dbClient.message.findUnique({
            where: { uuid: uuid }
        });
        if (!result) {
            throw new error_model_1.ResponseError(404, "Not Found");
        }
        return (0, message_model_1.toMessageResponse)(result);
    }
    static async readAll(props) {
        let result = await db_1.dbClient.message.findMany({
            orderBy: {
                created_at: "desc"
            },
            ...(props ? { take: props.limit } : {}),
        });
        return result.map((el) => {
            return (0, message_model_1.toMessageResponse)(el);
        });
    }
    static async create(data) {
        let result = await db_1.dbClient.message.create({
            data: data
        });
        return (0, message_model_1.toMessageResponse)(result);
    }
}
exports.MessageService = MessageService;
//# sourceMappingURL=message_service.js.map