import styled, { css, keyframes } from "styled-components";
// import earth from "../../../../../public/assets/PlanetImg/Earth.svg";
// import moon from "../../../../../public/assets/PlanetImg/Moon.svg";
import { PlanetProps } from "../../../../common/types";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { AppDispatch, RootState } from "../../../../redux/store";
import { earthClick, moonClick } from "../../../../redux/contentClick/EarthContentSlice";

interface ClickEarth {
  clickEarth: boolean;
}

interface ClcikMoon {
  clickMoon: boolean;
}

const EarthItem = styled.img<ClickEarth>`
  width: 15%;
  height: 15%;
  /* border: 1px solid white; */
  border-radius: 50%;
  z-index: 3;
  box-shadow: ${({ clickEarth }) => clickEarth ? '0 0 20rem 0 violet, inset 0 0 5rem 0 violet' : null};

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 20rem 0 purple;
  }

  &:active {
    cursor: grab;
    box-shadow: 0 0 20rem 0 violet;
  }
`

const createOrbitKeyframes = (radianCount: number) => keyframes`
  from {
    transform: rotate(${360 * radianCount / 27}deg);
  }
  to {
    transform: rotate(${360 * radianCount / 27 + 360}deg);
  }
`;

const MoonOrbit = styled.div<PlanetProps>`
  border-radius: 50%;
  position: absolute;
  width: 150px;
  height: 150px;
  border-style: solid;
  border-color: transparent transparent transparent #c6c6c6;
  border-width: 0.1rem 0.1rem 0;
  animation: ${({ speed, radianCount, isPaused }) => css`
    ${createOrbitKeyframes(radianCount)} ${2.7 / speed}s linear infinite;
    animation-play-state: ${isPaused ? "paused" : "running"};
  `};

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 20rem 0 purple, inset 0 0 20rem 0 purple;
  }

  &:active {
    cursor: grab;
    box-shadow: 0 0 20rem 0 violet, inset 0 0 20rem 0 violet;
  }
`

const MoonItem = styled.img<ClcikMoon>`
  top: 9.5rem;
  left: 9.5rem;
  width: 17%;
  height: 17%;
  border-radius: 50%;
  position: absolute;
  z-index: 2;
  box-shadow: ${({ clickMoon }) => clickMoon ? '0 0 10rem 0 violet, inset 0 0 10rem 0 violet' : null};
`

const EarthContent: React.FC<PlanetProps> = (props) => {
  const { speed, radianCount, isPaused } = props;
  const dispatch: AppDispatch = useAppDispatch();
  const clickEarth = useAppSelector((state: RootState) => state.earthContent.Earth);
  const clickMoon = useAppSelector((state: RootState) => state.earthContent.Moon);

  const handleClickEarth = () => {
    dispatch(earthClick());
  }

  const handleClickMoon = () => {
    dispatch(moonClick())
  }

  return (
    <>
      <EarthItem src="/assets/PlanetImg/Earth.svg" alt="Earth" clickEarth={clickEarth} onClick={handleClickEarth}/>
      <MoonOrbit 
        speed={speed} 
        isPaused={isPaused} 
        radianCount={radianCount}
        onClick={handleClickMoon}  
      >
        <MoonItem src="//assets/PlanetImg/Moon.svg" alt="moon" clickMoon={clickMoon}/>
      </MoonOrbit>
    </>
  )
}

export default EarthContent
