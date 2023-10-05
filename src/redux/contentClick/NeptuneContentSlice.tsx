import { createSlice } from "@reduxjs/toolkit";

interface NeptuneSystemContent {
  Neptune: boolean;
  Triton: boolean;
}

const initialState: NeptuneSystemContent = {
  Neptune: false,
  Triton: false
}

const neptuneContentSlice = createSlice({
  name: `neptuneContent`,
  initialState,
  reducers: {
    neptuneClick: (state: NeptuneSystemContent) => {
      state.Neptune = true;
      state.Triton = false;
    },
    tritonClick: (state: NeptuneSystemContent) => {
      state.Neptune = false;
      state.Triton = true;
    },
    resetNeptuneClick: () => initialState,
  }
});

export const { neptuneClick, tritonClick, resetNeptuneClick } = neptuneContentSlice.actions;

export default neptuneContentSlice.reducer;