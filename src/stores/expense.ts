import { CurrencyUnit } from "#/types";
import { generateId } from "#/utilities";
import { types, Instance } from "mobx-state-tree";

export const ExpenseStore = types
  .model("Expense", {
    id: types.optional(types.identifier, () => generateId()),
    title: types.string,
    description: types.string,
    currencyUnit: types.enumeration(Object.values(CurrencyUnit)),
    totalCost: types.number,
    payerId: types.string,
    debtors: types.array(types.frozen<{ id: string; amountOfDebt: number }>()),
  })
  .actions((self) => ({
    editTitleAndDescription(title: string, description: string): void {
      self.title = title;
      self.description = description;
    },
    editFinancialInfo(info: {
      payerId: string;
      totalCost: number;
      currencyUnit: CurrencyUnit;
    }): void {
      const { payerId, totalCost, currencyUnit } = info;

      self.payerId = payerId;
      self.totalCost = totalCost;
      self.currencyUnit = currencyUnit;
    },
    addDebtor(id: string, amountOfDebt: number): void {
      const isDebtorDuplicate = self.debtors.find((debtor) => debtor.id === id) != null;

      if (!isDebtorDuplicate) {
        self.debtors.push({ id, amountOfDebt });
      }
    },
    deleteDebtor(id: string): void {
      const matchedDebtor = self.debtors.find((debtor) => debtor.id === id);

      if (matchedDebtor != null) {
        self.debtors.remove(matchedDebtor);
      }
    },
  }));

export type ExpenseStoreType = Instance<typeof ExpenseStore>;
