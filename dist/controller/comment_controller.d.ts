import { NextFunction, Response } from "express";
import { UserRequest } from "../models/user_model";
export declare class CommentController {
    static createComment(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static deleteComment(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=comment_controller.d.ts.map