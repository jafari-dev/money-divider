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
        expenses: [],
        persons: [],
        encryptionKey: null,
      }),
    []
  );

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}

export function useStore(): StoreType {
  return useContext(StoreContext);
}
