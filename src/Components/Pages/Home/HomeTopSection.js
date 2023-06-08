import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Money from "../../../Assets/Home/Money1.png";
import Order from "../../../Assets/Home/Order1.png";
import classes from "../../../Styles/Home/HomeTop.module.css";
import HomeMiddleSection from "./HomeMiddleSection";
import CountUp from "react-countup";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));
const HomeTopSection = () => {
  return (
    <Box>
      <DrawerHeader />
      <Box className={classes.homeTopContainer}>
        <Card className={classes.cardContainer}>
          <img src={Money} alt="Money" height="64px" width="64px" />
          <CardContent>
            <Box>
              <p className={classes.headerText}>Total Earning</p>
            </Box>
            <p className={classes.amountText}>
              $ <CountUp end={500} delay={0.2} duration={1} />
            </p>
            <Box></Box>
          </CardContent>
        </Card>

        <Card className={classes.cardContainer}>
          <img src={Order} alt="Order" height="64px" width="64px" />
          <CardContent>
            <Box>
              <p className={classes.headerText}>Total Order</p>
            </Box>
            <Box>
              <p className={classes.amountText}>
                
                $ <CountUp end={900} delay={0.2} duration={1} />
              </p>
            </Box>
          </CardContent>
        </Card>

        <Box className={classes.secContainer}>
          <Card className={classes.cardSec}>
            <img src={Money} alt="Money" height="32px" width="32px" />
            <CardContent>
              <Box>
                <p className={classes.secHeaderText}>Total Income</p>
              </Box>
              <Box>
                <p className={classes.amountText}> $ 900.00</p>
              </Box>
            </CardContent>
          </Card>

          <Card className={classes.cardSec}>
            <img src={Money} alt="Money" height="32px" width="32px" />
            <CardContent>
              <Box>
                <p className={classes.headerText}>Total Income</p>
              </Box>
              <Box>
                <p className={classes.amountText}> $ 900.00</p>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
      <Box>
        <HomeMiddleSection />
      </Box>
    </Box>
  );
};

export default HomeTopSection;
