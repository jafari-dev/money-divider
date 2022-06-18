import {
  Typography,
  AppBar,
  Container,
  Button,
  useMediaQuery,
  useTheme,
  ButtonGroup,
} from "@mui/material";
import { memo, useCallback, useRef, useState } from "react";

import { Logo } from "../../assets/images";
import { StyledBrand, StyledToolbar, StyledMenu, StyledMenuItem, StyledBurgurIcon } from "./styles";

function TopBar(): React.ReactElement {
  const theme = useTheme();
  const isWindowInSmallWidth = useMediaQuery(theme.breakpoints.down("sm"));

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuIconRef = useRef<SVGSVGElement>(null);

  const openMenu = useCallback(() => setIsMenuOpen(true), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <StyledToolbar>
          <StyledBrand to="/">
            <Logo title="Money Divider" />
            <Typography
              variant="h1"
              textTransform="uppercase"
              letterSpacing="1px"
              marginLeft="16px"
              fontSize="18px"
              fontWeight={500}
            >
              Money
              <br />
              Divider
            </Typography>
          </StyledBrand>
          {isWindowInSmallWidth ? (
            <>
              <StyledBurgurIcon ref={menuIconRef} onClick={openMenu} />
              <StyledMenu
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                anchorEl={menuIconRef.current}
                open={isMenuOpen}
                onClick={closeMenu}
              >
                <StyledMenuItem>Reset</StyledMenuItem>
                <StyledMenuItem>Load</StyledMenuItem>
                <StyledMenuItem>Save</StyledMenuItem>
              </StyledMenu>
            </>
          ) : (
            <ButtonGroup variant="outlined" color="secondary">
              <Button>Reset</Button>
              <Button>Load</Button>
              <Button>Save</Button>
            </ButtonGroup>
          )}
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}

export default memo(TopBar);
