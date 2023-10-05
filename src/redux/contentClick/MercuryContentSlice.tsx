import { createSlice } from "@reduxjs/toolkit";

interface MercurySystemContent {
  Mercury: boolean;
}

const initialState: MercurySystemContent = {
  Mercury: false,
}

const mercuryContentSlice = createSlice({
  name: `mercuryContent`,
  initialState,
  reducers: {
    mercuryClick: (state: MercurySystemContent) => {
      state.Mercury = true;
    },
    resetMercuryClick: () => initialState,
  }
});

export const { mercuryClick, resetMercuryClick } = mercuryContentSlice.actions;

export default mercuryContentSlice.reducer;