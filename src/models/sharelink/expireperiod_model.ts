import { ExpirePeriod } from "../../generated/prisma/client";

export type ExpirePeriodResp = ExpirePeriod;

export function toExpirePeriodResp(data: ExpirePeriod): ExpirePeriodResp {
    return data as ExpirePeriodResp;
}