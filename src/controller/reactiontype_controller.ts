import { NextFunction, Response } from "express";
import { UserRequest } from "../models/user_model";
import { ReactionTypeService } from "../service/reactiontype_service";

export class ReactionTypeController {
    static async readAll(req: UserRequest, resp: Response, next: NextFunction): Promise<void> {
        try {
            let result = await ReactionTypeService.readAll();
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
        }
    }
}