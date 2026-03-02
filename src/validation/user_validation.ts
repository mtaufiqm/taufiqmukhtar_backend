import z from "zod";

export class UserValidation {

    static LOGIN: z.ZodType = z.object({
        username: z.string().min(6).max(100),
        password: z.string().min(6).max(100)
    });

    static CREATE: z.ZodType = z.object({
        username: z.string().min(6).max(100),
        password: z.string().min(6).max(100),
        roles: z.array(z.string()).optional()
    });

}
