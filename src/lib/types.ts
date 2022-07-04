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
