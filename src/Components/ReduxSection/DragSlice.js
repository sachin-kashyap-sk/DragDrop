import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      id: nanoid(),
      title: "Field 1",
      subTitle: "title 1",
    },
    {
      id: nanoid(),
      title: "Field 2",
      subTitle: "title 2",
    },
    {
      id: nanoid(),
      title: "Field 3",
      subTitle: "title 3",
    },
    {
      id: nanoid(),
      title: "Field 4",
      subTitle: "title 4",
    },
    {
      id: nanoid(),
      title: "Field 5",
      subTitle: "title 5",
    },
    {
      id: nanoid(),
      title: "Field 6",
      subTitle: "title 6",
    },
    {
      id: nanoid(),
      title: "Field 7",
      subTitle: "title 7",
    },
    {
      id: nanoid(),
      title: "Field 8",
      subTitle: "title 8",
    },
    {
      id: nanoid(),
      title: "Field 9",
      subTitle: "title 9",
    },
    {
      id: nanoid(),
      title: "Field 10",
      subTitle: "title 10",
    },
  ],

  fieldValue: [
    {
      id: nanoid(),
      fieldText: "Field 1",
    },
    {
      id: nanoid(),
      fieldText: "Field 2",
    },
    {
      id: nanoid(),
      fieldText: "Field 3",
    },
    {
      id: nanoid(),
      fieldText: "Field 4",
    },
    {
      id: nanoid(),
      fieldText: "Field 5",
    },
  ],
};

export const DragSlice = createSlice({
  name: "Drag",
  initialState,
  reducers: {
    removeField: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },

    addField: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { removeField, addField } = DragSlice.actions;
export const selectedTitle = (state) => state.Drag.value;
export const selectedTextField = (state) => state.Drag.fieldValue;
export default DragSlice.reducer;
