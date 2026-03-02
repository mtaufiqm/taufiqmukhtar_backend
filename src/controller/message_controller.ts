import { NextFunction, Request, Response } from "express";
import z from "zod";
import { CreateMessageRequest, MessageResponse } from "../models/message_model";
import { MessageService } from "../service/message_service";
import { Validation } from "../validation/validation";
import { MessageValidation } from "../validation/MessageValidation";
import { UserRequest } from "../models/user_model";

export class MessageCotroller {
    static async getMessageByUuid(req: Request, resp: Response, next: NextFunction): Promise<void> {
        try {
            let uuid: string = z.string().parse(req.params.uuid);
            let result: MessageResponse = await MessageService.getByUuid(uuid);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
        }
    }

    static async createMessage(req: Request, resp: Response, next: NextFunction): Promise<void> {
        try {
            let jsonBody: CreateMessageRequest = req.body as CreateMessageRequest;
            let validatedData = Validation.validate(MessageValidation.CREATE, jsonBody);
            let result: MessageResponse = await MessageService.create(validatedData);
            resp.status(200).json(result);
            return; 
        } catch(err){
            next(err);
        }
    }

    static async readAll(req: UserRequest, resp: Response, next: NextFunction): Promise<void> {
        try {
            let limit: number = z.coerce.number().default(100).parse(req.query.limit);
            let result: MessageResponse[] = await MessageService.readAll({limit: limit});
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
        }
    }
}