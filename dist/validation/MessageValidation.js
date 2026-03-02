"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageValidation = void 0;
const zod_1 = __importDefault(require("zod"));
class MessageValidation {
    static CREATE = zod_1.default.object({
        body: zod_1.default.string().nonempty(),
        type: zod_1.default.string().nonempty()
    });
}
exports.MessageValidation = MessageValidation;
//# sourceMappingURL=MessageValidation.js.map