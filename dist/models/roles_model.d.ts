import { Roles } from "../generated/prisma/client";
export type RolesResponse = {
    description: string;
};
export type CreateRoles = {
    description: string;
};
export declare function toRolesResponse(data: Roles): RolesResponse;
export declare class RolesSet {
    /**  SUPERADMIN  */
    static SUPERADMIN: string;
    /**  ADMIN  */
    static ADMIN: string;
    /**  [SUPERADMIN, ADMIN]  */
    static $1: string[];
}
//# sourceMappingURL=roles_model.d.ts.map