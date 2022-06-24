import { CurrencyUnit } from "#/types";
import { createContext, useContext } from "react";

import { SettingsStoreType } from "./store";

const StoreContext = createContext<SettingsStoreType>({
  mainUser: null,
  defaultCurrencyUnit: CurrencyUnit.USD,
  lastModificationDate: new Date(),
  setMainUser: () => null,
  setDefaultCurrencyUnit: () => null,
  updateLastModificationDate: () => null,
});

export const StoreProvider = StoreContext.Provider;

export function useStore(): SettingsStoreType {
  return useContext(StoreContext);
}
