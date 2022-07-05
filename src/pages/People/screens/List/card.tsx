import { getAvatarName } from "#/utilities";
import { Visibility } from "@mui/icons-material";
import { Avatar, Box, Button } from "@mui/material";
import { PersonStoreType } from "@stores";
import { observer } from "mobx-react-lite";

import { EditPersonButton, DeletePersonButton } from "..";
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
        <DeletePersonButton personId={person.id} />
      </Box>
    </StyledCard>
  );
}

export default observer(PersonCard);
