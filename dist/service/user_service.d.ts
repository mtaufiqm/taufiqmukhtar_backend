import { CreateUserRequest, UserLoginRequest, UserResponse } from "../models/user_model";
export declare class UserService {
    static login(req: UserLoginRequest): Promise<UserResponse>;
    static create(req: CreateUserRequest): Promise<UserResponse>;
}
//# sourceMappingURL=user_service.d.ts.map