import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import classes from "../../../Styles/Analytics/AnalyticsTopSection.module.css";
import AnalyticsMiddleSection from "./AnalyticsMiddleSection";
import HorizontalChart from "../../Charts/HorizontalChart";
// import Container from "@mui/material/Container";

import CountUp from "react-countup";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AnalyticsTopSection = () => {
  return (
    <Box>
      <DrawerHeader />
      <Box className={classes.topMain}>
        <Box className={classes.card}>
          <Card className={classes.firstCard}>
            <CardContent className={classes.firstInner}>
              <Box>
                <p className={classes.visitText}>Visitors</p>
              </Box>
              <Box>
                <p className={classes.numberText}>
                  <CountUp end={26500} delay={0.2} duration={1} />
                </p>
              </Box>
              <Box>
                <p className={classes.sinceText}>Since Last week</p>
              </Box>
            </CardContent>
          </Card>

          <Card className={classes.firstCard}>
            <CardContent className={classes.firstInner}>
              <Box>
                <p className={classes.visitText}>Visitors</p>
              </Box>
              <Box>
                <p className={classes.numberText}>
                  <CountUp end={21500} delay={0.2} duration={1} />
                </p>
              </Box>
              <Box>
                <p className={classes.sinceText}>Since Last week</p>
              </Box>
            </CardContent>
          </Card>
        </Box>

        <Box className={classes.card}>
          <Card className={classes.firstCard}>
            <CardContent className={classes.firstInner}>
              <Box>
                <p className={classes.visitText}>Visitors</p>
              </Box>
              <Box>
                <p className={classes.numberText}>
                  <CountUp end={26500} delay={0.2} duration={1} />
                </p>
              </Box>
              <Box>
                <p className={classes.sinceText}>Since Last week</p>
              </Box>
            </CardContent>
          </Card>

          <Card className={classes.firstCard}>
            <CardContent className={classes.firstInner}>
              <Box>
                <p className={classes.visitText}>Visitors</p>
              </Box>
              <Box>
                <p className={classes.numberText}>
                  <CountUp end={21500} delay={0.2} duration={1} />
                </p>
              </Box>
              <Box>
                <p className={classes.sinceText}>Since Last week</p>
              </Box>
            </CardContent>
          </Card>
        </Box>

        <Card className={classes.secCard}>
          <CardContent>
            <HorizontalChart />
          </CardContent>
        </Card>
      </Box>
      <AnalyticsMiddleSection />
    </Box>
  );
};

export default AnalyticsTopSection;
