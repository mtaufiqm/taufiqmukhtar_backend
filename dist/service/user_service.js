"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const error_model_1 = require("../models/error_model");
const hash_helper_1 = require("../helper/hash_helper");
const db_1 = require("../web/db");
class UserService {
    static async login(req) {
        try {
            let username = req.username;
            let password = req.password;
            let user = await db_1.dbClient.user.findFirst({
                where: { username: username },
                include: {
                    rolesBridgeObj: true
                }
            });
            if (!user) {
                throw new error_model_1.ResponseError(401, `Invalid Username/Password`);
            }
            if (user.password !== await hash_helper_1.HashHelper.hash(password)) {
                throw new error_model_1.ResponseError(401, "Invalid Username/Password");
            }
            let response = {
                username: user.username,
                roles: []
            };
            user?.rolesBridgeObj.forEach((el) => {
                response.roles.push(el.roles);
            });
            return {
                username: user.username,
                roles: user.rolesBridgeObj.map((el) => el.roles)
            };
        }
        catch (err) {
            console.info(`Error ${err}`);
            throw new error_model_1.ResponseError(401, "Unauthorized");
        }
    }
    static async create(req) {
        var username = req.username;
        var pwd = req.password;
        var roles = req.roles ?? [];
        var hashedPwd = await hash_helper_1.HashHelper.hash(pwd);
        var result = await db_1.dbClient.user.create({
            data: {
                username: username,
                password: hashedPwd,
                rolesBridgeObj: {
                    create: roles.map((el) => ({
                        roles: el
                    })),
                }
            },
        });
        var listRole = await db_1.dbClient.roles.findMany({
            where: {
                userBridge: {
                    some: {
                        username: username
                    }
                }
            }
        });
        console.info(`List Role ${listRole.map((el) => el.description)}`);
        return { username: result.username, roles: listRole.map((el) => el.description) };
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user_service.js.map