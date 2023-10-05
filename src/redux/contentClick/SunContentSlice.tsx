import { createSlice } from "@reduxjs/toolkit";

interface SunSystemContent {
  Sun: boolean;
}

const initialState: SunSystemContent = {
  Sun: false,
}

const sunContentSlice = createSlice({
  name: `sunContent`,
  initialState,
  reducers: {
    sunClick: (state: SunSystemContent) => {
      state.Sun = true;
    },
    resetSunClick: () => initialState,
  }
});

export const { sunClick, resetSunClick } = sunContentSlice.actions;

export default sunContentSlice.reducer;