import { NextFunction, Response } from "express"
import { UserRequest } from "../models/user_model";
import { dbClient } from "../web/db";
import { User } from "../generated/prisma/client";
import { jwt } from "zod";
import { JWTHelper } from "../helper/jwt_helper";
import { JwtPayload } from "jsonwebtoken";

export const authMiddleware = async (req: UserRequest, resp: Response, next:NextFunction): Promise<void> => {
    try {
        let authHeader = req.headers.authorization
        if(authHeader){
            let bearerToken = authHeader.trim().split(" ");
            let jwtToken = bearerToken[1]!;
            let verified = JWTHelper.verify(jwtToken);
            if(!verified){
                resp.sendStatus(401);
                return;
            }
            let username: string = verified.username;
            let roles: string[] = verified.roles;
            // COMMENNT THIS, NO NEED CHECK EVERY REQUEST, just verify the JWT TOKEN
            // let isThereUser = await client.user.count({where:{
            //     username: username.trim()
            // }});
            // if(isThereUser != 1){
            //     resp.sendStatus(401);
            //     return;
            // }
            req.user = {
                username: username,
                roles: roles
            };
            next();
        } else {
            resp.sendStatus(401);
            return;
        }
    } catch(err){
        next(err);
        return;
    }
}
