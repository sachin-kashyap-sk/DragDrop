import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import classes from "../../../Styles/Products/Product.module.css";
import DrawerNav from "../../Navigation/DrawerNav";
import ProductList from "./ProductList";
const Product = () => {
  return (
    <Container
      maxWidth="false"
      className={classes.indexStyle}
      sx={{ display: "flex", flexDirection: "row" }}
    >
      <Box>
        <DrawerNav />
      </Box>
      <Box sx={{ width: "90%" }}>
        <ProductList />
      </Box>
    </Container>
  );
};

export default Product;
