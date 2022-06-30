import { createTheme, colors } from "@mui/material";

export const theme = createTheme({
  direction: "ltr",
  typography: {
    fontFamily: "Ubuntu",
  },
  palette: {
    mode: "light",
    primary: colors.indigo,
    secondary: colors.amber,
    action: {
      disabled: colors.grey[400],
    },
  },
});
