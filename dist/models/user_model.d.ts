import { Request } from "express";
export interface UserRequest extends Request {
    user?: {
        username: string;
        roles?: string[];
    };
}
export type UserLoginRequest = {
    username: string;
    password: string;
};
export type UserResponse = {
    username: string;
    roles: string[];
};
export type CreateUserRequest = {
    username: string;
    password: string;
    roles?: string[];
};
export type UpdateUserRequest = {
    username?: string;
    password?: string;
    roles?: string[];
};
//# sourceMappingURL=user_model.d.ts.map