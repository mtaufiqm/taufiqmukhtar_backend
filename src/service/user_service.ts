import { string } from "zod";
import { ResponseError } from "../models/error_model";
import { HashHelper } from "../helper/hash_helper";
import { JWTHelper } from "../helper/jwt_helper";
import { CreateUserRequest, UserLoginRequest, UserResponse } from "../models/user_model";
import { dbClient} from "../web/db";
import { Roles } from "../generated/prisma/client";


export class UserService {
    static async login(req: UserLoginRequest): Promise<UserResponse> {
        try {
            let username: string = req.username;
            let password: string = req.password;
            let user = await dbClient.user.findFirst({
                where:{username:username},
                include: {
                    rolesBridgeObj: true
                }
            });
            if(!user){
                throw new ResponseError(401,`Invalid Username/Password`);
            }
            if(user!.password !== await HashHelper.hash(password)){
                throw new ResponseError(401,"Invalid Username/Password");
            }
            let response: UserResponse = {
                username: user!.username,
                roles: []
            };
            user?.rolesBridgeObj.forEach((el): void => {
                response.roles.push(el.roles);
            });
            return {
                username: user!.username,
                roles: user!.rolesBridgeObj.map((el) => el.roles)
            };
        } catch(err){
            console.info(`Error ${err}`);
            throw new ResponseError(401,"Unauthorized");
        }
    }

    static async create(req: CreateUserRequest): Promise<UserResponse> {
        var username: string = req.username;
        var pwd: string = req.password;
        var roles = req.roles??[];
        var hashedPwd: string = await HashHelper.hash(pwd);
        var result = await dbClient.user.create({
            data:{
                username: username,
                password: hashedPwd,
                rolesBridgeObj: {
                    create: roles.map((el) => ({
                        roles: el
                    })),
                    
                }
            },
        });
        var listRole = await dbClient.roles.findMany({
            where:{
                userBridge: {
                    some: {
                        username: username
                    }
                }
            }
        });
        console.info(`List Role ${listRole.map((el) => el.description)}`);
        return {username:result.username, roles: listRole.map((el: Roles): string => el.description)};
    }
}