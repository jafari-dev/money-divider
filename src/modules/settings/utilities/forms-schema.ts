import { CurrencyUnit } from "#/types";
import { z } from "zod";

export const initializationSchema = z.object({
  fullName: z
    .string()
    .min(1, "Required")
    .regex(/^[a-zA-Z\s]*$/g, "Only alphabets and white space are allowed")
    .regex(/^[a-zA-Z]+[a-zA-Z\s]*$/g, "It must start with an alphabet character")
    .regex(/^[a-zA-Z\s]*[a-zA-Z]$/g, "Must end with an alphabet character")
    .min(3, "It must contain at least 3 characters")
    .max(30, "It must contain at most 30 characters"),
  password: z
    .string()
    .min(1, "Required")
    .regex(/^[^\s]*$/g, "White space is not allowed")
    .min(8, "It must contain at least 8 characters")
    .max(48, "It must contain at most 48 characters"),
  defaultCurrencyUnit: z.nativeEnum(CurrencyUnit, {
    errorMap: () => ({ message: "Required" }),
  }),
  phone: z
    .string()
    .min(1, "Required")
    .regex(/^[0-9]*$/gu, "Only digits are allowed")
    .min(8, "It must contain at least 8 digits")
    .max(11, "It must contain at most 11 digits"),
});

export type FormInitializationData = z.infer<typeof initializationSchema>;
