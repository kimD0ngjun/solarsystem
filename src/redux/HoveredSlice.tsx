import { createSlice} from "@reduxjs/toolkit";
import { HoveredData } from "../common/types";

const initialState: HoveredData = {
  Sun: false,
  Mercury: false,
  Venus: false,
  Earth: false,
  Mars: false,
  Jupiter: false,
  Saturn: false,
  Uranus: false,
  Neptune: false,
};

const hoveredSlice = createSlice({
  name: "hovered",
  initialState,
  reducers: {
    hoverSun: (state) => {
      state.Sun = true;
    },
    hoverMercury: (state) => {
      state.Mercury = true;
    },
    hoverVenus: (state) => {
      state.Venus = true;
    },
    hoverEarth: (state) => {
      state.Earth = true;
    },
    hoverMars: (state) => {
      state.Mars = true;
    },
    hoverJupiter: (state) => {
      state.Jupiter = true;
    },
    hoverSaturn: (state) => {
      state.Saturn = true;
    },
    hoverUranus: (state) => {
      state.Uranus = true;
    },
    hoverNeptune: (state) => {
      state.Neptune = true;
    },
    leavePlanets: () => initialState,
  },
});

export const {
  hoverSun,
  hoverMercury,
  hoverVenus,
  hoverEarth,
  hoverMars,
  hoverJupiter,
  hoverSaturn,
  hoverUranus,
  hoverNeptune,
  leavePlanets,
} = hoveredSlice.actions;

export default hoveredSlice.reducer;