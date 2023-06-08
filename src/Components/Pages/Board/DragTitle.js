import React from "react";
import Box from "@mui/material/Box";
import { useDrag } from "react-dnd";
import classes from "../../../Styles/DragDrop/DragDrop.module.css";

const DragTitle = ({ id, title }) => {
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
    </Box>
  );
};

export default DragTitle;
