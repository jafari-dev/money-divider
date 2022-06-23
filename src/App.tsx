import { Global } from "@emotion/react";
import { TopBar, NavigationMenu } from "@layouts";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

import { globalStyles } from "./styles";
import { theme } from "./theme";

function Application(): React.ReactElement {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <TopBar />
        <NavigationMenu />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default Application;
