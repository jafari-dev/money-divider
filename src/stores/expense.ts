import { CurrencyUnit } from "#/types";
import { generateId } from "#/utilities";
import { types, Instance } from "mobx-state-tree";

import { PersonStore, PersonStoreType } from "./person";

export const ExpenseStore = types
  .model("Expense", {
    id: types.optional(types.identifier, () => generateId()),
    title: types.string,
    description: types.string,
    currencyUnit: types.enumeration(Object.values(CurrencyUnit)),
    totalCost: types.number,
    date: types.Date,
    payer: types.reference(PersonStore),
    debts: types.array(
      types.model("Debt", {
        owner: types.reference(PersonStore),
        amount: types.number,
      })
    ),
  })
  .actions((self) => ({
    editTitle(title: string): void {
      self.title = title;
    },
    editDescription(description: string): void {
      self.description = description;
    },
    editFinancialInfo(info: {
      payer: PersonStoreType;
      totalCost: number;
      currencyUnit: CurrencyUnit;
    }): void {
      const { payer, totalCost, currencyUnit } = info;

      self.payer = payer;
      self.totalCost = totalCost;
      self.currencyUnit = currencyUnit;
    },
    editDate(date: Date): void {
      self.date = date;
    },
    addDebt(owner: PersonStoreType, amount: number): void {
      const isDebtOwnerDuplicate = self.debts.find((debt) => debt.owner === owner) != null;

      if (!isDebtOwnerDuplicate) {
        self.debts.push({ owner, amount });
      }
    },
    deleteDebt(owner: PersonStoreType): void {
      const matchedDebt = self.debts.find((debt) => debt.owner === owner);

      if (matchedDebt != null) {
        self.debts.remove(matchedDebt);
      }
    },
    editDebt(previousOwner: PersonStoreType, newOwner: PersonStoreType, newAmount: number): void {
      const matchedDebt = self.debts.find((debt) => debt.owner === previousOwner);
      const isNewOwnerNonDebtor = self.debts.every((debt) => debt.owner === newOwner);

      if (matchedDebt != null && isNewOwnerNonDebtor) {
        matchedDebt.owner = newOwner;
        matchedDebt.amount = newAmount;
      }
    },
  }));

export type ExpenseStoreType = Instance<typeof ExpenseStore>;
