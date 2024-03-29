import { List } from "@mui/material";
import { useStore } from "@stores";
import { observer } from "mobx-react-lite";

import { AddPersonButton } from "..";
import { getAvatarColor } from "../../utilities";
import PersonRow from "./row";

function PeopleRows() {
  const { persons } = useStore();

  return (
    <>
      <AddPersonButton />
      <List>
        {persons.map((person, index) => (
          <PersonRow key={person.id} person={person} avatarColor={getAvatarColor(index)} />
        ))}
      </List>
    </>
  );
}

export default observer(PeopleRows);
