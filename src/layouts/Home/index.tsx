import { Button, Typography } from "@mui/material";
import { HomeBackground } from "_/images";
import { memo } from "react";

import { StyledSection, StyledWrapper, StyledImage, StyledText, StyledList } from "./styles";

function Home() {
  return (
    <StyledWrapper>
      <StyledSection>
        <StyledImage src={HomeBackground} />
        <StyledText variant="h3">Calculate the share of persons in the common expenses!</StyledText>
      </StyledSection>
      <StyledList>
        <Typography variant="h3">Why Us?</Typography>
        <Typography variant="h5">Easy To Use</Typography>
        <Typography variant="h5">Friendly UI</Typography>
        <Typography variant="h5">Fast Usage</Typography>
        <Typography variant="h5">Lovely Charts</Typography>
      </StyledList>
      <Button color="success" size="large" variant="contained">
        Start Now
      </Button>
    </StyledWrapper>
  );
}

export default memo(Home);
