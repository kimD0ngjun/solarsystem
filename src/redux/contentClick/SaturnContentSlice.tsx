import { createSlice } from "@reduxjs/toolkit";

interface SatrunSystemContent {
  Saturn: boolean;
  Enceladus: boolean;
  Titan: boolean;
}

const initialState: SatrunSystemContent = {
  Saturn: false,
  Enceladus: false,
  Titan: false,
}

const saturnContentSlice = createSlice({
  name: `saturnContent`,
  initialState,
  reducers: {
    saturnClick: (state: SatrunSystemContent) => {
      state.Saturn = true;
      state.Enceladus = false;
      state.Titan = false;
    },
    enceladusClick: (state: SatrunSystemContent) => {
      state.Saturn = false;
      state.Enceladus = true;
      state.Titan = false;
    },
    titanClick: (state: SatrunSystemContent) => {
      state.Saturn = false;
      state.Enceladus = false;
      state.Titan = true;
    },
    resetSaturnClick: () => initialState,
  }
});

export const { saturnClick, enceladusClick, titanClick, resetSaturnClick } = saturnContentSlice.actions;

export default saturnContentSlice.reducer;