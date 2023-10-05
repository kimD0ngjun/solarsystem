import styled from "styled-components";

import { expandWidth } from "../redux/ChangeWidthSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { AppDispatch, RootState } from "../redux/store";
import { resetPlanets, selectSun } from "../redux/SelectedSlice";
import { hoverSun, leavePlanets } from "../redux/HoveredSlice";
import { sunClick } from "../redux/contentClick/SunContentSlice"
import { resetMercuryClick } from "../redux/contentClick/MercuryContentSlice";
import { resetVenusClick } from "../redux/contentClick/VenusContentSlice";
import { resetEarthClick } from "../redux/contentClick/EarthContentSlice";
import { resetMarsClick } from "../redux/contentClick/MarsContentSlice";
import { resetJupiterClick } from "../redux/contentClick/JupiterContentSlice";
import { resetSaturnClick } from "../redux/contentClick/SaturnContentSlice";
import { resetUranusClick } from "../redux/contentClick/UranusContentSlice";
import { resetNeptuneClick } from "../redux/contentClick/NeptuneContentSlice";

interface MainSunProps {
  isHovered: boolean;
  isSelected: boolean;
  isChanged: boolean;
}

const Sphere = styled.div<MainSunProps>`
  position: absolute;
  border-radius: 50%;
  width: 19rem;
  height: 19rem;
  background: radial-gradient(yellow, yellow, yellow, #ffd000, orange, orange, salmon, brown);
  box-shadow: 0 0 15rem white;
  z-index: 10;
  box-shadow: 
  ${({ isSelected, isChanged, isHovered }) => 
    isSelected && isChanged 
      ? '0 0 20rem 0 violet, inset 0 0 20rem 0 violet' 
      : isHovered 
      ? '0 0 20rem 0 purple, inset 0 0 20rem 0 purple' 
      : 'none'};

  &:hover {
    cursor: pointer;
  }

  &:active {
    cursor: grab;
  }
`

const Sun = () => {
  const isHovered = useAppSelector((state: RootState) => state.hover.Sun)
  const isSelected = useAppSelector((state: RootState) => state.select.Sun)
  const handleHoverEnter = () => {
    dispatch(hoverSun())
  }
  const handleHoverLeave = () => {
    dispatch(leavePlanets())
  }

  const dispatch: AppDispatch = useAppDispatch();
  const isChanged = useAppSelector((state: RootState) => state.changeWidth.isChanged)
  const handleExpand = () => {
    dispatch(resetPlanets())
    dispatch(selectSun())
    dispatch(expandWidth())
    dispatch(resetMercuryClick())
    dispatch(resetVenusClick())
    dispatch(resetEarthClick())
    dispatch(resetMarsClick())
    dispatch(resetJupiterClick())
    dispatch(resetSaturnClick())
    dispatch(resetUranusClick())
    dispatch(resetNeptuneClick())
    dispatch(sunClick())
  };

  return (
    <>
      <Sphere 
        isHovered={isHovered}
        isSelected={isSelected}
        isChanged={isChanged}
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
        onClick={handleExpand}
      />
    </>
  )
}

export default Sun