import { NextFunction, Request, Response } from "express";
import { ResponseError } from "../models/error_model";
import { CreateContentReactionBridgeRequest, UpdateContentReactionBridgeRequest } from "../models/contentreactionbridge_model";
import { Validation } from "../validation/validation";
import { ContentReactionValidation } from "../validation/contentreaction_validation";
import { ContentReactionService } from "../service/contentreaction_service";
import z from "zod";

export class ContentReactionController {
    static async createReaction(req: Request, resp: Response, next: NextFunction): Promise<void> {
        try {
            let jsonBody = req.body as CreateContentReactionBridgeRequest;
            let validatedData = Validation.validate(ContentReactionValidation.CREATE, jsonBody);
            let result = await ContentReactionService.createReaction(validatedData);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
        }
    }

    static async deleteReaction(req: Request, resp: Response, next: NextFunction): Promise<void> {
        try {
            let uuid: string = z.string().parse(req.params.uuid);
            let result = await ContentReactionService.deleteReaction(uuid);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
        }
    }

    //Currently, Dont Make it public
    static async updateReaction(req: Request, resp: Response, next: NextFunction): Promise<void> {
        try {
            let uuid: string = z.string().parse(req.params.uuid);
            let jsonBody = req.body as UpdateContentReactionBridgeRequest;
            let validatedData = Validation.validate(ContentReactionValidation.UPDATE, jsonBody);
            let result = ContentReactionService.updateReaction(uuid, validatedData);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
        }
    }

}