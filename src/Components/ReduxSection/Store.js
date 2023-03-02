import { configureStore } from "@reduxjs/toolkit";
import Drag from "./DragSlice";
export const Store = configureStore({
  reducer: {
    Drag: Drag,
  },
});
