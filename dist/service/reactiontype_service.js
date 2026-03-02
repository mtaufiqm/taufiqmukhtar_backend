"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionTypeService = void 0;
const reactiontype_model_1 = require("../models/reactiontype_model");
const db_1 = require("../web/db");
class ReactionTypeService {
    static async readAll() {
        let result = await db_1.dbClient.reactionType.findMany();
        return result.map((el) => {
            return (0, reactiontype_model_1.toReactionTypeResponse)(el);
        });
    }
}
exports.ReactionTypeService = ReactionTypeService;
//# sourceMappingURL=reactiontype_service.js.map