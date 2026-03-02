import * as jwt from "jsonwebtoken";
import { UserResponse } from "../models/user_model";
export declare class JWTHelper {
    static secretKey: string;
    static verify(token: string): jwt.JwtPayload | undefined;
    static create(data: UserResponse): Promise<string>;
}
//# sourceMappingURL=jwt_helper.d.ts.map