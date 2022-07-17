import { CurrencyUnit } from "#/types";
import { z } from "zod";

export const expenseSchema = z.object({
  title: z
    .string()
    .min(1, "Required")
    .min(3, "It must contain at least 2 characters")
    .max(30, "It must contain at most 40 characters"),
  description: z.string().max(300, "It must contain at most 300 characters"),
  currencyUnit: z.nativeEnum(CurrencyUnit, {
    errorMap: () => ({ message: "Required" }),
  }),
  totalCost: z
    .string()
    .min(1, "Required")
    .transform((input: string) => Number(input))
    .refine((num: number) => !Number.isNaN(num), {
      message: "It must be a correct number",
    })
    .refine((num: number) => num > 0, {
      message: "It must be a positive number",
    }),
  date: z.date({ errorMap: () => ({ message: "Required" }) }),
  payerId: z.string().min(1, "Required"),
  debts: z.array(
    z.object(
      {
        ownerId: z.string().min(1, "Required"),
        amount: z
          .string()
          .min(1, "Required")
          .transform((input: string) => Number(input))
          .refine((num: number) => !Number.isNaN(num), {
            message: "It must be a correct number",
          })
          .refine((num: number) => num > 0, {
            message: "It must be a positive number",
          }),
      },
      { errorMap: () => ({ message: "Required" }) }
    )
  ),
});

export type ExpenseFormData = z.infer<typeof expenseSchema>;
