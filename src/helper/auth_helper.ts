import { ResponseError } from "../models/error_model";
import { RolesSet } from "../models/roles_model";
import { UserRequest } from "../models/user_model";
import { RoleHelper } from "./role_helper";


export class AuthHelper {
    static isMinimalAdmin(req: UserRequest): boolean {
        //========================== Authorization
        let user = req.user!;
        if(RoleHelper.isNotContainOne({roles:user.roles, required: RolesSet.$1})){
            return false;
        }
        return true;
        //============================ Authorization
    }

    static isMinimalAdminThrow(req: UserRequest): boolean {
        //========================== Authorization
        let user = req.user!;
        if(RoleHelper.isNotContainOne({roles:user.roles, required: RolesSet.$1})){
            throw new ResponseError(403,"Forbidden");
        }
        return true;
        //============================ Authorization
    }

    static isAuthenticated(req: UserRequest): boolean {
        if(req.user){
            return true;
        } else {
            return false;
        }
    }

    static isOwn(req: UserRequest, username: string): boolean {
        if(req.user!.username === username){
            return true;
        }
        return false;
    }

    static isOwnThrow(req: UserRequest, username: string): boolean {
        if(req.user!.username === username){
            return true;
        }
        throw new ResponseError(403,"forbidden");
    }

}