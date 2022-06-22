import { CurrencyUnit } from "./types";

export function generateId() {
  const ALPHA_NUMERICS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  const randomString = Array.from({ length: 24 }, () =>
    ALPHA_NUMERICS.charAt(Math.floor(Math.random() * ALPHA_NUMERICS.length))
  ).join("");

  const currentDate = new Date().getTime().toString(36).toUpperCase();

  return `${randomString}-${currentDate}`;
}

export const currencyUnitLabels = Object.fromEntries(
  Object.entries(CurrencyUnit).map(([key, value]) => [key, `${value} (${key})`])
) as Record<keyof typeof CurrencyUnit, string>;
