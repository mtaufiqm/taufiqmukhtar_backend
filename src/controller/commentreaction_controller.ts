import { NextFunction, Response } from "express";
import { UserRequest } from "../models/user_model";
import z from "zod";
import { CreateCommentReactionBridgeRequest } from "../models/commentreactionbridge_model";
import { Validation } from "../validation/validation";
import { CommentReactionValidation } from "../validation/commentreaction_validation";
import { CommentReactionService } from "../service/commentreaction_service";
import { AuthHelper } from "../helper/auth_helper";

export class CommentReactionController {
    static async createReaction(req: UserRequest, resp: Response, next: NextFunction): Promise<void>{
        try {
            let comment_uuid: string = z.string().parse(req.params.uuid);
            let jsonBody = req.body as CreateCommentReactionBridgeRequest;
            let validatedData = Validation.validate(CommentReactionValidation.CREATE, jsonBody);
            validatedData.comment = comment_uuid;
            let result = await CommentReactionService.createReaction(validatedData);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
        }
    }

    
    static async deleteReaction(req: UserRequest, resp: Response, next: NextFunction): Promise<void>{
        try {
            AuthHelper.isMinimalAdminThrow(req);
            let uuid: string = z.string().parse(req.params.uuid);
            let result = await CommentReactionService.deleteReaction(uuid);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
        }
    }
}