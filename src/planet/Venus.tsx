import styled, { css, keyframes } from "styled-components";
import { PlanetProps, MainOrbitProps } from "../common/types";

import { expandWidth } from "../redux/ChangeWidthSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { AppDispatch, RootState } from "../redux/store";
import { resetPlanets, selectVenus } from "../redux/SelectedSlice";
import { hoverVenus, leavePlanets } from "../redux/HoveredSlice";
import { venusClick } from "../redux/contentClick/VenusContentSlice";
import { resetSunClick } from "../redux/contentClick/SunContentSlice";
import { resetMercuryClick } from "../redux/contentClick/MercuryContentSlice";
import { resetEarthClick } from "../redux/contentClick/EarthContentSlice";
import { resetMarsClick } from "../redux/contentClick/MarsContentSlice";
import { resetJupiterClick } from "../redux/contentClick/JupiterContentSlice";
import { resetSaturnClick } from "../redux/contentClick/SaturnContentSlice";
import { resetUranusClick } from "../redux/contentClick/UranusContentSlice";
import { resetNeptuneClick } from "../redux/contentClick/NeptuneContentSlice";

const createOrbitKeyframes = (radianCount: number) => keyframes`
  from {
    transform: rotate(${(360 * radianCount) / 225}deg);
  }
  to {
    transform: rotate(${(360 * radianCount) / 225 + 360}deg);
  }
`;

const Sphere = styled.div<MainOrbitProps>`
  position: absolute;
  width: 77rem;
  height: 77rem;
  border-radius: 50%;
  border-style: solid;
  border-color: transparent transparent transparent white;
  border-width: 0.1rem 0.1rem 0;
  animation: ${({ speed, radianCount, isPaused }) => css`
    ${createOrbitKeyframes(radianCount)} ${22.5 / speed}s linear infinite;
    animation-play-state: ${isPaused ? "paused" : "running"};
  `};
  z-index: 8;
  box-shadow: ${({ isSelected, isChanged, isHovered }) =>
    isSelected && isChanged
      ? "0 0 20rem 0 violet, inset 0 0 20rem 0 violet"
      : isHovered
      ? "0 0 20rem 0 purple, inset 0 0 20rem 0 purple"
      : "none"};

  &:hover {
    cursor: pointer;
  }

  &:active {
    cursor: grab;
  }

  &::before {
    top: 8.2rem;
    left: 8.2rem;
    content: "";
    position: absolute;
    border-radius: 50%;
    width: 8rem;
    height: 8rem;
    background: radial-gradient(yellow, #6f3232be);
  }
`;

const Venus: React.FC<PlanetProps> = (props) => {
  const { speed, radianCount, isPaused } = props;
  const isHovered = useAppSelector((state: RootState) => state.hover.Venus);
  const isSelected = useAppSelector((state: RootState) => state.select.Venus);
  const handleHoverEnter = () => {
    dispatch(hoverVenus());
  };
  const handleHoverLeave = () => {
    dispatch(leavePlanets());
  };

  const dispatch: AppDispatch = useAppDispatch();
  const isChanged = useAppSelector(
    (state: RootState) => state.changeWidth.isChanged
  );
  const handleExpand = () => {
    dispatch(resetPlanets());
    dispatch(selectVenus());
    dispatch(expandWidth());
    dispatch(resetSunClick());
    dispatch(resetMercuryClick());
    dispatch(resetEarthClick());
    dispatch(resetMarsClick());
    dispatch(resetJupiterClick());
    dispatch(resetSaturnClick());
    dispatch(resetUranusClick());
    dispatch(resetNeptuneClick());
    dispatch(venusClick());
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
  );
};

export default Venus;
