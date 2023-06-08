import React from "react";
import { Chart } from "react-google-charts";
import Box from "@mui/material/Box";
import { selectedData } from "../ReduxSection/ChartSlice";
import { useSelector } from "react-redux";
export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2017-2022",
  },
  colors: ["#472183", "#cb1c8d"],
};
const BarChart = () => {
  const data = useSelector(selectedData);
  return (
    <Box sx={{ backgroundColor: "pink", width: "100%" }}>
      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </Box>
  );
};

export default BarChart;
