import { PersonStoreType } from "@stores";

export enum MajorPath {
  Overview = "overview",
  Expenses = "expenses",
  Bookmarks = "bookmarks",
  People = "people",
}

export enum CurrencyUnit {
  IRT = "Iranian Toman",
  USD = "United States Dollar",
}

export interface Person {
  name: string;
  phoneNumber: string;
  email: string;
}

export interface Expense {
  title: string;
  description: string;
  currencyUnit: CurrencyUnit;
  totalCost: number;
  date: Date;
  payer: PersonStoreType;
  debts: { owner: PersonStoreType; amount: number }[];
}
