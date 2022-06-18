import { css } from "@emotion/react";

export const importFonts = css`
  @font-face {
    src: url("/fonts/Roboto/Roboto-Regular.ttf") format("truetype");
    font-family: "Roboto";
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    src: url("/fonts/Roboto/Roboto-Italic.ttf") format("truetype");
    font-family: "Roboto";
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    src: url("/fonts/Roboto/Roboto-Medium.ttf") format("truetype");
    font-family: "Roboto";
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    src: url("/fonts/Roboto/Roboto-Medium-Italic.ttf") format("truetype");
    font-family: "Roboto";
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    src: url("/fonts/Roboto/Roboto-Bold.ttf") format("truetype");
    font-family: "Roboto";
    font-weight: bold;
    font-style: normal;
  }
`;
