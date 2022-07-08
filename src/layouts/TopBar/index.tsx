import {
  Typography,
  AppBar,
  Container,
  Button,
  useMediaQuery,
  useTheme,
  ButtonGroup,
} from "@mui/material";
import { Logo } from "_/images";
import React, { memo, useCallback, useRef, useState } from "react";

import { StyledBrand, StyledToolbar, StyledMenu, StyledMenuItem, StyledBurgurIcon } from "./styles";

interface Props {
  onSaveStore: () => void;
  onLoadStore: (file: File) => void;
  onResetStore: () => void;
}

function TopBar({ onLoadStore, onSaveStore, onResetStore }: Props): React.ReactElement {
  const theme = useTheme();
  const isWindowInSmallWidth = useMediaQuery(theme.breakpoints.down("sm"));

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuIconRef = useRef<SVGSVGElement>(null);

  const openMenu = useCallback(() => setIsMenuOpen(true), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const openFileLoader = useCallback(() => fileInputRef.current?.click(), []);
  const handleChangeSelectedFile = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.currentTarget.files;

      if (files != null) onLoadStore(files[0]);
    },
    [onLoadStore]
  );

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
                <StyledMenuItem onClick={onResetStore}>Reset</StyledMenuItem>
                <StyledMenuItem onClick={openFileLoader}>Load</StyledMenuItem>
                <StyledMenuItem onClick={onSaveStore}>Save</StyledMenuItem>
              </StyledMenu>
            </>
          ) : (
            <ButtonGroup variant="outlined" color="secondary">
              <Button onClick={onResetStore}>Reset</Button>
              <Button onClick={openFileLoader}>Load</Button>
              <Button onClick={onSaveStore}>Save</Button>
            </ButtonGroup>
          )}
        </StyledToolbar>
      </Container>
      <input
        multiple={false}
        accept="json"
        style={{ display: "none" }}
        type="file"
        ref={fileInputRef}
        onChange={handleChangeSelectedFile}
      />
    </AppBar>
  );
}

export default memo(TopBar);
