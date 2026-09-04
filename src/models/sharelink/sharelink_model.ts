import { ShareLinkModel } from "../../generated/prisma/models";
import { ShareLink } from "../../generated/prisma/client";

export type SharelinkModelResp = Omit<ShareLinkModel, "creator_id">;

export type CreateSharelinkReq = Omit<ShareLinkModel, "uuid" | "created_at" | "updated_at">

export function toSharelinkModelResp(data: ShareLink): SharelinkModelResp {
    let {creator_id, ...restData} = data;
    return restData as SharelinkModelResp;
}