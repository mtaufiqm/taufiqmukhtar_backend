import { configDotenv } from "dotenv"

configDotenv({
    override: true
});
export class StaticHelper {
    static isDev: boolean = process.env.ENV_MODE === "DEV"?true:false;
    static isProd: boolean = process.env.ENV_MODE === "PROD"?true:false;
}