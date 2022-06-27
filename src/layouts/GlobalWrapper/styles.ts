import styled from "@emotion/styled";

export const StyledGlobalWrapper = styled.main`
  // The height of the application bar (TopBar layout) is 56px in mobile view
  min-height: calc(100vh - 56px - 56px);

  // The height of the bottom menu (NavigationMenu layout) is 56px
  margin-bottom: 56px;

  padding-block: 16px;

  // The "sm" breakpoint of the MUI is 600px
  // https://mui.com/material-ui/customization/breakpoints/
  @media screen and (min-width: 600px) {
    // The height of the application bar (TopBar layout) is 64px in laptop mode
    min-height: calc(100vh - 64px - 56px);
  }
`;
