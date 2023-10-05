import { configureStore } from "@reduxjs/toolkit";
import timeCounterReducer from "./TimeCounterSlice";
import toggleReducer from "./ToggleSlice";
import changeWidthReducer from "./ChangeWidthSlice";
import selectReducer from "./SelectedSlice";
import hoverReducer from "./HoveredSlice";
import sunContentReudcer from "./contentClick/SunContentSlice";
import mercuryContentReducer from "./contentClick/MercuryContentSlice";
import venusContentReducer from "./contentClick/VenusContentSlice";
import earthContentReducer from "./contentClick/EarthContentSlice";
import marsContentReducer from "./contentClick/MarsContentSlice";
import jupiterContentReducer from "./contentClick/JupiterContentSlice";
import saturnContentReducer from "./contentClick/SaturnContentSlice";
import uranusContentReducer from "./contentClick/UranusContentSlice";
import neptuneContentReducer from "./contentClick/NeptuneContentSlice";

const store = configureStore({
  reducer: {
    timeCounter: timeCounterReducer,
    toggle: toggleReducer,
    changeWidth: changeWidthReducer,
    select: selectReducer,
    hover: hoverReducer,
    sunContent: sunContentReudcer,
    mercuryContent: mercuryContentReducer,
    venusContent: venusContentReducer,
    earthContent: earthContentReducer,
    marsContent: marsContentReducer,
    jupiterContent: jupiterContentReducer,
    saturnContent: saturnContentReducer,
    uranusContent: uranusContentReducer,
    neptuneContent: neptuneContentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;