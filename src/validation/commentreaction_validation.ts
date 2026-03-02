import z from "zod";

export class CommentReactionValidation {
    static CREATE: z.ZodType = z.object({
        comment: z.string().nonempty(),
        reaction: z.string().nonempty(),
        name: z.string().nullable().optional()
    });
    
    static UPDATE: z.ZodType = z.object({     
        comment: z.string().optional(),
        reaction: z.string().optional(),
        name: z.string().nullable().optional()
    });
}