import { Typography, useTheme, useMediaQuery } from "@mui/material";
import { useStore } from "@stores";
import { Empty } from "_/images";
import { observer } from "mobx-react-lite";

import { AddPersonButton } from "..";
import PeopleCards from "./cards-container";
import PeopleRows from "./rows-container";
import { StyledDiv } from "./styles";

function PeopleList() {
  const theme = useTheme();
  const isWindowInTabletWidth = useMediaQuery(theme.breakpoints.down("md"));
  const { persons } = useStore();

  if (persons.length === 0) {
    return (
      <StyledDiv>
        <Empty />
        <Typography variant="h6">Nothing to show!</Typography>
        <AddPersonButton firstUser />
      </StyledDiv>
    );
  } else if (isWindowInTabletWidth) {
    return <PeopleCards />;
  } else {
    return <PeopleRows />;
  }
}

export default observer(PeopleList);
