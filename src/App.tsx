import { Global } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

import { TopBar } from "./layouts";
import { Settings } from "./modules";
import { globalStyles } from "./styles";
import { theme } from "./theme";

function Application(): React.ReactElement {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <TopBar />
        <Settings />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default Application;
