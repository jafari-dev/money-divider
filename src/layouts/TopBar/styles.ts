import styled from "@emotion/styled/macro";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Menu, MenuItem, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledBrand = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: row;
  text-decoration: none;
  color: #ffffff;

  > svg {
    width: 48px;
    height: 48px;
    fill: #ffffff;
    margin-block: 4px;
  }
`;

export const StyledMenu = styled(Menu)`
  ul {
    padding-block: 0;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  padding: 4px 32px;
`;

export const StyledBurgurIcon = styled(MenuIcon)`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
