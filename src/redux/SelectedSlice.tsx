import { createSlice} from "@reduxjs/toolkit";

interface SelectedData {
  Sun: boolean;
  Mercury: boolean;
  Venus: boolean;
  Earth: boolean;
  Mars: boolean;
  Jupiter: boolean;
  Saturn: boolean;
  Uranus: boolean;
  Neptune: boolean;
}

const initialState: SelectedData = {
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

const selectedSlice = createSlice({
  name: "selected",
  initialState,
  reducers: {
    selectSun: (state) => {
      state.Sun = true;
    },
    selectMercury: (state) => {
      state.Mercury = true;
    },
    selectVenus: (state) => {
      state.Venus = true;
    },
    selectEarth: (state) => {
      state.Earth = true;
    },
    selectMars: (state) => {
      state.Mars = true;
    },
    selectJupiter: (state) => {
      state.Jupiter = true;
    },
    selectSaturn: (state) => {
      state.Saturn = true;
    },
    selectUranus: (state) => {
      state.Uranus = true;
    },
    selectNeptune: (state) => {
      state.Neptune = true;
    },
    resetPlanets: () => initialState,
  },
});

export const {
  selectSun,
  selectMercury,
  selectVenus,
  selectEarth,
  selectMars,
  selectJupiter,
  selectSaturn,
  selectUranus,
  selectNeptune,
  resetPlanets,
} = selectedSlice.actions;

export default selectedSlice.reducer;