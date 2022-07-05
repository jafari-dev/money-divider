import { Global } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import { StoreProvider } from "@stores";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Application from "./App";
import reportWebVitals from "./reportWebVitals";
import { globalStyles } from "./styles";
import { theme } from "./theme";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <StoreProvider>
        <Application />
      </StoreProvider>
    </ThemeProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
