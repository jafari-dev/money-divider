import { downloadContent } from "#/utilities";
import { TopBar, NavigationMenu, GlobalWrapper, Home } from "@layouts";
import { Container } from "@mui/material";
import { People } from "@pages";
import { useStore } from "@stores";
import { observer } from "mobx-react-lite";
import { useCallback } from "react";
import { Routes, Route } from "react-router-dom";

function Application(): React.ReactElement {
  const store = useStore();

  const saveStore = useCallback(() => downloadContent(store.getSchemaAsJSON()), []);
  const loadStore = useCallback((file: File) => void store.loadStoreFromFile(file), []);

  return (
    <>
      <TopBar onSaveStore={saveStore} onLoadStore={loadStore} />
      <Container>
        <GlobalWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people/*" element={<People />} />
          </Routes>
        </GlobalWrapper>
      </Container>
      <NavigationMenu />
    </>
  );
}

export default observer(Application);
