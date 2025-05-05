import { z } from "zod";

export const registerSchema = z.object({
    email: z
        .string()
        .min(1, { message: "Email is required" })
        .max(254, { message: "Email must be at most 254 characters" })
        .email({ message: "Email invalid" }),
    username: z
        .string()
        .trim()
        .min(3, { message: "Username must be at least 3 characters" })
        .max(30, { message: "Username must be at most 30 characters" }),
    password: z
        .string()
        .min(12, { message: "Password must be at least 12 characters" })
        .max(140, { message: "Password must be at most 140 characters" })
        .refine((val) => /[A-Z]/.test(val), {
            message: "Password must contain at least one uppercase letter",
        })
        .refine((val) => /[a-z]/.test(val), {
            message: "Password must contain at least one lowercase letter",
        })
        .refine((val) => /[0-9]/.test(val), {
            message: "Password must contain at least one number",
        })
        .refine((val) => /[!@#$%^&*(),.?":{}|<>_\-+=~`[\]\\;/]/.test(val), {
            message: "Password must contain at least one special character",
        }),
    rememberMeCheckbox: z.boolean(),
    agreeCheckbox: z
        .boolean({ message: "Agreement of Terms of Service is required" })
        .refine((val) => val === true, {
            message: "Agreement of Terms of Service is required",
        }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;