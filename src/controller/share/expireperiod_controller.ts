import { NextFunction, Request, Response } from "express";
import { ExpirePeriodResp } from "../../models/sharelink/expireperiod_model";
import { ExpirePeriodService } from "../../service/sharelink/expireperiod_service";

export class ExpirePeriodController {
    static async readAll(req: Request, resp: Response, next: NextFunction): Promise<void> {
        try {
            let datas: ExpirePeriodResp[] = await ExpirePeriodService.readAll();
            resp.status(200).json(datas);
            return;
        } catch(err){
            next(err);
        } 
    }
}