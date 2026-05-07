import PG, { Pool } from "pg";
import * as env from "dotenv";
import { PrismaPg } from "@prisma/adapter-pg";
import {PrismaClient} from "../generated/prisma/client";
import { StaticHelper } from "../helper/static_helper";
env.configDotenv({override: true});
const pgPool: PG.Pool = new Pool({
    connectionString: StaticHelper.isDev?process.env.POSTGRESQL_URL_DEV:process.env.POSTGRESQL_URL_PROD
});
const prismaPgAdapter = new PrismaPg(pgPool);

export const dbClient = new PrismaClient({adapter: prismaPgAdapter});