import React, { useState } from "react";
import DragTitle from "./DragTitle";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useDrop } from "react-dnd";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useSelector, useDispatch } from "react-redux";
import classes from "../../../Styles/DragDrop/DragDrop.module.css";
import Bin from "../../../Assets/Board/Bin.png";
import Arrow from "../../../Assets/Board/Arrow.png";

import {
  addField,
  removeField,
  selectedTitle,
  selectedTextField,
} from "../../ReduxSection/DragSlice";
const DragDrop = () => {
  const Data = useSelector(selectedTitle);
  const FieldText = useSelector(selectedTextField);
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

  // const handleBoardRemove = (id) => {
  //   setBoard((prev) => prev.filter((item) => item.id !== id));
  // };

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

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));

  return (
    <Box>
      <DrawerHeader />
      <Container
        maxWidth="false"
        className={classes.indexStyle}
        sx={{ width: "100%", backgroundColor: "#ffffff", minHeight: "100vh" }}
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

          <Box className={classes.secMain}>
            <Box className={classes.secFirstInner}>
              {FieldText.map((items) => (
                <Box className={classes.secSecondInner}>
                  <Box>
                    <p className={classes.text}>{items.fieldText}</p>
                  </Box>
                  <Box>
                    <img src={Arrow} alt="Arrow" />
                  </Box>
                </Box>
              ))}
            </Box>

            <Box className={classes.secContainer} ref={drop}>
              <Box>
                {board.map((items) => (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    key={items.id}
                  >
                    <DragTitle
                      title={items.title}
                      id={items.id}
                      key={items.id}
                    />
                    <img
                      width="32px"
                      height="32px"
                      onClick={() => {
                        AddTitleToData(items);
                      }}
                      src={Bin}
                      alt="Bin"
                    />
                  </Box>
                ))}
              </Box>
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
    </Box>
  );
};
export default DragDrop;
