import styled from "@emotion/styled";
import { Card, CardContent, Typography, ListItem } from "@mui/material";

export const StyledText = styled(Typography)`
  overflow: hidden;
  width: 240px;
  margin-inline: auto;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
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

  button {
    margin-inline: 4px;
  }
`;

export const StyledDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  > svg {
    width: 300px;
    height: auto;
  }

  h6 {
    margin-bottom: 16px;
  }
`;
