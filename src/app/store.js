import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "../Features/color/colorSlice";
export const store = configureStore({
  reducer: {
    color: colorReducer,
  },
});
