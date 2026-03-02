"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleHelper = void 0;
class RoleHelper {
    static isContainOne(input) {
        if (!input.roles) {
            return false;
        }
        if (!input.required) {
            return true;
        }
        return input.required.some((el) => {
            if (input.roles.includes(el)) {
                return true;
            }
            return false;
        });
    }
    static isNotContainOne(input) {
        return !this.isContainOne(input);
    }
}
exports.RoleHelper = RoleHelper;
//# sourceMappingURL=role_helper.js.map