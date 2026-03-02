import { NextFunction, Response } from "express";
import { ResponseError } from "../models/error_model";
import { UserRequest } from "../models/user_model";
import { ContentDetailsResponse, ContentResponse, CreateContentRequest, UpdateContentRequest } from "../models/content_model";
import { Validation } from "../validation/validation";
import { ContentValidation } from "../validation/content_validation";
import { ContentService } from "../service/content_service";
import z from "zod";
import { AuthHelper } from "../helper/auth_helper";
import { CommentController } from "./comment_controller";
import { CommentService } from "../service/comment_service";

export class ContentController {
    static async createContent(req: UserRequest, resp: Response, next: NextFunction): Promise<void>{
        try {
            AuthHelper.isMinimalAdminThrow(req);
            let jsonData = req.body as CreateContentRequest;
            let validatedData = Validation.validate(ContentValidation.CREATE, jsonData);
            validatedData.created_by = req.user!.username;
            let result: ContentResponse = await ContentService.createContent(validatedData);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
        }
    }

    static async updateContent(req: UserRequest, resp: Response, next: NextFunction): Promise<void>{
        try {
            AuthHelper.isMinimalAdminThrow(req);
            let uuid: string = z.string().parse(req.params.uuid);
            let jsonData = req.body as UpdateContentRequest;
            let validatedData = Validation.validate(ContentValidation.UPDATE, jsonData);
            let result: ContentResponse = await ContentService.updateContent(uuid,validatedData);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
        }
    }

    static async deleteContent(req: UserRequest, resp: Response, next: NextFunction): Promise<void>{
        try {
            AuthHelper.isMinimalAdminThrow(req);
            let uuid: string = z.string().parse(req.params.uuid);
            let result: ContentResponse = await ContentService.deleteContent(uuid);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
        }
    }

    static async getContentDetails(req: UserRequest, resp: Response, next: NextFunction): Promise<void>{
        try {
            let uuid: string = z.string().parse(req.params.uuid);
            let result: ContentDetailsResponse = await ContentService.getDetailsByUuid(uuid);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
        }
    }

    static async readAll(req: UserRequest, resp: Response, next: NextFunction): Promise<void>{
        try {
            let limit: number = z.coerce.number().default(100).parse(req.query.limit);
            let result: ContentResponse[] = await ContentService.readAll({limit: limit});
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
        }
    }

    static async readAllCommentDetailsByContent(req: UserRequest, resp: Response, next: NextFunction): Promise<void> {
        try {
            let uuid: string = z.string().parse(req.params.uuid);
            let result = await CommentService.readAllDetailsByContentUuid(uuid);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
        }
    }
}