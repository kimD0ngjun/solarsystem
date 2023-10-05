import { createSlice } from "@reduxjs/toolkit";

interface UranusSystemContent {
  Uranus: boolean;
  Titania: boolean;
}

const initialState: UranusSystemContent = {
  Uranus: false,
  Titania: false
}

const uranusContentSlice = createSlice({
  name: `uranusContent`,
  initialState,
  reducers: {
    uranusClick: (state: UranusSystemContent) => {
      state.Uranus = true;
      state.Titania = false;
    },
    titaniaClick: (state: UranusSystemContent) => {
      state.Uranus = false;
      state.Titania = true;
    },
    resetUranusClick: () => initialState,
  }
});

export const { uranusClick, titaniaClick, resetUranusClick } = uranusContentSlice.actions;

export default uranusContentSlice.reducer;