import { createSlice } from "@reduxjs/toolkit";

interface VenusSystemContent {
  Venus: boolean;
}

const initialState: VenusSystemContent = {
  Venus: false,
}

const venusContentSlice = createSlice({
  name: `venusContent`,
  initialState,
  reducers: {
    venusClick: (state: VenusSystemContent) => {
      state.Venus = true;
    },
    resetVenusClick: () => initialState,
  }
});

export const { venusClick, resetVenusClick } = venusContentSlice.actions;

export default venusContentSlice.reducer;