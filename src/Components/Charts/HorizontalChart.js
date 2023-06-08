import React from "react";
import { Chart } from "react-google-charts";
import { selectedHorizontal } from "../ReduxSection/ChartSlice";
import { useSelector } from "react-redux";

export const options = {
  title: "Products Sales on last Two year",
  chartArea: { width: "50%" },
  hAxis: {
    title: "Total Sales",
    minValue: 0,
  },
  vAxis: {
    title: "Sales",
  },
  colors: ["#472183", "#cb1c8d"],
};

const HorizontalChart = () => {
  const data = useSelector(selectedHorizontal);
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="300px"
      data={data}
      options={options}
    />
  );
};

export default HorizontalChart;
