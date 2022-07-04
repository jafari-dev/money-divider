import { Grid } from "@mui/material";
import { useStore } from "@stores";
import { observer } from "mobx-react-lite";

import { AddPersonButton } from "..";
import { getAvatarColor } from "../../utilities";
import PersonCard from "./card";

function PeopleCards() {
  const { persons } = useStore();

  return (
    <>
      <AddPersonButton />
      <Grid container spacing={2}>
        {persons.map((person, index) => (
          <Grid item xs={12} sm={6}>
            <PersonCard person={person} avatarColor={getAvatarColor(index)} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default observer(PeopleCards);
