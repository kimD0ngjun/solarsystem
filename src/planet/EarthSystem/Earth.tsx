import styled, { css, keyframes } from "styled-components";
import Moon from "./Moon";
import { PlanetProps, MainOrbitProps } from "../../common/types";

import { expandWidth } from "../../redux/ChangeWidthSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { AppDispatch, RootState } from "../../redux/store";
import { resetPlanets, selectEarth } from "../../redux/SelectedSlice";
import { hoverEarth, leavePlanets } from "../../redux/HoveredSlice";
import { earthClick } from "../../redux/contentClick/EarthContentSlice";
import { resetSunClick } from "../../redux/contentClick/SunContentSlice";
import { resetMercuryClick } from "../../redux/contentClick/MercuryContentSlice";
import { resetVenusClick } from "../../redux/contentClick/VenusContentSlice";
import { resetMarsClick } from "../../redux/contentClick/MarsContentSlice";
import { resetJupiterClick } from "../../redux/contentClick/JupiterContentSlice";
import { resetSaturnClick } from "../../redux/contentClick/SaturnContentSlice";
import { resetUranusClick } from "../../redux/contentClick/UranusContentSlice";
import { resetNeptuneClick } from "../../redux/contentClick/NeptuneContentSlice";


const createOrbitKeyframes = (radianCount: number) => keyframes`
  from {
    transform: rotate(${360 * radianCount / 365}deg);
  }
  to {
    transform: rotate(${360 * radianCount / 365 + 360}deg);
  }
`;
// 다른 행성에서 적용할 때, 365(지구 공전일 즉, 36.5s * 10)를 각 행성의 설정한 공전 주기일로 치환

const Earth = styled.ul<MainOrbitProps>`
  list-style: none;
  position: absolute;
  width: 160rem;
  height: 160rem;
  border-radius: 50%;
  border-style: solid;
  border-color: transparent transparent transparent white ;
  border-width: 0.1rem 0.1rem 0;
  animation: ${({ speed, radianCount, isPaused }) => css`
    ${createOrbitKeyframes(radianCount)} ${36.5 / speed}s linear infinite;
    animation-play-state: ${isPaused ? "paused" : "running"};
  `};
  z-index: 7;
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
    top: 19rem;
    left: 19rem;
    content: '';
    position: absolute;
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    background: radial-gradient(green, green, #001780, #2929ff, skyblue, #89ccf0);
  }
`;

const EarthSystem: React.FC<PlanetProps> = (props) => {
  const { speed, radianCount, isPaused } = props;
  const isHovered = useAppSelector((state: RootState) => state.hover.Earth)
  const isSelected = useAppSelector((state: RootState) => state.select.Earth)
  const handleHoverEnter = () => {
    dispatch(hoverEarth())
  }
  const handleHoverLeave = () => {
    dispatch(leavePlanets())
  }

  const dispatch: AppDispatch = useAppDispatch();
  const isChanged = useAppSelector((state: RootState) => state.changeWidth.isChanged)
  const handleExpand = () => {
    dispatch(resetPlanets())
    dispatch(selectEarth())
    dispatch(expandWidth())
    dispatch(resetSunClick())
    dispatch(resetMercuryClick())
    dispatch(resetVenusClick())
    dispatch(resetMarsClick())
    dispatch(resetJupiterClick())
    dispatch(resetSaturnClick())
    dispatch(resetUranusClick())
    dispatch(resetNeptuneClick())
    dispatch(earthClick());
  };

  return (
    <>
    <Earth 
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
      <Moon speed={speed} radianCount={radianCount} isPaused={isPaused}/>
    </Earth>
    </>
  );
};

export default EarthSystem;
