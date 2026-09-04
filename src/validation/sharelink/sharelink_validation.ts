import z from "zod";

export class SharelinkValidation {
    static CREATE: z.ZodType = z.object({
        key: z.string().nonempty(),
        desc: z.string().nonempty(),
        expire_period: z.number().max(10).min(0),
        creator_id: z.string().nonempty()
    });
}