import styled, { css, keyframes } from "styled-components";
import Titania from "./Titania";
import { PlanetProps, MainOrbitProps } from "../../common/types";

import { expandWidth } from "../../redux/ChangeWidthSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { AppDispatch, RootState } from "../../redux/store";
import { resetPlanets, selectUranus } from "../../redux/SelectedSlice";
import { hoverUranus, leavePlanets } from "../../redux/HoveredSlice";
import { uranusClick } from "../../redux/contentClick/UranusContentSlice";
import { resetSunClick } from "../../redux/contentClick/SunContentSlice";
import { resetMercuryClick } from "../../redux/contentClick/MercuryContentSlice";
import { resetVenusClick } from "../../redux/contentClick/VenusContentSlice";
import { resetEarthClick } from "../../redux/contentClick/EarthContentSlice";
import { resetMarsClick } from "../../redux/contentClick/MarsContentSlice";
import { resetJupiterClick } from "../../redux/contentClick/JupiterContentSlice";
import { resetSaturnClick } from "../../redux/contentClick/SaturnContentSlice";
import { resetNeptuneClick } from "../../redux/contentClick/NeptuneContentSlice";

const createOrbitKeyframes = (radianCount: number) => keyframes`
  from {
    transform: rotate(${360 * radianCount / 30689}deg);
  }
  to {
    transform: rotate(${360 * radianCount / 30689 + 360}deg);
  }
`;

const Uranus = styled.ul<MainOrbitProps>`
  list-style: none;
  position: absolute;
  width: 655rem;
  height: 655rem;
  border-radius: 50%;
  border-style: solid;
  border-color: transparent transparent transparent white ;
  border-width: 0.1rem 0.1rem 0;
  animation: ${({ speed, radianCount, isPaused }) => css`
    ${createOrbitKeyframes(radianCount)} ${3068.9 / speed}s linear infinite;
    animation-play-state: ${isPaused ? "paused" : "running"};
  `};
  z-index: 3;
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
    top: 90rem;
    left: 90rem;
    content: '';
    position: absolute;
    border-radius: 50%;
    width: 13rem;
    height: 12rem;
    background: radial-gradient(aqua, white);
  }
`

const UranusSystem: React.FC<PlanetProps> = (props) => {
  const { speed, radianCount, isPaused } = props;
  const isHovered = useAppSelector((state: RootState) => state.hover.Uranus)
  const isSelected = useAppSelector((state: RootState) => state.select.Uranus)
  const handleHoverEnter = () => {
    dispatch(hoverUranus())
  }
  const handleHoverLeave = () => {
    dispatch(leavePlanets())
  }

  const dispatch: AppDispatch = useAppDispatch();
  const isChanged = useAppSelector((state: RootState) => state.changeWidth.isChanged)
  const handleExpand = () => {
    dispatch(resetPlanets())
    dispatch(selectUranus())
    dispatch(expandWidth())
    dispatch(resetSunClick())
    dispatch(resetMercuryClick())
    dispatch(resetVenusClick())
    dispatch(resetEarthClick())
    dispatch(resetMarsClick())
    dispatch(resetJupiterClick())
    dispatch(resetSaturnClick())
    dispatch(resetNeptuneClick())
    dispatch(uranusClick())
  };

  return (
    <Uranus
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
      <Titania speed={speed} radianCount={radianCount} isPaused={isPaused} />
    </Uranus>
  )
}

export default UranusSystem