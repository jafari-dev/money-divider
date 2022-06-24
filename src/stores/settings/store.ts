import { CurrencyUnit } from "#/types";
import { generateId } from "#/utilities";
import { types, Instance } from "mobx-state-tree";

const SettingsStore = types
  .model("Settings", {
    mainUser: types.frozen<{
      id: string;
      fullName: string;
      password: string;
      phone: string;
    } | null>(),
    defaultCurrencyUnit: types.enumeration(Object.values(CurrencyUnit)),
    lastModificationDate: types.Date,
  })
  .actions((self) => ({
    updateLastModificationDate() {
      self.lastModificationDate = new Date();
    },
    setMainUser(userInfo: { fullName: string; password: string; phone: string }): void {
      if (self.mainUser) {
        self.mainUser = { id: self.mainUser.id, ...userInfo };
      } else {
        self.mainUser = { id: generateId(), ...userInfo };
      }

      this.updateLastModificationDate();
    },
    setDefaultCurrencyUnit(currencyUnit: CurrencyUnit) {
      self.defaultCurrencyUnit = currencyUnit;

      this.updateLastModificationDate();
    },
  }));

export type SettingsStoreType = Instance<typeof SettingsStore>;

export const store = SettingsStore.create({
  mainUser: null,
  lastModificationDate: new Date(),
  defaultCurrencyUnit: CurrencyUnit.USD,
});
