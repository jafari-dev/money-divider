import { MajorPath as MP } from "#/types";
import { parsePath, isMajorPathValid } from "#/utilities/location";
import { Group, InsertChart, MonetizationOn, Bookmark } from "@mui/icons-material";
import { BottomNavigationAction } from "@mui/material";
import { memo, useState, useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { StyledBottomNavigation } from "./styles";

function BottomNavigationMenu(): React.ReactElement {
  const location = useLocation();
  const navigate = useNavigate();

  const [visibleSection, setVisibleSection] = useState<MP | null>(null);

  const handleChangeSection = useCallback(
    (_event: React.SyntheticEvent<Element, Event>, value: MP) => {
      if (visibleSection !== value) {
        setVisibleSection(value);
        navigate(value);
      }
    },
    [visibleSection]
  );

  useEffect(() => {
    const { pathname } = location;
    const { majorPath } = parsePath(pathname);

    if (isMajorPathValid(majorPath)) setVisibleSection(majorPath as MP);
    else setVisibleSection(null);
  }, [location]);

  return (
    <StyledBottomNavigation showLabels onChange={handleChangeSection} value={visibleSection}>
      <BottomNavigationAction label="Overview" value={MP.Overview} icon={<InsertChart />} />
      <BottomNavigationAction label="Expenses" value={MP.Expenses} icon={<MonetizationOn />} />
      <BottomNavigationAction label="People" value={MP.People} icon={<Group />} />
      <BottomNavigationAction label="Marks" value={MP.Bookmarks} icon={<Bookmark />} />
    </StyledBottomNavigation>
  );
}

export default memo(BottomNavigationMenu);
