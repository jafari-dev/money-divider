import { Button, Divider, Grid, Typography } from "@mui/material";
import { HomeBackground, Charts, Click, Download, Lock, Code, Server } from "_/images";
import { memo } from "react";
import { Link } from "react-router-dom";

import { StyledText, StyledWrapper, StyledImage, StyledHeading, StyledGrid } from "./styles";

function Home() {
  return (
    <StyledWrapper>
      <Grid
        container
        marginY={2}
        rowGap={4}
        columnSpacing={4}
        textAlign="center"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} md={4}>
          <StyledImage src={HomeBackground} />
        </Grid>
        <Grid item xs={12} md={8}>
          <StyledHeading variant="h3">
            Calculate the share of persons in the common expenses!
          </StyledHeading>
          <Divider sx={{ marginBlock: 2 }} />
          <StyledText variant="h3">Fully free!</StyledText>
        </Grid>
      </Grid>
      <StyledGrid container spacing={6} textAlign="center">
        <Grid item xs={12} sm={6} md={4}>
          <Download />
          <Typography variant="h6">Loading and Saving</Typography>
          <Typography variant="body1">
            The application allows you to save everything you enter as a JSON file. You can also
            load dowloaded files and watch them or modify them.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Lock />
          <Typography variant="h6">Data Encryption</Typography>
          <Typography variant="body1">
            Is security an important issue for you? You can encrypt the downloading files using a
            security-key and so, no body can load it in the application without its key!
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Click />
          <Typography variant="h6">Easy Usage</Typography>
          <Typography variant="body1">
            You can easily interact with the UI of this application without reading any document. We
            tried to design a friendly envirenment for you to have a sweet exprerience.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Charts />
          <Typography variant="h6">Lovely Charts</Typography>
          <Typography variant="body1">
            Charts can show lots of effecient informations in a short time and little space! We show
            different and informitive charts for your expenses to save your time!
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Server />
          <Typography variant="h6">Serverless</Typography>
          <Typography variant="body1">
            Our application hasn't any server and works just with your browser and not more! So you
            have no need to signing-up, loging-in and etc. So you can use it offline!
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Code />
          <Typography variant="h6">Open Source</Typography>
          <Typography variant="body1">
            The source code of this application is available for anybody. All the developers from
            any place of the world can work on its repositry to improving and extending its
            features!
          </Typography>
        </Grid>
      </StyledGrid>
      <Link to="/overview">
        <Button color="success" size="large" variant="contained" sx={{ marginBottom: 2 }}>
          Start Now
        </Button>
      </Link>
    </StyledWrapper>
  );
}

export default memo(Home);
