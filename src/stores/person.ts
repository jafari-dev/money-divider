import { Person } from "#/types";
import { generateId } from "#/utilities";
import { types, Instance } from "mobx-state-tree";

export const PersonStore = types
  .model("Person", {
    id: types.optional(types.identifier, () => generateId()),
    name: types.string,
    phoneNumber: types.string,
    email: types.maybeNull(types.string),
  })
  .actions((self) => ({
    edit(info: Person): void {
      const { name, email, phoneNumber } = info;

      self.name = name;
      self.email = email;
      self.phoneNumber = phoneNumber;
    },
  }));

export type PersonStoreType = Instance<typeof PersonStore>;
