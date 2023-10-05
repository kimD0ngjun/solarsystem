import { createSlice } from "@reduxjs/toolkit";

interface WidthData {
  isChanged : boolean;
}

const initialState: WidthData = {
  isChanged: false,
}

const changeWidthSlice = createSlice({
  name: `changeWidth`,
  initialState,
  reducers: {
    expandWidth: (state: WidthData) => {
      state.isChanged = true;
    },
    shortenWidth: (state: WidthData) => {
      state.isChanged = false;
    },
  }
});

export const { expandWidth, shortenWidth } = changeWidthSlice.actions;

export default changeWidthSlice.reducer;