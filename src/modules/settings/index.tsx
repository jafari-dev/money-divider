import { Container, Box } from "@mui/material";
import { memo } from "react";

import { InitializerForm } from "./screens";

function Settings() {
  return (
    <Container>
      <Box padding={2}>
        <InitializerForm />
      </Box>
    </Container>
  );
}

export default memo(Settings);
