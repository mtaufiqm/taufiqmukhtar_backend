import z from "zod";

export class Validation {
    static validate<T>(validator: z.ZodType, data: T): T {
        return validator.parse(data) as T;
    }
}