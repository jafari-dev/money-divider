import styled from "@emotion/styled";
import { DialogContent } from "@mui/material";

export const StyledDialogContent = styled(DialogContent)`
  > * {
    :not(:first-of-type) {
      margin-top: 32px;
    }
  }
`;
