import { NextFunction, Response } from "express";
import { UserRequest } from "../models/user_model";
export declare const authMiddleware: (req: UserRequest, resp: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=auth_middleware.d.ts.map