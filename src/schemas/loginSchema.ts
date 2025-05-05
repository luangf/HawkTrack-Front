import { z } from "zod";

export const loginSchema = z.object({
    email: z
        .string()
        .min(1, { message: "Email is required" })
        .max(254, { message: "Email must be at most 254 characters" })
        .email({ message: "Email invalid" }),
    password: z
        .string()
        .min(12, { message: "Password must be at least 12 characters" })
        .max(140, { message: "Password must be at most 140 characters" }),
    rememberMeCheckbox: z.boolean(),
});

export type LoginSchema = z.infer<typeof loginSchema>;