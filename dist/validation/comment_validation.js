"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentValidation = void 0;
const zod_1 = __importDefault(require("zod"));
class CommentValidation {
    static CREATE = zod_1.default.object({
        name: zod_1.default.string().nullable().optional(),
        body: zod_1.default.string().nonempty(),
        content: zod_1.default.string().nonempty()
    });
    static UPDATE = zod_1.default.object({
        name: zod_1.default.string().nullable().optional(),
        body: zod_1.default.string().optional(),
        content: zod_1.default.string().optional()
    });
}
exports.CommentValidation = CommentValidation;
//# sourceMappingURL=comment_validation.js.map