import styled from "@emotion/styled";
import { colors, Paper as MUIPaper, Typography } from "@mui/material";

export const Paper = styled(MUIPaper)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  box-shadow: 0 0 8px ${colors.common.black};
`;

export const Title = styled(Typography)`
  margin-bottom: 16px;
  color: ${colors.indigo[600]};
`;

export const Description = styled(Typography)`
  align-self: flex-start;
  text-align: justify;
  padding-inline: 8px;

  > span:first-of-type {
    font-weight: bold;
    color: ${colors.orange[800]};
  }

  > span.empty {
    color: ${colors.grey[600]};
  }
`;

export const SectionHeading = styled(Typography)`
  margin-bottom: 8px;
  svg {
    vertical-align: middle;
    margin-right: 8px;
  }
`;

export const Section = styled.section`
  width: 100%;
  margin-top: 16px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-radius: 4px;

  :hover {
    background-color: ${colors.grey[200]};
  }
`;

export const Actions = styled.div`
  border-top: 1px solid black;
  margin-top: 8px;
  padding: 16px 8px 8px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
