import { Global } from "@emotion/react";
import { ThemeProvider } from "@mui/material";

import { globalStyles } from "./styles";
import { theme } from "./theme";

function Application(): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <div className="App">Money Divider</div>
    </ThemeProvider>
  );
}

export default Application;
