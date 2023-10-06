import styled, { css, keyframes } from "styled-components";
import mars from "../../../../../public/assets/PlanetImg/Mars.svg";
import phobos from "../../../../../public/assets/PlanetImg/Phobos.svg";
import deimos from "../../../../../public/assets/PlanetImg/Deimos.svg";
import { PlanetProps } from "../../../../common/types";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { AppDispatch, RootState } from "../../../../redux/store";
import { marsClick, phobosClick, deimosClick } from "../../../../redux/contentClick/MarsContentSlice";

interface ClickMars {
  clickMars: boolean;
}

interface ClcikPhobos {
  clickPhobos: boolean;
}

interface ClcikDeimos {
  clickDeimos: boolean;
}

const MarsItem = styled.img<ClickMars>`
  width: 15%;
  height: 15%;
  /* border: 1px solid white; */
  border-radius: 50%;
  z-index: 4;
  box-shadow: ${({ clickMars }) => clickMars ? '0 0 30rem 0 violet, inset 0 0 20rem 0 violet' : null};

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 20rem 0 purple;
  }

  &:active {
    cursor: grab;
    box-shadow: 0 0 20rem 0 violet;
  }
`

const createPhobosOrbitKeyframes = (radianCount: number) => keyframes`
  from {
    transform: rotate(${360 * radianCount / 15}deg);
  }
  to {
    transform: rotate(${360 * radianCount / 15 + 360}deg);
  }
`;

const PhobosOrbit = styled.div<PlanetProps>`
  border-radius: 50%;
  position: absolute;
  width: 115px;
  height: 115px;
  border-style: solid;
  border-color: transparent transparent transparent #c6c6c6;
  border-width: 0.1rem 0.1rem 0;
  animation: ${({ speed, radianCount, isPaused }) => css`
    ${createPhobosOrbitKeyframes(radianCount)} ${1.5 / speed}s linear infinite;
    animation-play-state: ${isPaused ? "paused" : "running"};
  `};
  z-index: 2;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 20rem 0 purple, inset 0 0 20rem 0 purple;
  }

  &:active {
    cursor: grab;
    box-shadow: 0 0 20rem 0 violet, inset 0 0 20rem 0 violet;
  }
`

const PhobosItem = styled.img<ClcikPhobos>`
  top: 8rem;
  left: 8rem;
  width: 17%;
  height: 17%;
  border-radius: 50%;
  position: absolute;
  z-index: 2;
  box-shadow: ${({ clickPhobos }) => clickPhobos ? '0 0 30rem 0 violet, inset 0 0 30rem 0 violet' : null};
`

const createDeimosOrbitKeyframes = (radianCount: number) => keyframes`
  from {
    transform: rotate(${360 * radianCount / 45}deg);
  }
  to {
    transform: rotate(${360 * radianCount / 45 + 360}deg);
  }
`;

const DeimosOrbit = styled.div<PlanetProps>`
  border-radius: 50%;
  position: absolute;
  width: 200px;
  height: 200px;
  border-style: solid;
  border-color: transparent transparent transparent #c6c6c6;
  border-width: 0.1rem 0.1rem 0;
  animation: ${({ speed, radianCount, isPaused }) => css`
    ${createDeimosOrbitKeyframes(radianCount)} ${4.5 / speed}s linear infinite;
    animation-play-state: ${isPaused ? "paused" : "running"};
  `};
  z-index: 1;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 20rem 0 purple, inset 0 0 20rem 0 purple;
  }

  &:active {
    cursor: grab;
    box-shadow: 0 0 20rem 0 violet, inset 0 0 20rem 0 violet;
  }
`

const DeimosItem = styled.img<ClcikDeimos>`
  top: 12.5rem;
  left: 12.5rem;
  width: 13%;
  height: 13%;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  box-shadow: ${({ clickDeimos }) => clickDeimos ? '0 0 30rem 0 violet, inset 0 0 10rem 0 violet' : null};
`

const MarsContent: React.FC<PlanetProps> = (props) => {
  const { speed, radianCount, isPaused } = props;
  const dispatch: AppDispatch = useAppDispatch();
  const clickMars = useAppSelector((state: RootState) => state.marsContent.Mars);
  const clickPhobos = useAppSelector((state: RootState) => state.marsContent.Phobos);
  const clickDeimos = useAppSelector((state: RootState) => state.marsContent.Deimos);

  const handleClickMars = () => {
    dispatch(marsClick());
  }

  const handleClickPhobos = () => {
    dispatch(phobosClick());
  }

  const handleClickDeimos = () => {
    dispatch(deimosClick());
  }

  return (
    <>
      <MarsItem src={mars} alt="Mars" clickMars={clickMars} onClick={handleClickMars}/>
      <PhobosOrbit 
        speed={speed} 
        isPaused={isPaused} 
        radianCount={radianCount}
        onClick={handleClickPhobos}  
      >
        <PhobosItem src={phobos} alt="phobos" clickPhobos={clickPhobos}/>
      </PhobosOrbit>
      <DeimosOrbit 
        speed={speed} 
        isPaused={isPaused} 
        radianCount={radianCount}
        onClick={handleClickDeimos}  
      >
        <DeimosItem src={deimos} alt="deimos" clickDeimos={clickDeimos}/>
      </DeimosOrbit>
    </>
  )
}

export default MarsContent
