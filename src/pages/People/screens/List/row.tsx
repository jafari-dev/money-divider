import { getAvatarName } from "#/utilities";
import { Visibility, Edit, Delete } from "@mui/icons-material";
import { ListItemAvatar, ListItemText, Avatar, Grid } from "@mui/material";
import { PersonStoreType } from "@stores";
import { memo } from "react";

import { StyledListItem, StyledIconButton } from "./styles";

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
      <StyledIconButton size="small" color="primary">
        <Visibility />
      </StyledIconButton>
      <StyledIconButton size="small" color="info">
        <Edit />
      </StyledIconButton>
      <StyledIconButton size="small" color="error">
        <Delete />
      </StyledIconButton>
    </StyledListItem>
  );
}

export default memo(PersonRow);
