import { CurrencyUnit } from "#/types";

export const CURRENCY_UNITS_LABELS = Object.fromEntries(
  Object.entries(CurrencyUnit).map(([key, value]) => [key, `${value} (${key})`])
) as Record<keyof typeof CurrencyUnit, string>;
