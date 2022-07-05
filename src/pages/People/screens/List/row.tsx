import { getAvatarName } from "#/utilities";
import { Visibility } from "@mui/icons-material";
import { ListItemAvatar, ListItemText, Avatar, Grid, Button } from "@mui/material";
import { PersonStoreType } from "@stores";
import { observer } from "mobx-react-lite";

import { DeletePersonButton, EditPersonButton } from "..";
import { StyledListItem } from "./styles";

interface Props {
  person: PersonStoreType;
  avatarColor: string;
}

function PersonRow({ person, avatarColor }: Props): React.ReactElement {
  const { name, email, phoneNumber } = person;

  return (
    <StyledListItem>
      <ListItemAvatar>
        <Avatar sx={{ backgroundColor: avatarColor, marginRight: "8px" }}>
          {getAvatarName(name)}
        </Avatar>
      </ListItemAvatar>
      <Grid container columnSpacing={2}>
        <Grid item xs={4}>
          <ListItemText>{name}</ListItemText>
        </Grid>
        <Grid item xs={4}>
          <ListItemText>{email ? email : "(No email)"}</ListItemText>
        </Grid>
        <Grid item xs={4}>
          <ListItemText>{phoneNumber}</ListItemText>
        </Grid>
      </Grid>
      <Button size="small" color="primary">
        <Visibility />
      </Button>
      <EditPersonButton personId={person.id} />
      <DeletePersonButton personId={person.id} />
    </StyledListItem>
  );
}

export default observer(PersonRow);
