"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentValidation = void 0;
const zod_1 = __importDefault(require("zod"));
class ContentValidation {
    static CREATE = zod_1.default.object({
        title: zod_1.default.string().nonempty(),
        body: zod_1.default.string().nonempty(),
        created_by: zod_1.default.string().optional().nullable()
    });
    static UPDATE = zod_1.default.object({
        title: zod_1.default.string().optional(),
        body: zod_1.default.string().optional()
    });
}
exports.ContentValidation = ContentValidation;
//# sourceMappingURL=content_validation.js.map