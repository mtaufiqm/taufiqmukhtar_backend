"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthHelper = void 0;
const error_model_1 = require("../models/error_model");
const roles_model_1 = require("../models/roles_model");
const role_helper_1 = require("./role_helper");
class AuthHelper {
    static isMinimalAdmin(req) {
        //========================== Authorization
        let user = req.user;
        if (role_helper_1.RoleHelper.isNotContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$1 })) {
            return false;
        }
        return true;
        //============================ Authorization
    }
    static isMinimalAdminThrow(req) {
        //========================== Authorization
        let user = req.user;
        if (role_helper_1.RoleHelper.isNotContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$1 })) {
            throw new error_model_1.ResponseError(403, "Forbidden");
        }
        return true;
        //============================ Authorization
    }
    static isAuthenticated(req) {
        if (req.user) {
            return true;
        }
        else {
            return false;
        }
    }
    static isOwn(req, username) {
        if (req.user.username === username) {
            return true;
        }
        return false;
    }
    static isOwnThrow(req, username) {
        if (req.user.username === username) {
            return true;
        }
        throw new error_model_1.ResponseError(403, "forbidden");
    }
}
exports.AuthHelper = AuthHelper;
//# sourceMappingURL=auth_helper.js.map