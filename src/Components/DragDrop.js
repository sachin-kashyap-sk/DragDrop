import React, { useState } from "react";
import DragTitle from "./DragTitle";
import Box from "@mui/material/Box";
import { useDrop } from "react-dnd";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useSelector, useDispatch } from "react-redux";
import classes from "../Styles/DragDrop/DragDrop.module.css";
import { addField, removeField, selectedTitle } from "./ReduxSection/DragSlice";
const DragDrop = () => {
  const Data = useSelector(selectedTitle);
  const dispatch = useDispatch();
  const [board, setBoard] = useState([]);

  // func for sec Container
  const [, drop] = useDrop(() => ({
    accept: "text",
    drop: (item) => AddTitleToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  // func for first Container
  const [, dropData] = useDrop(() => ({
    accept: "text",
    drop: (item) => AddTitleToData(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const handleBoardRemove = (id) => {
    setBoard((prev) => prev.filter((item) => item.id !== id));
  };

  const handleDataRemove = (id) => {
    dispatch(removeField(id));
  };
  const AddTitleToBoard = (id) => {
    const titleList = Data.find((DragTitle) => id === DragTitle.id);
    setBoard((prev) => [...prev, titleList]);
    dispatch(removeField(id));
  };
  const AddTitleToData = (temp) => {
    let arr = [];
    setBoard((prev) => {
      arr.push(prev.find((item) => item.id === temp.id));
      return prev.filter((item) => item.id !== temp.id);
    });
    setTimeout(() => {
      dispatch(addField(arr[arr.length - 1]));
    });
  };
  return (
    <Container
      maxWidth="false"
      sx={{ backgroundColor: "#4E6E81", minHeight: "100vh" }}
    >
      <Box className={classes.mainContainer}>
        <Box className={classes.firstContainer} ref={dropData}>
          {Data.map((item) => (
            <DragTitle
              title={item.title}
              id={item.id}
              key={item.id}
              onRemove={handleDataRemove}
            />
          ))}
        </Box>

        <Box className={classes.secContainer} ref={drop}>
          <Box>
            {board.map((items) => (
              <Box key={items.id}>
                <DragTitle
                  title={items.title}
                  id={items.id}
                  key={items.id}
                  onRemove={handleBoardRemove}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      
      <Box className={classes.btnContainer}>
        <Button
          variant="contained"
          onClick={() => {
            console.log(board);
          }}
        >
          Save
        </Button>
      </Box>
    </Container>
  );
};

export default DragDrop;
