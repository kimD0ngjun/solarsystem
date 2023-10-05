import { createSlice } from "@reduxjs/toolkit";

interface EarthSystemContent {
  Earth: boolean;
  Moon: boolean;
}

const initialState: EarthSystemContent = {
  Earth: false,
  Moon: false
}

const earthContentSlice = createSlice({
  name: `earthContent`,
  initialState,
  reducers: {
    earthClick: (state: EarthSystemContent) => {
      state.Earth = true;
      state.Moon = false;
    },
    moonClick: (state: EarthSystemContent) => {
      state.Earth = false;
      state.Moon = true;
    },
    resetEarthClick: () => initialState,
  }
});

export const { earthClick, moonClick, resetEarthClick } = earthContentSlice.actions;

export default earthContentSlice.reducer;