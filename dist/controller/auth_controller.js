"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const validation_1 = require("../validation/validation");
const user_validation_1 = require("../validation/user_validation");
const user_service_1 = require("../service/user_service");
const jwt_helper_1 = require("../helper/jwt_helper");
class AuthController {
    //post
    static async login(req, resp, next) {
        try {
            let jsonBody = req.body;
            let data = validation_1.Validation.validate(user_validation_1.UserValidation.LOGIN, jsonBody);
            let result = await user_service_1.UserService.login(data);
            let jwtToken = await jwt_helper_1.JWTHelper.create(result);
            resp.status(200).json({
                token: jwtToken
            });
            return;
        }
        catch (err) {
            next(err);
        }
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth_controller.js.map