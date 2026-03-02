import { NextFunction, Request, Response } from "express";
import { UserLoginRequest } from "../models/user_model";
import { Validation } from "../validation/validation";
import { UserValidation } from "../validation/user_validation";
import { UserService } from "../service/user_service";
import { JWTHelper } from "../helper/jwt_helper";

export class AuthController {
    //post
    static async login(req: Request, resp: Response, next: NextFunction): Promise<void> {
        try {
            let jsonBody = req.body as UserLoginRequest;
            let data = Validation.validate(UserValidation.LOGIN,jsonBody);
            let result = await UserService.login(data);
            let jwtToken = await JWTHelper.create(result);
            resp.status(200).json({
                token: jwtToken
            });
            return;
        } catch(err){
            next(err);
        }
    }
}