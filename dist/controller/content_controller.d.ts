import { NextFunction, Response } from "express";
import { UserRequest } from "../models/user_model";
export declare class ContentController {
    static createContent(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static updateContent(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static deleteContent(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static getContentDetails(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static readAll(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=content_controller.d.ts.map