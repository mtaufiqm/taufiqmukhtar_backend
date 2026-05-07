import { NextFunction, Request, Response } from "express";
import { UserRequest } from "../models/user_model";
export declare class MessageCotroller {
    static getMessageByUuid(req: Request, resp: Response, next: NextFunction): Promise<void>;
    static getMessageDetailsByUuid(req: Request, resp: Response, next: NextFunction): Promise<void>;
    static createMessage(req: Request, resp: Response, next: NextFunction): Promise<void>;
    static readAll(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static readAllDetails(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=message_controller.d.ts.map