import React from "react";
import DrawerNav from "../../Navigation/DrawerNav";
import Box from "@mui/material/Box";
import HomeTopSection from "./HomeTopSection";
import Container from "@mui/material/Container";
import classes from "../../../Styles/Home/HomeTop.module.css";
const Home = () => {
  return (
    <Container
      maxWidth="false"
      className={classes.indexStyle}
      sx={{ display: "flex", flexDirection: "row" }}
    >
      <Box>
        <DrawerNav />
      </Box>
      <Box sx={{ width: "100%" }}>
        <HomeTopSection />
      </Box>
    </Container>
  );
};

export default Home;
