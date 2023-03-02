import React from "react";
import Box from "@mui/material/Box";
import Bin from "../Assets/Bin.png";
import { useDrag } from "react-dnd";
import classes from "../Styles/DragDrop/DragDrop.module.css";

const DragTitle = ({ id, title, onRemove }) => {
  const [, drag] = useDrag(() => ({
    type: "text",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Box className={classes.dragMain}>
      <p ref={drag} className={classes.title}>
        {title}
      </p>
      <img
        width="24px"
        height="24px"
        onClick={() => {
          onRemove(id);
        }}
        src={Bin}
        alt="Bin"
      />
    </Box>
  );
};

export default DragTitle;
