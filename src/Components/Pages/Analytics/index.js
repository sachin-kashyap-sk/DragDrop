import React from "react";
import Box from "@mui/material/Box";
import DrawerNav from "../../Navigation/DrawerNav";
import AnalyticsTopSection from "./AnalyticsTopSection";
import Container from "@mui/material/Container";
import classes from "../../../Styles/Analytics/AnalyticsTopSection.module.css";
const Analytics = () => {
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
        <AnalyticsTopSection />
      </Box>
    </Container>
  );
};

export default Analytics;
