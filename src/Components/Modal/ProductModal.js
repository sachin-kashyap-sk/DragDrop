import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useSelector, useDispatch } from "react-redux";
import dayjs from "dayjs";
import {
  OpenModal,
  selectModal,
  AddProduct,
} from "../ReduxSection/ProductSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  p: 3,
};

const ProductModal = () => {
  const [newDate, setNewDate] = React.useState(
    dayjs(
      new Date().getMonth() +
        1 +
        "-" +
        new Date().getDate() +
        "-" +
        new Date().getFullYear()
    )
  );

  const [value, setValue] = useState({
    price: "",
    name: "",
    category: "",
    date:
      new Date().getMonth() +
      1 +
      "-" +
      new Date().getDate() +
      "-" +
      new Date().getFullYear(),
  });

  const ModalOpen = useSelector(selectModal);
  const dispatch = useDispatch();

  const handleChange = (newValue) => {
    setNewDate(newValue);

    setValue((prev) => ({
      ...prev,
      date: `${newValue.$D}-${newValue.$M}-${newValue.$y}`,
    }));
  };
  const AddHandler = () => {
    if (!value) {
      return;
    }
    dispatch(AddProduct(value));
    setValue({
      price: "",
      name: "",
      category: "",
      date: "",
    });
  };

  return (
    <div>
      <Modal
        open={ModalOpen}
        onClose={() => {
          dispatch(OpenModal(false));
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <TextField
              label="Name"
              sx={{ width: "100%" }}
              variant="outlined"
              value={value.name}
              onChange={(e) => {
                setValue({ ...value, name: e.target.value });
              }}
            />
          </Box>
          <Box sx={{ paddingTop: "4%" }}>
            <TextField
              label="Price"
              type="number"
              variant="outlined"
              sx={{ width: "100%" }}
              value={value.price}
              onChange={(e) => {
                setValue({ ...value, price: e.target.value });
              }}
            />
          </Box>
          <Box sx={{ paddingTop: "4%" }}>
            <TextField
              label="Category"
              variant="outlined"
              sx={{ width: "100%" }}
              value={value.category}
              onChange={(e) => {
                setValue({ ...value, category: e.target.value });
              }}
            />
          </Box>

          <Box sx={{ paddingTop: "4%" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                sx={{ width: "100%" }}
                InputProps={{
                  disableUnderline: true,
                }}
                inputFormat="MM/DD/YYYY"
                value={newDate}
                onChange={handleChange}
                renderInput={(params) => (
                  <TextField variant="standard" {...params} />
                )}
              />
            </LocalizationProvider>
          </Box>

          <Box sx={{ paddingTop: "3%" }}>
            <Button
              disabled={
                !value.name || !value.price || !value.category || !value.date
              }
              onClick={AddHandler}
              variant="contained"
            >
              ADD
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ProductModal;
