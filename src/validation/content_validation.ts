import z from "zod";

export class ContentValidation {
    static CREATE: z.ZodType = z.object({
        title: z.string().nonempty(),
        body: z.string().nonempty(),
        created_by: z.string().optional().nullable()
    });

    static UPDATE: z.ZodType = z.object({
        title: z.string().optional(),
        body: z.string().optional()
    });
}