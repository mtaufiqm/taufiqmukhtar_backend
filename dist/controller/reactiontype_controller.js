"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionTypeController = void 0;
const reactiontype_service_1 = require("../service/reactiontype_service");
class ReactionTypeController {
    static async readAll(req, resp, next) {
        try {
            let result = await reactiontype_service_1.ReactionTypeService.readAll();
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
        }
    }
}
exports.ReactionTypeController = ReactionTypeController;
//# sourceMappingURL=reactiontype_controller.js.map