import styled, { css, keyframes } from "styled-components";
import { PlanetProps, MainOrbitProps } from "../common/types";

import { expandWidth } from "../redux/ChangeWidthSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { AppDispatch, RootState } from "../redux/store";
import { resetPlanets, selectMercury } from "../redux/SelectedSlice";
import { hoverMercury, leavePlanets } from "../redux/HoveredSlice";
import { mercuryClick } from "../redux/contentClick/MercuryContentSlice";
import { resetSunClick } from "../redux/contentClick/SunContentSlice";
import { resetVenusClick } from "../redux/contentClick/VenusContentSlice";
import { resetEarthClick } from "../redux/contentClick/EarthContentSlice";
import { resetMarsClick } from "../redux/contentClick/MarsContentSlice";
import { resetJupiterClick } from "../redux/contentClick/JupiterContentSlice";
import { resetSaturnClick } from "../redux/contentClick/SaturnContentSlice";
import { resetUranusClick } from "../redux/contentClick/UranusContentSlice";
import { resetNeptuneClick } from "../redux/contentClick/NeptuneContentSlice";


const createOrbitKeyframes = (radianCount: number) => keyframes`
  from {
    transform: rotate(${360 * radianCount / 88}deg);
  }
  to {
    transform: rotate(${360 * radianCount / 88 + 360}deg);
  }
`;

const Sphere = styled.div<MainOrbitProps>`
  position: absolute;
  width: 51rem;
  height: 51rem;
  border-radius: 50%;
  border-style: solid;
  border-color: transparent transparent transparent white ;
  border-width: 0.1rem 0.1rem 0;
  animation: ${({ speed, radianCount, isPaused }) => css`
    ${createOrbitKeyframes(radianCount)} ${8.8 / speed}s linear infinite;
    animation-play-state: ${isPaused ? "paused" : "running"};
  `};
  z-index: 9;
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

  &::before {
    top: 5.2rem;
    left: 5.2rem;
    content: '';
    position: absolute;
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    background: radial-gradient(gray, #585858);
  }
`

const Mercury: React.FC<PlanetProps> = (props) => {
  const { speed, radianCount, isPaused } = props;
  const isHovered = useAppSelector((state: RootState) => state.hover.Mercury)
  const isSelected = useAppSelector((state: RootState) => state.select.Mercury)
  const handleHoverEnter = () => {
    dispatch(hoverMercury())
  }
  const handleHoverLeave = () => {
    dispatch(leavePlanets())
  }

  const dispatch: AppDispatch = useAppDispatch();
  const isChanged = useAppSelector((state: RootState) => state.changeWidth.isChanged)
  const handleExpand = () => {
    dispatch(resetPlanets())
    dispatch(selectMercury())
    dispatch(expandWidth())
    dispatch(resetSunClick())
    dispatch(resetVenusClick())
    dispatch(resetEarthClick())
    dispatch(resetMarsClick())
    dispatch(resetJupiterClick())
    dispatch(resetSaturnClick())
    dispatch(resetUranusClick())
    dispatch(resetNeptuneClick())
    dispatch(mercuryClick())
  };

  return (
    <>
      <Sphere
        speed={speed} 
        radianCount={radianCount} 
        isPaused={isPaused} 
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

export default Mercury