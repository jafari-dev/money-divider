import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-block: 16px;
  row-gap: 64px;
`;

export const StyledSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

export const StyledImage = styled.img`
  width: 60%;
  height: auto;

  @media screen and (min-width: 600px) {
    width: 50%;
  }
`;

export const StyledText = styled(Typography)`
  text-align: center;
  color: #3f51b5;
  font-weight: bold;
  font-size: 32px;

  @media screen and (min-width: 600px) {
    width: 50%;
  }
`;

export const StyledList = styled.div`
  text-align: center;

  h3 {
    margin-bottom: 16px;
    color: #ffa600;
  }
  h5 {
    margin-top: 8px;
    color: #3f51b5;
  }
`;
