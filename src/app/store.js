import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "../Features/Color/colorSlice";
export const store = configureStore({ reducer: { color: colorReducer } });
