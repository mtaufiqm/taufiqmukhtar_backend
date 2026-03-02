import z from "zod";

export class CommentValidation {
    static CREATE: z.ZodType = z.object({
        name: z.string().nullable().optional(),
        body: z.string().nonempty(),
        content: z.string().nonempty()
    });

    static UPDATE: z.ZodType = z.object({
        name: z.string().nullable().optional(),
        body: z.string().optional(),
        content: z.string().optional()
    });
}