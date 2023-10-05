import { createSlice } from "@reduxjs/toolkit";

interface CounterData {
  speed: number;
  isPaused: boolean;
  callCount: number;
  changeCallCount: number;
}

const initialState: CounterData = {
  speed: 1,
  isPaused: false,
  callCount: 0, 
  changeCallCount: 0,
}

const timeCounterSlice = createSlice({
  name: `timeCounter`,
  initialState,
  reducers: {
    setSpeed: (state: CounterData, action) => {
      if (state.speed !== action.payload) {
        state.speed = action.payload;
        state.changeCallCount = state.callCount;
      }
    },
    togglePause: (state: CounterData) => {
      state.isPaused = !state.isPaused
    },
    incrementCallCount: (state: CounterData) => {
      state.callCount += 1;
    },
    changeCallCount: (state: CounterData, action) => {
      state.changeCallCount = action.payload
    }
  }
});

export const { setSpeed, togglePause, incrementCallCount } = timeCounterSlice.actions;

export default timeCounterSlice.reducer;