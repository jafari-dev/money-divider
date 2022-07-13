import { Person, Expense } from "#/types";
import { types, Instance, getSnapshot, applySnapshot } from "mobx-state-tree";

import { ExpenseStore } from "./expense";
import { PersonStore } from "./person";

export const Store = types
  .model("Store", {
    encryptionKey: types.maybeNull(types.string),
    persons: types.array(PersonStore),
    expenses: types.array(ExpenseStore),
  })
  .actions((self) => ({
    setEncryptionKey(previousKey: string, newKey: string): void {
      if (self.encryptionKey === previousKey) {
        self.encryptionKey = newKey;
      }
    },
    stopEncryption(previousEncryptionKey: string): void {
      if (self.encryptionKey === previousEncryptionKey) {
        self.encryptionKey = null;
      }
    },
    addPerson(personInfo: Person): void {
      const person = PersonStore.create({ ...personInfo });

      self.persons.push(person);
    },
    deletePerson(id: string): void {
      const matchedPerson = self.persons.find((person) => person.id === id);

      if (matchedPerson != null) {
        self.persons.remove(matchedPerson);
      }
    },
    addExpense(
      expenseInfo: Omit<Expense, "payer" | "debts"> & {
        payerId: string;
        debts: { ownerId: string; amount: number }[];
      }
    ): void {
      const { title, description, totalCost, date, payerId, currencyUnit, debts } = expenseInfo;

      const expense = ExpenseStore.create({
        title,
        description,
        totalCost,
        date,
        payer: payerId,
        currencyUnit,
        debts: debts.map(({ ownerId, amount }) => ({ owner: ownerId, amount })),
      });

      self.expenses.push(expense);
    },
    deleteExpense(id: string): void {
      const matchedExpense = self.expenses.find((expense) => expense.id === id);

      if (matchedExpense != null) {
        self.expenses.remove(matchedExpense);
      }
    },
    getSchemaAsJSON(): string {
      const storeSnapshot = getSnapshot(self);

      return JSON.stringify(storeSnapshot, undefined, 2);
    },
    async loadStoreFromFile(file: File): Promise<void> {
      try {
        const fileContent = await file.text();
        const contentAsObject = JSON.parse(fileContent) as Record<string, unknown>;

        const storeKeys = Object.keys(self);
        const fileKeys = Object.keys(contentAsObject).filter(
          (key, index, self) => self.indexOf(key) === index
        );

        // Checks that the keys for the store schema and file schema are the same
        if (storeKeys.length === fileKeys.length) {
          if (fileKeys.every((key) => storeKeys.includes(key))) {
            applySnapshot(self, contentAsObject);
          }
        }
      } catch {}
    },
    reset(): void {
      self.encryptionKey = null;
      self.expenses.clear();
      self.persons.clear();
    },
  }));

export type StoreType = Instance<typeof Store>;

export const store = Store.create({
  expenses: [],
  persons: [],
  encryptionKey: null,
});
