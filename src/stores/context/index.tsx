import { CurrencyUnit } from "#/types";
import { createContext, useContext, useMemo } from "react";

import { Store, StoreType } from "../store";

const StoreContext = createContext<StoreType>({
  encryptionKey: null,
  persons: [],
  expenses: [],
  addExpense: () => null,
  deleteExpense: () => null,
  addPerson: () => null,
  deletePerson: () => null,
  reset: () => null,
  stopEncryption: () => null,
  setEncryptionKey: () => null,
  getSchemaAsJSON: () => '{"encryptionKey": null, "persons": [], "expenses": []}',
  loadStoreFromFile: () => Promise.resolve(),
} as unknown as StoreType);

export function StoreProvider({ children }: { children?: React.ReactNode }): React.ReactElement {
  const store = useMemo(
    () =>
      Store.create({
        expenses: [
          {
            id: "expense-1",
            title: "Sahel Lunch",
            payer: "person-1",
            description: "",
            totalCost: 2000000.15,
            currencyUnit: CurrencyUnit.IRT,
            date: new Date(),
            debts: [
              { owner: "person-1", amount: 50000 },
              { owner: "person-2", amount: 50000 },
              { owner: "person-3", amount: 50000 },
              { owner: "person-5", amount: 50000 },
              { owner: "person-4", amount: 50000 },
            ],
          },
          {
            id: "expense-2",
            title: "Ali baba",
            payer: "person-5",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            totalCost: 200000,
            currencyUnit: CurrencyUnit.IRT,
            date: new Date(),

            debts: [
              { owner: "person-1", amount: 50000 },
              { owner: "person-3", amount: 50000 },
            ],
          },
        ],
        persons: [
          {
            id: "person-1",
            name: "Ahmad Jafari",
            phoneNumber: "09308485060",
            email: "me@jafari.dev",
          },
          {
            id: "person-2",
            name: "Hamed Senior",
            phoneNumber: "09123456789",
            email: "up@born.com",
          },
          {
            id: "person-3",
            name: "Sassan Haradji",
            phoneNumber: "09350002020",
            email: "info@sassanh.com",
          },
          {
            id: "person-4",
            name: "Artin Majd",
            phoneNumber: "09905794129",
            email: "majd@art.in",
          },
          {
            id: "person-5",
            name: "Ghazaleh Eslamifard",
            phoneNumber: "09217777777",
            email: "ghazaleh@gmail.com",
          },
        ],
        encryptionKey: null,
      }),
    []
  );

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}

export function useStore(): StoreType {
  return useContext(StoreContext);
}
