import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(3, "Name must have at least 3 characters.")
    .max(20, "Name cannot exceed 20 characters.")
    .or(z.literal(""))
    .optional(),
  email: z.email("Please, insert a valid email."),
  password: z.string().min(6, "Password must contain at least 6 characters."),
});

export type RegisterInput = z.infer<typeof registerSchema>;
