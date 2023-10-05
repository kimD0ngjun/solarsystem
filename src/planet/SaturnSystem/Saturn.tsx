import styled, { css, keyframes } from "styled-components";
import RingFirst from "./RingFirst";
import RingSecond from "./RingSecond";
import RingThird from "./RingThird";
import Titan from "./Titan";
import Enceladus from "./Enceladus";
import { PlanetProps, MainOrbitProps } from "../../common/types";

import { expandWidth } from "../../redux/ChangeWidthSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { AppDispatch, RootState } from "../../redux/store";
import { resetPlanets, selectSaturn } from "../../redux/SelectedSlice"
import { hoverSaturn, leavePlanets } from "../../redux/HoveredSlice";
import { saturnClick } from "../../redux/contentClick/SaturnContentSlice";
import { resetSunClick } from "../../redux/contentClick/SunContentSlice";
import { resetMercuryClick } from "../../redux/contentClick/MercuryContentSlice";
import { resetVenusClick } from "../../redux/contentClick/VenusContentSlice";
import { resetEarthClick } from "../../redux/contentClick/EarthContentSlice";
import { resetMarsClick } from "../../redux/contentClick/MarsContentSlice";
import { resetJupiterClick } from "../../redux/contentClick/JupiterContentSlice";
import { resetUranusClick } from "../../redux/contentClick/UranusContentSlice";
import { resetNeptuneClick } from "../../redux/contentClick/NeptuneContentSlice";

const createOrbitKeyframes = (radianCount: number) => keyframes`
  from {
    transform: rotate(${360 * radianCount / 10759.2}deg);
  }
  to {
    transform: rotate(${360 * radianCount / 10759.2 + 360}deg);
  }
`;

const Saturn = styled.ul<MainOrbitProps>`
  list-style: none;
  position: absolute;
  width: 500rem;
  height: 500rem;
  border-radius: 50%;
  border-style: solid;
  border-color: transparent transparent transparent white ;
  border-width: 0.1rem 0.1rem 0;
  animation: ${({ speed, radianCount, isPaused }) => css`
    ${createOrbitKeyframes(radianCount)} ${1075.92 / speed}s linear infinite;
    animation-play-state: ${isPaused ? "paused" : "running"};
  `};
  z-index: 4;
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
    top: 67rem;
    left: 67rem;
    content: '';
    position: absolute;
    border-radius: 50%;
    width: 14rem;
    height: 13rem;
    background: radial-gradient(#a27131, #ad5c5c, #a27131, #ba8c8c, yellow);
  }
`

const SaturnSystem: React.FC<PlanetProps> = (props) => {
  const { speed, radianCount, isPaused } = props;
  const isHovered = useAppSelector((state: RootState) => state.hover.Saturn)
  const isSelected = useAppSelector((state: RootState) => state.select.Saturn)
  const handleHoverEnter = () => {
    dispatch(hoverSaturn())
  }
  const handleHoverLeave = () => {
    dispatch(leavePlanets())
  }

  const dispatch: AppDispatch = useAppDispatch();
  const isChanged = useAppSelector((state: RootState) => state.changeWidth.isChanged)
  const handleExpand = () => {
    dispatch(resetPlanets())
    dispatch(selectSaturn())
    dispatch(expandWidth())
    dispatch(resetSunClick())
    dispatch(resetMercuryClick())
    dispatch(resetVenusClick())
    dispatch(resetEarthClick())
    dispatch(resetMarsClick())
    dispatch(resetJupiterClick())
    dispatch(resetUranusClick())
    dispatch(resetNeptuneClick())
    dispatch(saturnClick())
  };

  return (
    <Saturn
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
      <RingFirst />
      <RingSecond />
      <RingThird />
      <Enceladus speed={speed} radianCount={radianCount} isPaused={isPaused} />
      <Titan speed={speed} radianCount={radianCount} isPaused={isPaused} />
    </Saturn>
  )
}

export default SaturnSystem