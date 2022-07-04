import styled from "@emotion/styled";
import { Card, CardContent, Typography, ListItem, Button } from "@mui/material";

export const StyledText = styled(Typography)`
  text-align: center;
  margin-inline: auto;
  width: 240px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const StyledCard = styled(Card)`
  margin-inline: auto;
  text-align: center;
`;

export const StyledCardContent = styled(CardContent)`
  div,
  h6,
  p,
  button {
    margin-block: 8px;
  }
`;

export const StyledListItem = styled(ListItem)`
  padding-inline: 0;
`;

export const StyledIconButton = styled(Button)`
  margin-inline: 4px;
`;

export const StyledDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);

  > svg {
    width: 300px;
    height: auto;
  }

  h6 {
    margin-bottom: 16px;
  }
`;
