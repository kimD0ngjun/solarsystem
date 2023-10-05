import styled, { css, keyframes } from "styled-components";
import Triton from "./Triton";
import { PlanetProps, MainOrbitProps } from "../../common/types";

import { expandWidth } from "../../redux/ChangeWidthSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { AppDispatch, RootState } from "../../redux/store";
import { resetPlanets, selectNeptune } from "../../redux/SelectedSlice";
import { hoverNeptune, leavePlanets } from "../../redux/HoveredSlice";
import { neptuneClick } from "../../redux/contentClick/NeptuneContentSlice";
import { resetSunClick } from "../../redux/contentClick/SunContentSlice";
import { resetMercuryClick } from "../../redux/contentClick/MercuryContentSlice";
import { resetVenusClick } from "../../redux/contentClick/VenusContentSlice";
import { resetEarthClick } from "../../redux/contentClick/EarthContentSlice";
import { resetMarsClick } from "../../redux/contentClick/MarsContentSlice";
import { resetJupiterClick } from "../../redux/contentClick/JupiterContentSlice";
import { resetSaturnClick } from "../../redux/contentClick/SaturnContentSlice";
import { resetUranusClick } from "../../redux/contentClick/UranusContentSlice";

const createOrbitKeyframes = (radianCount: number) => keyframes`
  from {
    transform: rotate(${360 * radianCount / 60182}deg);
  }
  to {
    transform: rotate(${360 * radianCount / 60182 + 360}deg);
  }
`;

const Neptune = styled.ul<MainOrbitProps>`
  list-style: none;
  position: absolute;
  width: 825rem;
  height: 825rem;
  border-radius: 50%;
  border-style: solid;
  border-color: transparent transparent transparent white ;
  border-width: 0.1rem 0.1rem 0;
  animation: ${({ speed, radianCount, isPaused }) => css`
    ${createOrbitKeyframes(radianCount)} ${6018.2 / speed}s linear infinite;
    animation-play-state: ${isPaused ? "paused" : "running"};
  `};
  z-index: 2;
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
    top: 115rem;
    left: 115rem;
    content: '';
    position: absolute;
    border-radius: 50%;
    width: 11rem;
    height: 11rem;
    background: radial-gradient(blue, #3131ec);
  }
`

const NeptuneSystem: React.FC<PlanetProps> = (props) => {
  const { speed, radianCount, isPaused } = props;
  const isHovered = useAppSelector((state: RootState) => state.hover.Neptune)
  const isSelected = useAppSelector((state: RootState) => state.select.Neptune)
  const handleHoverEnter = () => {
    dispatch(hoverNeptune())
  }
  const handleHoverLeave = () => {
    dispatch(leavePlanets())
  }

  const dispatch: AppDispatch = useAppDispatch();
  const isChanged = useAppSelector((state: RootState) => state.changeWidth.isChanged)
  const handleExpand = () => {
    dispatch(resetPlanets())
    dispatch(selectNeptune())
    dispatch(expandWidth())
    dispatch(resetSunClick())
    dispatch(resetMercuryClick())
    dispatch(resetVenusClick())
    dispatch(resetEarthClick())
    dispatch(resetMarsClick())
    dispatch(resetJupiterClick())
    dispatch(resetSaturnClick())
    dispatch(resetUranusClick())
    dispatch(neptuneClick())
  };

  return (
    <>
      <Neptune
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
        <Triton speed={speed} radianCount={radianCount} isPaused={isPaused} />
      </Neptune>
    </>
  )
}

export default NeptuneSystem;