import { NextFunction, Response } from "express";
import { UserRequest } from "../models/user_model";
export declare class CommentReactionController {
    static createReaction(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static deleteReaction(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=commentreaction_controller.d.ts.map