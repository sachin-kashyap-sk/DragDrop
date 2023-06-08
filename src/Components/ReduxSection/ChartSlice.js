import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    ["Year", "Sales", "Expenses", "Profit"],
    ["2017", 1000, 400, 200],
    ["2018", 1000, 400, 200],
    ["2019", 1000, 400, 200],
    ["2020", 1000, 400, 200],
    ["2020", 1000, 400, 200],
  ],

  horizontalValue: [
    ["Sales", "2022 sales", "2023 Sales"],
    ["Television", 8175000, 8008000],
    ["Washing ", 3792000, 3694000],
    ["LapTop", 2695000, 2896000],
    ["Smart Tv", 2099000, 1953000],
    ["Mobile", 1526000, 1517000],
  ],

  pieValue: [
    ["Task", "sales per Day"],
    ["Television", 11],
    ["Mobile", 2],
    ["Laptop", 2],
    ["Smart Watch", 2],
    ["Washing Machine", 7],
  ],
};

const chartSlice = createSlice({
  name: "Chart",
  initialState,
  reducers: {
    setNewData: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setNewData } = chartSlice.actions;
export const selectedData = (state) => state.Chart.value;
export const selectedHorizontal = (state) => state.Chart.horizontalValue;
export const selectedPie = (state) => state.Chart.pieValue;
export default chartSlice.reducer;
