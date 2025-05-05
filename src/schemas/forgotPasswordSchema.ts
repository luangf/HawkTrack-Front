import { z } from "zod";

export const forgotPasswordSchema = z.object({
    email: z
        .string()
        .min(1, { message: "Email is required" })
        .max(254, { message: "Email must be at most 254 characters" })
        .email({ message: "Email invalid" }),
});

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;