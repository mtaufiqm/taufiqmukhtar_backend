import { UserRequest } from "../models/user_model";
export declare class AuthHelper {
    static isMinimalAdmin(req: UserRequest): boolean;
    static isMinimalAdminThrow(req: UserRequest): boolean;
    static isAuthenticated(req: UserRequest): boolean;
    static isOwn(req: UserRequest, username: string): boolean;
    static isOwnThrow(req: UserRequest, username: string): boolean;
}
//# sourceMappingURL=auth_helper.d.ts.map