"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = __importDefault(require("zod"));
class UserValidation {
    static LOGIN = zod_1.default.object({
        username: zod_1.default.string().min(6).max(100),
        password: zod_1.default.string().min(6).max(100)
    });
    static CREATE = zod_1.default.object({
        username: zod_1.default.string().min(6).max(100),
        password: zod_1.default.string().min(6).max(100),
        roles: zod_1.default.array(zod_1.default.string()).optional()
    });
}
exports.UserValidation = UserValidation;
//# sourceMappingURL=user_validation.js.map