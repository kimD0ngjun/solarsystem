import styled, { css, keyframes } from "styled-components";
import Deimos from "./Deimos";
import Phobos from "./Phobos";
import { PlanetProps, MainOrbitProps } from "../../common/types";

import { expandWidth } from "../../redux/ChangeWidthSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { AppDispatch, RootState } from "../../redux/store";
import { resetPlanets, selectMars } from "../../redux/SelectedSlice";
import { hoverMars, leavePlanets } from "../../redux/HoveredSlice";
import { marsClick } from "../../redux/contentClick/MarsContentSlice";
import { resetSunClick } from "../../redux/contentClick/SunContentSlice";
import { resetMercuryClick } from "../../redux/contentClick/MercuryContentSlice";
import { resetVenusClick } from "../../redux/contentClick/VenusContentSlice";
import { resetEarthClick } from "../../redux/contentClick/EarthContentSlice";
import { resetJupiterClick } from "../../redux/contentClick/JupiterContentSlice";
import { resetSaturnClick } from "../../redux/contentClick/SaturnContentSlice";
import { resetUranusClick } from "../../redux/contentClick/UranusContentSlice";
import { resetNeptuneClick } from "../../redux/contentClick/NeptuneContentSlice";

const createOrbitKeyframes = (radianCount: number) => keyframes`
  from {
    transform: rotate(${360 * radianCount / 687}deg);
  }
  to {
    transform: rotate(${360 * radianCount / 687 + 360}deg);
  }
`;

const Mars = styled.ul<MainOrbitProps>`
  list-style: none;
  position: absolute;
  width: 225rem;
  height: 225rem;
  border-radius: 50%;
  border-style: solid;
  border-color: transparent transparent transparent white ;
  border-width: 0.1rem 0.1rem 0;
  animation: ${({ speed, radianCount, isPaused }) => css`
    ${createOrbitKeyframes(radianCount)} ${68.7 / speed}s linear infinite;
    animation-play-state: ${isPaused ? "paused" : "running"};
  `};
  z-index: 6;
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
    top: 29rem;
    left: 29rem;
    content: '';
    position: absolute;
    border-radius: 50%;
    width: 8rem;
    height: 8rem;
    background: radial-gradient(#bd3232, #904040, #450000);
  }
`

const MarsSystem: React.FC<PlanetProps> = (props) => {
  const { speed, radianCount, isPaused } = props;
  const isHovered = useAppSelector((state: RootState) => state.hover.Mars)
  const isSelected = useAppSelector((state: RootState) => state.select.Mars)
  const handleHoverEnter = () => {
    dispatch(hoverMars())
  }
  const handleHoverLeave = () => {
    dispatch(leavePlanets())
  }

  const dispatch: AppDispatch = useAppDispatch();
  const isChanged = useAppSelector((state: RootState) => state.changeWidth.isChanged)
  const handleExpand = () => {
    dispatch(resetPlanets())
    dispatch(selectMars())
    dispatch(expandWidth())
    dispatch(resetSunClick())
    dispatch(resetMercuryClick())
    dispatch(resetVenusClick())
    dispatch(resetEarthClick())
    dispatch(resetJupiterClick())
    dispatch(resetSaturnClick())
    dispatch(resetUranusClick())
    dispatch(resetNeptuneClick())
    dispatch(marsClick())
  };

  return (
    <Mars 
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
      <Deimos speed={speed} radianCount={radianCount} isPaused={isPaused} />
      <Phobos speed={speed} radianCount={radianCount} isPaused={isPaused} />
    </Mars>
  )
}

export default MarsSystem