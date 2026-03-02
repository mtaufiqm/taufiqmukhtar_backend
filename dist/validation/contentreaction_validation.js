"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentReactionValidation = void 0;
const zod_1 = __importDefault(require("zod"));
class ContentReactionValidation {
    static CREATE = zod_1.default.object({
        content: zod_1.default.string().nonempty(),
        reaction: zod_1.default.string().nonempty(),
        name: zod_1.default.string().nullable().optional()
    });
    static UPDATE = zod_1.default.object({
        content: zod_1.default.string().optional(),
        reaction: zod_1.default.string().optional()
    });
}
exports.ContentReactionValidation = ContentReactionValidation;
//# sourceMappingURL=contentreaction_validation.js.map