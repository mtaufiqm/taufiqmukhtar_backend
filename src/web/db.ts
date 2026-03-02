import PG, { Pool } from "pg";
import * as env from "dotenv";
import { PrismaPg } from "@prisma/adapter-pg";
import {PrismaClient} from "../generated/prisma/client";
env.configDotenv({override: true});
const pgPool: PG.Pool = new Pool({
    connectionString: process.env.POSTGRESQL_URL
});
const prismaPgAdapter = new PrismaPg(pgPool);

export const dbClient = new PrismaClient({adapter: prismaPgAdapter});