import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import GeoChart from "../../Charts/GeoChart";
import PieChart from "../../Charts/PieChart";
import classes from "../../../Styles/Analytics/AnalyticsMiddleSection.module.css";
const AnalyticsMiddleSection = () => {
  return (
    <Box>
      <Box className={classes.card}>
        <Card className={classes.firstCard}>
          <CardContent>
            <GeoChart />
          </CardContent>
        </Card>

        <Card className={classes.secCard}>
          <CardContent>
            <PieChart />
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default AnalyticsMiddleSection;
