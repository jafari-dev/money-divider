import { css } from "@emotion/react";

export const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,500;0,700;1,400;1,500&display=swap");

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
