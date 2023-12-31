import { createSlice } from "@reduxjs/toolkit";

interface JupiterSystemContent {
  Jupiter: boolean;
  Io: boolean;
  Europa: boolean;
  Ganymede: boolean;
  Callisto: boolean;
}

const initialState: JupiterSystemContent = {
  Jupiter: false,
  Io: false,
  Europa: false,
  Ganymede: false,
  Callisto: false,
}

const jupiterContentSlice = createSlice({
  name: `jupiterContent`,
  initialState,
  reducers: {
    jupiterClick: (state: JupiterSystemContent) => {
      state.Jupiter = true;
      state.Io = false;
      state.Europa = false;
      state.Ganymede = false;
      state.Callisto = false;
    },
    ioClick: (state: JupiterSystemContent) => {
      state.Jupiter = false;
      state.Io = true;
      state.Europa = false;
      state.Ganymede = false;
      state.Callisto = false;
    },
    europaClick: (state: JupiterSystemContent) => {
      state.Jupiter = false;
      state.Io = false;
      state.Europa = true;
      state.Ganymede = false;
      state.Callisto = false;
    },
    ganymadeClick: (state: JupiterSystemContent) => {
      state.Jupiter = false;
      state.Io = false;
      state.Europa = false;
      state.Ganymede = true;
      state.Callisto = false;
    },
    callistoClick: (state: JupiterSystemContent) => {
      state.Jupiter = false;
      state.Io = false;
      state.Europa = false;
      state.Ganymede = false;
      state.Callisto = true;
    },
    resetJupiterClick: () => initialState,
  }
});

export const { jupiterClick, ioClick, europaClick, ganymadeClick, callistoClick, resetJupiterClick } = jupiterContentSlice.actions;

export default jupiterContentSlice.reducer;