import { css } from "@emotion/react";
import { importFonts } from "_/fonts";

export const globalStyles = css`
  ${importFonts};

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;
