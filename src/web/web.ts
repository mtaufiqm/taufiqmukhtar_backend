import { configDotenv } from "dotenv";
import express from "express";
import { errorMiddleware } from "../middleware/error_middleware";
import path from "node:path";
import cors from "cors";
import { authMiddleware } from "../middleware/auth_middleware";
import { privateRouter } from "../router/private_router";
import { publicRouter } from "../router/public_router";

configDotenv({override: true});
const web: express.Express = express();
web.use(cors({
    origin:"*",
    allowedHeaders:"*",
    exposedHeaders:"*"
}))
web.use(express.static(path.resolve("../public")));
web.use(express.json());
web.use(publicRouter);
web.use(privateRouter);
web.use(errorMiddleware);
web.listen(Number.parseInt(process.env.SERVER_PORT??"80"));