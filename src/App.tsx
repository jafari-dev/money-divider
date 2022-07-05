import { TopBar, NavigationMenu, GlobalWrapper, Home } from "@layouts";
import { Container } from "@mui/material";
import { People } from "@pages";
import { Routes, Route } from "react-router-dom";

function Application(): React.ReactElement {
  return (
    <>
      <TopBar />
      <Container>
        <GlobalWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people/*" element={<People />} />
          </Routes>
        </GlobalWrapper>
      </Container>
      <NavigationMenu />
    </>
  );
}

export default Application;
