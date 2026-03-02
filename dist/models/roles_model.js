"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesSet = void 0;
exports.toRolesResponse = toRolesResponse;
function toRolesResponse(data) {
    return data;
}
class RolesSet {
    /**  SUPERADMIN  */
    static SUPERADMIN = "SUPERADMIN";
    /**  ADMIN  */
    static ADMIN = "ADMIN";
    /**  [SUPERADMIN, ADMIN]  */
    static $1 = [RolesSet.SUPERADMIN, RolesSet.ADMIN, RolesSet.SUPERADMIN];
}
exports.RolesSet = RolesSet;
//# sourceMappingURL=roles_model.js.map