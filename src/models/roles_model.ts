import { Roles } from "../generated/prisma/client"


export type RolesResponse = {
    description: string
}

export type CreateRoles = {
    description: string;
}

export function toRolesResponse(data: Roles): RolesResponse {
    return data as RolesResponse;
}

export class RolesSet {
    /**  SUPERADMIN  */
    static SUPERADMIN: string = "SUPERADMIN";    
    /**  ADMIN  */
    static ADMIN: string = "ADMIN";    
    /**  [SUPERADMIN, ADMIN]  */
    static $1: string[] = [RolesSet.SUPERADMIN,RolesSet.ADMIN,RolesSet.SUPERADMIN];
}