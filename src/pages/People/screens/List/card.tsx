import { getAvatarName } from "#/utilities";
import { Visibility, Edit, Delete } from "@mui/icons-material";
import { Avatar, Box, Button } from "@mui/material";
import { PersonStoreType } from "@stores";
import { memo } from "react";

import { EditPersonButton } from "..";
import { StyledCard, StyledCardContent, StyledText } from "./styles";

interface Props {
  person: PersonStoreType;
  avatarColor: string;
}

function PersonCard({ person, avatarColor }: Props): React.ReactElement {
  const { name, email, phoneNumber } = person;

  return (
    <StyledCard>
      <StyledCardContent>
        <Avatar sx={{ backgroundColor: avatarColor, marginX: "auto" }}>
          {getAvatarName(name)}
        </Avatar>
        <StyledText variant="h6">{name}</StyledText>
        <StyledText>{email ? email : "(No email)"}</StyledText>
        <StyledText>{phoneNumber}</StyledText>
      </StyledCardContent>
      <Box display="flex" justifyContent="space-between" padding={1}>
        <EditPersonButton personId={person.id} />
        <Button size="small" color="primary">
          <Visibility />
        </Button>
        <Button size="small" color="error">
          <Delete />
        </Button>
      </Box>
    </StyledCard>
  );
}

export default memo(PersonCard);
