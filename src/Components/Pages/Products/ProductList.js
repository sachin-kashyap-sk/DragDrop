import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import ProductModal from "../../Modal/ProductModal";
import {
  data,
  OpenModal,
  RemoveProduct,
} from "../../ReduxSection/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import Bin from "../../../Assets/Board/Bin1.png";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const ProductList = () => {
  const dispatch = useDispatch();
  const ProductData = useSelector(data);

  return (
    <Box>
      <DrawerHeader />
      <Box sx={{ paddingTop: "3%" }}>
        <Paper>
          <Box
            sx={{
              padding: "1%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p>Product List</p>
            <ProductModal />
            <Button
              onClick={() => {
                dispatch(OpenModal(true));
              }}
              variant="contained"
            >
              ADD
            </Button>
          </Box>
          <Divider />
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Name
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Price
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Category
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Date
                  </TableCell>

                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ProductData.slice().map((item) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={item.id}>
                      <TableCell align="left">{item.name}</TableCell>
                      <TableCell align="left">{item.price}</TableCell>
                      <TableCell align="left">{item.category}</TableCell>
                      <TableCell align="left">{item.date}</TableCell>

                      <TableCell align="left">
                        <img
                          src={Bin}
                          alt="Bin"
                          width="24px"
                          height="24px"
                          onClick={() => {
                            dispatch(RemoveProduct(item.id));
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Box>
  );
};

export default ProductList;
