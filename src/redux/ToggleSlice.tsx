import { createSlice } from "@reduxjs/toolkit";

interface ToggleData {
  isToggled : boolean;
}

const initialState: ToggleData = {
  isToggled: false,
}

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    setToggle: (state: ToggleData) => {
      state.isToggled = !state.isToggled;
    }
  }
});

export const { setToggle } = toggleSlice.actions;

export default toggleSlice.reducer;
