import { downloadContent } from "#/utilities";
import { TopBar, NavigationMenu, GlobalWrapper, Home } from "@layouts";
import { Container } from "@mui/material";
import { People } from "@pages";
import { useStore } from "@stores";
import { observer } from "mobx-react-lite";
import { applySnapshot, getSnapshot } from "mobx-state-tree";
import { useCallback } from "react";
import { Routes, Route } from "react-router-dom";

function Application(): React.ReactElement {
  const store = useStore();

  const saveStore = useCallback(() => {
    const storeSnapshot = getSnapshot(store);
    const storeAsJSON = JSON.stringify(storeSnapshot, undefined, 2);

    downloadContent(storeAsJSON);
  }, []);

  const loadStore = useCallback(async (file: File) => {
    try {
      const fileContent = await file.text();
      const fileContentAsObject = JSON.parse(fileContent) as Record<string, unknown>;

      const storeKeys = Object.keys(store);
      const fileKeys = Object.keys(fileContentAsObject).filter(
        (key, index, self) => self.indexOf(key) === index
      );

      if (storeKeys.length === fileKeys.length) {
        if (fileKeys.every((key) => storeKeys.includes(key))) {
          applySnapshot(store, fileContentAsObject);
        }
      }
    } catch {}
  }, []);

  return (
    <>
      <TopBar onSave={saveStore} onLoadProject={loadStore} />
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
