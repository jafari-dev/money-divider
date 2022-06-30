import { css } from "@emotion/react";

export const importFonts = css`
  @font-face {
    src: url("/fonts/Ubuntu/Ubuntu-Regular.ttf") format("truetype");
    font-family: "Ubuntu";
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    src: url("/fonts/Roboto/Ubuntu-Italic.ttf") format("truetype");
    font-family: "Ubuntu";
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    src: url("/fonts/Roboto/Ubuntu-Medium.ttf") format("truetype");
    font-family: "Ubuntu";
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    src: url("/fonts/Roboto/Ubuntu-Medium-Italic.ttf") format("truetype");
    font-family: "Ubuntu";
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    src: url("/fonts/Roboto/Ubuntu-Bold.ttf") format("truetype");
    font-family: "Ubuntu";
    font-weight: bold;
    font-style: normal;
  }
`;
