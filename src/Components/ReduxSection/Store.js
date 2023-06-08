import { configureStore } from "@reduxjs/toolkit";
import Drag from "./DragSlice";
import Product from "./ProductSlice";
import Chart from "./ChartSlice";
export const Store = configureStore({
  reducer: {
    Drag: Drag,
    Product: Product,
    Chart: Chart,
  },
});
