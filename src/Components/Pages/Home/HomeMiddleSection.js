import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import RightAccordion from "./RightAccordion";
import CardContent from "@mui/material/CardContent";
import classes from "../../../Styles/Home/HomeMiddle.module.css";
import BarChart from "../../Charts/BarChart";
const HomeMiddleSection = () => {
  return (
    <Box>
      <Box className={classes.container}>
        <Box className={classes.firstInner}>
          <Card className={classes.firstContainer}>
            <CardContent sx={{ width: "100%" }}>
              <BarChart />
            </CardContent>
          </Card>
        </Box>

        <Box className={classes.secInner}>
          <Card className={classes.secContainer}>
            <CardContent>
              <p className={classes.popularText}>Popular Product</p>
              <RightAccordion />
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeMiddleSection;
