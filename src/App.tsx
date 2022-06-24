import { Global } from "@emotion/react";
import { TopBar } from "@layouts";
import { Settings } from "@modules";
import { ThemeProvider } from "@mui/material";
import { settingsStore } from "@stores";
import { BrowserRouter } from "react-router-dom";

import { globalStyles } from "./styles";
import { theme } from "./theme";

function Application(): React.ReactElement {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <TopBar />
        <Settings store={settingsStore} />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default Application;
