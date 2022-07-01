import { css } from "@emotion/react";
import { importFonts } from "_/fonts";

export const globalStyles = css`
  ${importFonts};

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: Ubuntu, sans-serif;
  }

  a {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
