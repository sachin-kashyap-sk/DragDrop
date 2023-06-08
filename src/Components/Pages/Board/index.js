import React from "react";
import Box from "@mui/material/Box";
import DrawerNav from "../../Navigation/DrawerNav";
import DragDrop from "./DragDrop";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import classes from "../../../Styles/DragDrop/DragDrop.module.css";
const Board = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "row" }}
      className={classes.indexStyle}
    >
      <Box>
        <DrawerNav />
      </Box>
      <Box sx={{ width: "100%" }}>
        <DndProvider backend={HTML5Backend}>
          <DragDrop />
        </DndProvider>
      </Box>
    </Box>
  );
};
export default Board;
