import { NextFunction, Response } from "express";
import { UserRequest } from "../models/user_model";
import z, { uuid } from "zod";
import { CreateCommentRequest } from "../models/comment_model";
import { Validation } from "../validation/validation";
import { CommentValidation } from "../validation/comment_validation";
import { CommentService } from "../service/comment_service";
import { AuthHelper } from "../helper/auth_helper";

export class CommentController {
    static async createComment(req: UserRequest, resp: Response, next: NextFunction): Promise<void> {
        try {
            let contentUuid: string = z.string().parse(req.params.uuid);
            let jsonBody: CreateCommentRequest = req.body as CreateCommentRequest;
            let validatedData: CreateCommentRequest = Validation.validate(CommentValidation.CREATE, jsonBody);
            validatedData.content = contentUuid;
            let result = await CommentService.createComment(validatedData);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
        }
    }

    static async deleteComment(req: UserRequest, resp: Response, next: NextFunction): Promise<void> {
        try {
            AuthHelper.isMinimalAdminThrow(req);
            let commentUuid: string = z.string().parse(req.params.uuid);
            let result = await CommentService.deleteComment(commentUuid);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
        }
    }

    
}