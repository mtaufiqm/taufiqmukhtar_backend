"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticHelper = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.configDotenv)({
    override: true
});
class StaticHelper {
    static isDev = process.env.ENV_MODE === "DEV" ? true : false;
    static isProd = process.env.ENV_MODE === "PROD" ? true : false;
}
exports.StaticHelper = StaticHelper;
//# sourceMappingURL=static_helper.js.map