import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: "#28E98C",
};

export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setColor: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setColor } = colorSlice.actions;
export default colorSlice.reducer;
