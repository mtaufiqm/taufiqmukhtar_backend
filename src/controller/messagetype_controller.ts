import { NextFunction, Request, Response } from "express";
import { UserRequest } from "../models/user_model";
import { MessageTypeService } from "../service/messagetype_service";
import z from "zod";

export class MessageTypeController {
    static async readAll(req: Request, resp: Response, next: NextFunction): Promise<void>{
        try {
            let result = await MessageTypeService.readAll();
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
        }
    }

    static async getByUuid(req: Request, resp: Response, next: NextFunction): Promise<void>{
        try {
            let uuid: string = z.string().parse(req.params.uuid);
            let result = await MessageTypeService.getByUuid(uuid);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
        }
    }
}