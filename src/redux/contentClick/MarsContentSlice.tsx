import { createSlice } from "@reduxjs/toolkit";

interface MarsSystemContent {
  Mars: boolean;
  Phobos: boolean;
  Deimos: boolean;
}

const initialState: MarsSystemContent = {
  Mars: false,
  Phobos: false,
  Deimos: false,
}

const marsContentSlice = createSlice({
  name: `marsContent`,
  initialState,
  reducers: {
    marsClick: (state: MarsSystemContent) => {
      state.Mars = true;
      state.Phobos = false;
      state.Deimos = false;
    },
    phobosClick: (state: MarsSystemContent) => {
      state.Mars = false;
      state.Phobos = true;
      state.Deimos = false;
    },
    deimosClick: (state: MarsSystemContent) => {
      state.Mars = false;
      state.Phobos = false;
      state.Deimos = true;
    },
    resetMarsClick: () => initialState,
  }
});

export const { marsClick, phobosClick, deimosClick, resetMarsClick } = marsContentSlice.actions;

export default marsContentSlice.reducer;