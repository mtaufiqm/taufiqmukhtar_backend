import z from "zod";

export class ContentReactionValidation {
    static CREATE: z.ZodType = z.object({
        content: z.string().nonempty(),
        reaction: z.string().nonempty(),
        name: z.string().nullable().optional()
    });

    static UPDATE: z.ZodType = z.object({
        content: z.string().optional(),
        reaction: z.string().optional()
    });
}