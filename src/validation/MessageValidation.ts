import z from "zod";

export class MessageValidation {
    static CREATE: z.ZodType = z.object({
        body: z.string().nonempty(),
        type: z.string().nonempty()
    });
}