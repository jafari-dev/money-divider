import { Container, Box } from "@mui/material";
import { SettingsStoreType, StoreProvider } from "@stores/settings";
import { observer } from "mobx-react-lite";

import { InitializerForm } from "./screens";

function Settings({ store }: { store: SettingsStoreType }) {
  return (
    <StoreProvider value={store}>
      <Container>
        <Box padding={2}>
          <InitializerForm />
        </Box>
      </Container>
    </StoreProvider>
  );
}

export default observer(Settings);
