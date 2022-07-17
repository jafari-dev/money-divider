import { downloadContent } from "#/utilities";
import { TopBar, NavigationMenu, GlobalWrapper, Home } from "@layouts";
import { Container } from "@mui/material";
import { People, Expenses } from "@pages";
import { useStore } from "@stores";
import { observer } from "mobx-react-lite";
import { useCallback } from "react";
import { Routes, Route } from "react-router-dom";

function Application(): React.ReactElement {
  const store = useStore();

  const saveStore = useCallback(() => downloadContent(store.getSchemaAsJSON()), []);
  const loadStore = useCallback((file: File) => void store.loadStoreFromFile(file), []);
  const resetStore = useCallback(() => store.reset(), []);

  return (
    <>
      <TopBar onSaveStore={saveStore} onLoadStore={loadStore} onResetStore={resetStore} />
      <Container>
        <GlobalWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people/*" element={<People />} />
            <Route path="/expenses/*" element={<Expenses />} />
          </Routes>
        </GlobalWrapper>
      </Container>
      <NavigationMenu />
    </>
  );
}

export default observer(Application);
