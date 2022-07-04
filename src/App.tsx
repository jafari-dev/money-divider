import { Global } from "@emotion/react";
import { TopBar, NavigationMenu, GlobalWrapper, Home } from "@layouts";
import { Container, ThemeProvider } from "@mui/material";
import { People } from "@pages";
import { StoreProvider } from "@stores";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { globalStyles } from "./styles";
import { theme } from "./theme";

function Application(): React.ReactElement {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <StoreProvider>
          <TopBar />
          <Container>
            <GlobalWrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/people" element={<People />} />
              </Routes>
            </GlobalWrapper>
          </Container>
          <NavigationMenu />
        </StoreProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default Application;
