import { generateId } from "#/utilities";
import { types, Instance } from "mobx-state-tree";

import { ExpenseStore, ExpenseStoreType } from "./expense";

export const GroupStore = types
  .model("Group", {
    id: types.optional(types.identifier, () => generateId()),
    title: types.string,
    description: types.string,
    expenses: types.array(ExpenseStore),
  })
  .actions((self) => ({
    editTitleAndDescription(title: string, description: string): void {
      self.title = title;
      self.description = description;
    },
    addExpense(expense: ExpenseStoreType): void {
      const isExpenseDuplicate = self.expenses.find(({ id }) => id === expense.id) != null;

      if (!isExpenseDuplicate) {
        self.expenses.push(expense);
      }
    },
    deleteExpense(id: string): void {
      const matchedExpense = self.expenses.find((expense) => expense.id === id);

      if (matchedExpense != null) {
        self.expenses.remove(matchedExpense);
      }
    },
  }));

export type GroupStoreType = Instance<typeof GroupStore>;
