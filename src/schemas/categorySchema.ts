import { z } from "zod";

export const categoryCardSchema = z.object({
    name: z
        .string()
        .trim()
        .min(1, { message: "Name is required" })
        .max(100, { message: "Name must be at most 100 characters" }),
    description: z
        .string()
        .trim()
        .max(750, { message: "Description must be at most 750 characters" })
        .optional(),
});

export type CategoryCardSchema = z.infer<typeof categoryCardSchema>;