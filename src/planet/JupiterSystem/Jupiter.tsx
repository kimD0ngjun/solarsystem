import styled, { css, keyframes } from "styled-components";
import Callisto from "./Callisto";
import Ganymede from "./Ganymede";
import Europa from "./Europa";
import Io from "./Io";
import { PlanetProps, MainOrbitProps } from "../../common/types";

import { expandWidth } from "../../redux/ChangeWidthSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { AppDispatch, RootState } from "../../redux/store";
import { resetPlanets, selectJupiter } from "../../redux/SelectedSlice";
import { hoverJupiter, leavePlanets } from "../../redux/HoveredSlice";
import { jupiterClick } from "../../redux/contentClick/JupiterContentSlice";
import { resetSunClick } from "../../redux/contentClick/SunContentSlice";
import { resetMercuryClick } from "../../redux/contentClick/MercuryContentSlice";
import { resetVenusClick } from "../../redux/contentClick/VenusContentSlice";
import { resetEarthClick } from "../../redux/contentClick/EarthContentSlice";
import { resetMarsClick } from "../../redux/contentClick/MarsContentSlice";
import { resetSaturnClick } from "../../redux/contentClick/SaturnContentSlice";
import { resetUranusClick } from "../../redux/contentClick/UranusContentSlice";
import { resetNeptuneClick } from "../../redux/contentClick/NeptuneContentSlice";

const createOrbitKeyframes = (radianCount: number) => keyframes`
  from {
    transform: rotate(${360 * radianCount / 4332.6}deg);
  }
  to {
    transform: rotate(${360 * radianCount / 4332.6 + 360}deg);
  }
`;

const Jupiter = styled.ul<MainOrbitProps>`
  list-style: none;
  position: absolute;
  width: 340rem;
  height: 340rem;
  border-radius: 50%;
  border-style: solid;
  border-color: transparent transparent transparent white ;
  border-width: 0.1rem 0.1rem 0;
  animation: ${({ speed, radianCount, isPaused }) => css`
    ${createOrbitKeyframes(radianCount)} ${433.26 / speed}s linear infinite;
    animation-play-state: ${isPaused ? "paused" : "running"};
  `};
  z-index: 5;
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
    top: 42rem;
    left: 42rem;
    content: '';
    position: absolute;
    border-radius: 50%;
    width: 15.7rem;
    height: 15.7rem;
    background: radial-gradient(#316da2, #a27131, #ba8c8c, #833e3e, #ba8c8c);
  }
`

const JupiterSystem: React.FC<PlanetProps> = (props) => {
  const { speed, radianCount, isPaused } = props;
  const isHovered = useAppSelector((state: RootState) => state.hover.Jupiter)
  const isSelected = useAppSelector((state: RootState) => state.select.Jupiter)
  const handleHoverEnter = () => {
    dispatch(hoverJupiter())
  }
  const handleHoverLeave = () => {
    dispatch(leavePlanets())
  }

  const dispatch: AppDispatch = useAppDispatch();
  const isChanged = useAppSelector((state: RootState) => state.changeWidth.isChanged)
  const handleExpand = () => {
    dispatch(resetPlanets())
    dispatch(selectJupiter())
    dispatch(expandWidth());
    dispatch(resetSunClick())
    dispatch(resetMercuryClick())
    dispatch(resetVenusClick())
    dispatch(resetEarthClick())
    dispatch(resetMarsClick())
    dispatch(resetSaturnClick())
    dispatch(resetUranusClick())
    dispatch(resetNeptuneClick())
    dispatch(jupiterClick());
  };

  return (
    <Jupiter 
      speed={speed} 
      radianCount={radianCount} 
      isPaused={isPaused} 
      isHovered={isHovered}
      isSelected={isSelected}
      isChanged={isChanged}
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
      onClick={handleExpand}
    >
      <Io speed={speed} radianCount={radianCount} isPaused={isPaused} />
      <Europa speed={speed} radianCount={radianCount} isPaused={isPaused} />
      <Ganymede speed={speed} radianCount={radianCount} isPaused={isPaused} />
      <Callisto speed={speed} radianCount={radianCount} isPaused={isPaused} />  
    </Jupiter>
  )
}

export default JupiterSystem