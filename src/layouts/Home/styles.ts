import styled from "@emotion/styled";
import { Typography, Grid, colors } from "@mui/material";

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-block: 16px;
  row-gap: 64px;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 300px;
  margin-inline: auto;
`;

export const StyledHeading = styled(Typography)`
  text-align: center;
  color: ${colors.indigo[800]};
  font-weight: bold;
  font-size: 28px;
`;

export const StyledText = styled(Typography)`
  text-align: center;
  color: ${colors.yellow[900]};
  font-weight: bold;
  font-size: 24px;
  text-transform: uppercase;
`;

export const StyledGrid = styled(Grid)`
  svg {
    width: 128px;
    height: 128px;
  }

  h6 {
    margin-block: 8px;
  }

  p {
    text-align: justify;
  }
`;
