import { PrismaClient } from "../generated/prisma/client";
import {dbClient} from "../web/db";

export class InitData {
    static db: PrismaClient = dbClient;
    static async insertRoles(): Promise<void> {
        try {
            let result = await InitData.db.user.createManyAndReturn({
                data: [{
                    username: "taufiq.mukhtar",
                    password: "taufiq1729"
                }]
            });
        } catch(err){
            console.info(err);
        }
    }
}
