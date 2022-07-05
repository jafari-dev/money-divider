import { Person } from "#/types";
import { types, Instance } from "mobx-state-tree";

import { GroupStore, GroupStoreType } from "./group";
import { PersonStore } from "./person";

export const Store = types
  .model("Store", {
    encryptionKey: types.maybeNull(types.string),
    persons: types.array(PersonStore),
    groups: types.array(GroupStore),
  })
  .actions((self) => ({
    setEncryptionKey(previousKey: string, newKey: string): void {
      if (self.encryptionKey === previousKey) {
        self.encryptionKey = newKey;
      }
    },
    stopEncryption(previousEncryptionKey: string): void {
      this.setEncryptionKey(previousEncryptionKey, "");
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
    addGroup(group: GroupStoreType): void {
      const isGroupDuplicate = self.groups.find(({ id }) => id === group.id) != null;

      if (!isGroupDuplicate) {
        self.groups.push(group);
      }
    },
    deleteGroup(id: string): void {
      const matchedGroup = self.groups.find((group) => group.id === id);

      if (matchedGroup != null) {
        self.groups.remove(matchedGroup);
      }
    },
  }));

export type StoreType = Instance<typeof Store>;

export const store = Store.create({
  groups: [],
  persons: [],
  encryptionKey: null,
});
