import { Global } from "@emotion/react";
import { TopBar, NavigationMenu, GlobalWrapper, Home } from "@layouts";
import { Container, ThemeProvider } from "@mui/material";
import { StoreProvider } from "@stores";
import { BrowserRouter } from "react-router-dom";

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
              <Home />
            </GlobalWrapper>
          </Container>
          <NavigationMenu />
        </StoreProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default Application;
