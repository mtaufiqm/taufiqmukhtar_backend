import { ExpirePeriodResp, toExpirePeriodResp } from "../../models/sharelink/expireperiod_model";
import { dbClient } from "../../web/db";

export class ExpirePeriodService {
    static async readAll(): Promise<ExpirePeriodResp[]> {
        let result = await dbClient.expirePeriod.findMany({
            orderBy: {
                id: "asc"
            }
        });
        return result.map((el): ExpirePeriodResp => {
            return toExpirePeriodResp(el);
        });
    }
}