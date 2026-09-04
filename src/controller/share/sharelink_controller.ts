import { NextFunction, Request, Response } from "express";
import { SharelinkService } from "../../service/sharelink/sharelink_service";
import z from "zod";
import { ResponseError } from "../../models/error_model";
import { CreateSharelinkReq } from "../../models/sharelink/sharelink_model";
import { SharelinkValidation } from "../../validation/sharelink/sharelink_validation";
import { Validation } from "../../validation/validation";

export class SharelinkController {
    static async getByKey(req: Request, resp: Response, next: NextFunction): Promise<void> {
        try {
            let key: string = z.string().nonempty().min(3).parse(req.params.key);
            if(key.includes(" ")){
                throw new ResponseError(400, 'Kata Kunci Tidak Boleh Mengandung Spasi');
            }
            let result = await SharelinkService.getByKey(key);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
        }
    }
    static async createData(req: Request, resp: Response, next: NextFunction): Promise<void> {
        try {
            let createData: CreateSharelinkReq = req.body as CreateSharelinkReq;
            let validatedData: CreateSharelinkReq = Validation.validate(SharelinkValidation.CREATE, createData);
            let result = await SharelinkService.createData(validatedData);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
        }
    }
}