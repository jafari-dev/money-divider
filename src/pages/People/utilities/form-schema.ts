import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string()
    .min(1, "Required")
    .regex(/^[a-zA-Z\s]*$/g, "Only alphabets and white space are allowed")
    .regex(/^[a-zA-Z]+[a-zA-Z\s]*$/g, "It must start with an alphabet character")
    .regex(/^[a-zA-Z\s]*[a-zA-Z]$/g, "Must end with an alphabet character")
    .min(3, "It must contain at least 3 characters")
    .max(30, "It must contain at most 30 characters"),
  phoneNumber: z
    .string()
    .min(1, "Required")
    .regex(/^[0-9]*$/gu, "Only digits are allowed")
    .min(8, "It must contain at least 8 digits")
    .max(11, "It must contain at most 11 digits"),
  email: z.string().email().or(z.string().max(0)),
});

export type UserFormData = z.infer<typeof userSchema>;
