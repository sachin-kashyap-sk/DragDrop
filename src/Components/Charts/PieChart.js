import React from "react";
import Box from "@mui/material/Box";
import { Chart } from "react-google-charts";
import { selectedPie } from "../ReduxSection/ChartSlice";
import { useSelector } from "react-redux";

export const options = {
  title: "Daily Sales",
  pieHole: 0.4,
  is3D: false,
};
const PieChart = () => {
  const data = useSelector(selectedPie);
  return (
    <Box>
      <Chart
        chartType="PieChart"
        width="100%"
        height="300px"
        data={data}
        options={options}
      />
    </Box>
  );
};

export default PieChart;
