import { z } from "zod";

export const registerSchema = z
  .object({
    email: z.email("Please, insert a valid email."),
    password: z.string().min(6, "Password must contain at least 6 characters."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Passwords don't match.",
    path: ["confirmPassword"],
  });

export type RegisterInput = z.infer<typeof registerSchema>;
