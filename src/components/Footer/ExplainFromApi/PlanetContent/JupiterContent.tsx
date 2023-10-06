import styled, { css, keyframes } from "styled-components";
// import jupiter from "../../../../../public/assets/PlanetImg/Jupiter.svg";
// import io from "../../../../../public/assets/PlanetImg/Io.svg";
// import europa from "../../../../../public/assets/PlanetImg/Europa.svg";
// import ganymede from "../../../../../public/assets/PlanetImg/Ganymede.svg";
// import callisto from "../../../../../public/assets/PlanetImg/Callisto.svg";
import { PlanetProps } from "../../../../common/types";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { AppDispatch, RootState } from "../../../../redux/store";
import { 
  jupiterClick,
  ioClick, 
  europaClick, 
  ganymadeClick, 
  callistoClick 
} from "../../../../redux/contentClick/JupiterContentSlice";

interface ClickJupiter {
  clickJupiter: boolean;
}

interface ClcikIo {
  clickIo: boolean;
}

interface ClcikEuropa {
  clickEuropa: boolean;
}

interface ClcikGanymede {
  clickGanymede: boolean;
}

interface ClcikCallisto {
  clickCallisto: boolean;
}

const JupiterItem = styled.img<ClickJupiter>`
  width: 19%;
  height: 19%;
  /* border: 1px solid white; */
  border-radius: 50%;
  z-index: 5;
  box-shadow: ${({ clickJupiter }) => clickJupiter ? '0 0 30rem 0 violet, inset 0 0 20rem 0 violet' : null};

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 20rem 0 purple;
  }

  &:active {
    cursor: grab;
    box-shadow: 0 0 20rem 0 violet;
  }
`

// 이오

const createIoOrbitKeyframes = (radianCount: number) => keyframes`
  from {
    transform: rotate(${360 * radianCount / 18}deg);
  }
  to {
    transform: rotate(${360 * radianCount / 18 + 360}deg);
  }
`;

const IoOrbit = styled.div<PlanetProps>`
  border-radius: 50%;
  position: absolute;
  width: 115px;
  height: 115px;
  border-style: solid;
  border-color: transparent transparent transparent #c6c6c6;
  border-width: 0.1rem 0.1rem 0;
  animation: ${({ speed, radianCount, isPaused }) => css`
    ${createIoOrbitKeyframes(radianCount)} ${1.8 / speed}s linear infinite;
    animation-play-state: ${isPaused ? "paused" : "running"};
  `};
  z-index: 4;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 20rem 0 purple, inset 0 0 20rem 0 purple;
  }

  &:active {
    cursor: grab;
    box-shadow: 0 0 20rem 0 violet, inset 0 0 20rem 0 violet;
  }
`

const IoItem = styled.img<ClcikIo>`
  top: 8rem;
  left: 8rem;
  width: 17%;
  height: 17%;
  border-radius: 50%;
  position: absolute;
  z-index: 4;
  box-shadow: ${({ clickIo }) => clickIo ? '0 0 30rem 0 violet' : null};
  border: ${({ clickIo }) => clickIo ? '1.5px solid violet' : null};
`

// 유로파

const createEuropaOrbitKeyframes = (radianCount: number) => keyframes`
  from {
    transform: rotate(${360 * radianCount / 35.5}deg);
  }
  to {
    transform: rotate(${360 * radianCount / 35.5 + 360}deg);
  }
`;

const EuropaOrbit = styled.div<PlanetProps>`
  border-radius: 50%;
  position: absolute;
  width: 170px;
  height: 170px;
  border-style: solid;
  border-color: transparent transparent transparent #c6c6c6;
  border-width: 0.1rem 0.1rem 0;
  animation: ${({ speed, radianCount, isPaused }) => css`
    ${createEuropaOrbitKeyframes(radianCount)} ${3.55 / speed}s linear infinite;
    animation-play-state: ${isPaused ? "paused" : "running"};
  `};
  z-index: 3;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 20rem 0 purple, inset 0 0 20rem 0 purple;
  }

  &:active {
    cursor: grab;
    box-shadow: 0 0 20rem 0 violet, inset 0 0 20rem 0 violet;
  }
`

const EuropaItem = styled.img<ClcikEuropa>`
  top: 12.5rem;
  left: 12.5rem;
  width: 13%;
  height: 13%;
  border-radius: 50%;
  position: absolute;
  z-index: 3;
  box-shadow: ${({ clickEuropa }) => clickEuropa ? '0 0 30rem 0 violet, inset 0 0 10rem 0 violet' : null};
  border: ${({ clickEuropa }) => clickEuropa ? '1.5px solid violet' : null};
`

// 가니메데

const createGanymedeOrbitKeyframes = (radianCount: number) => keyframes`
  from {
    transform: rotate(${360 * radianCount / 71.5}deg);
  }
  to {
    transform: rotate(${360 * radianCount / 71.5 + 360}deg);
  }
`;

const GanymedeOrbit = styled.div<PlanetProps>`
  border-radius: 50%;
  position: absolute;
  width: 230px;
  height: 230px;
  border-style: solid;
  border-color: transparent transparent transparent #c6c6c6;
  border-width: 0.1rem 0.1rem 0;
  animation: ${({ speed, radianCount, isPaused }) => css`
    ${createGanymedeOrbitKeyframes(radianCount)} ${7.15 / speed}s linear infinite;
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

const GanymedeItem = styled.img<ClcikGanymede>`
  top: 25.5rem;
  left: 25.5rem;
  width: 10%;
  height: 10%;
  border-radius: 50%;
  position: absolute;
  z-index: 2;
  box-shadow: ${({ clickGanymede }) => clickGanymede ? '0 0 30rem 0 violet, inset 0 0 10rem 0 violet' : null};
  border: ${({ clickGanymede }) => clickGanymede ? '1.5px solid violet' : null};
`

// 칼리스토 

const createCallistoOrbitKeyframes = (radianCount: number) => keyframes`
  from {
    transform: rotate(${360 * radianCount / 167}deg);
  }
  to {
    transform: rotate(${360 * radianCount / 167 + 360}deg);
  }
`;

const CallistoOrbit = styled.div<PlanetProps>`
  border-radius: 50%;
  position: absolute;
  width: 290px;
  height: 290px;
  border-style: solid;
  border-color: transparent transparent transparent #c6c6c6;
  border-width: 0.1rem 0.1rem 0;
  animation: ${({ speed, radianCount, isPaused }) => css`
    ${createCallistoOrbitKeyframes(radianCount)} ${16.7 / speed}s linear infinite;
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

const CallistoItem = styled.img<ClcikCallisto>`
  top: 31.5rem;
  left: 31.5rem;
  width: 8%;
  height: 8%;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  box-shadow: ${({ clickCallisto }) => clickCallisto ? '0 0 30rem 0 violet, inset 0 0 10rem 0 violet' : null};
  border: ${({ clickCallisto }) => clickCallisto ? '1.5px solid violet' : null};
`

const JupiterContent: React.FC<PlanetProps> = (props) => {
  const { speed, radianCount, isPaused } = props;
  const dispatch: AppDispatch = useAppDispatch();
  const clickJupiter = useAppSelector((state: RootState) => state.jupiterContent.Jupiter);
  const clickIo = useAppSelector((state: RootState) => state.jupiterContent.Io);
  const clickEuropa = useAppSelector((state: RootState) => state.jupiterContent.Europa);
  const clickGanymede = useAppSelector((state: RootState) => state.jupiterContent.Ganymede);
  const clickCallisto = useAppSelector((state: RootState) => state.jupiterContent.Callisto);

  const handleClickJupiter = () => {
    dispatch(jupiterClick());
  }

  const handleClickIo = () => {
    dispatch(ioClick());
  }

  const handleClickEuropa = () => {
    dispatch(europaClick());
  }

  const handleClickGanymede = () => {
    dispatch(ganymadeClick());
  }

  const handleClickCallisto = () => {
    dispatch(callistoClick());
  }

  return (
    <>
      <JupiterItem src="../../../../../public/assets/PlanetImg/Jupiter.svg" alt="Jupiter" clickJupiter={clickJupiter} onClick={handleClickJupiter}/>
      <IoOrbit 
        speed={speed} 
        isPaused={isPaused} 
        radianCount={radianCount}
        onClick={handleClickIo}  
      >
        <IoItem src="../../../../../public/assets/PlanetImg/Io.svg" alt="Io" clickIo={clickIo}/>
      </IoOrbit>
      <EuropaOrbit 
        speed={speed} 
        isPaused={isPaused} 
        radianCount={radianCount}
        onClick={handleClickEuropa}  
      >
        <EuropaItem src="../../../../../public/assets/PlanetImg/Europa.svg" alt="europa" clickEuropa={clickEuropa}/>
      </EuropaOrbit>
      <GanymedeOrbit 
        speed={speed} 
        isPaused={isPaused} 
        radianCount={radianCount}
        onClick={handleClickGanymede}  
      >
        <GanymedeItem src="../../../../../public/assets/PlanetImg/Ganymede.svg" alt="ganymede" clickGanymede={clickGanymede}/>
      </GanymedeOrbit>
      <CallistoOrbit 
        speed={speed} 
        isPaused={isPaused} 
        radianCount={radianCount}
        onClick={handleClickCallisto}  
      >
        <CallistoItem src="../../../../../public/assets/PlanetImg/Callisto.svg" alt="callisto" clickCallisto={clickCallisto}/>
      </CallistoOrbit>
    </>
  )
}

export default JupiterContent
