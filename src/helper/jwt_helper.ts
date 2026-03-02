import * as jwt from "jsonwebtoken";
import { UserResponse } from "../models/user_model";
import { ResponseError } from "../models/error_model";
import { configDotenv } from "dotenv";

configDotenv({
override: true
});

export class JWTHelper {
    static secretKey: string = process.env.JWT_SECRET_KEY!;
    static verify(token: string) : jwt.JwtPayload | undefined {
        try {
            let returnToken = jwt.verify(token,JWTHelper.secretKey);
            if(typeof returnToken === "string"){
                return undefined;
            }
            return returnToken;
        } catch(err){
            return undefined;
        }
    }

    static async create(data: UserResponse): Promise<string> {
        try {
            let token = jwt.sign({
                username: data.username,
                roles: data.roles
            },JWTHelper.secretKey);
            return token;
        } catch(err){
            throw new ResponseError(401,"Failed Login.");
        }
    }
}