import styled, { css, keyframes } from "styled-components";
import saturn from "../../../../../public/assets/PlanetImg/Saturn.svg";
import enceladus from "../../../../../public/assets/PlanetImg/Enceladus.svg";
import titan from "../../../../../public/assets/PlanetImg/titan.svg";
import { PlanetProps } from "../../../../common/types";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { AppDispatch, RootState } from "../../../../redux/store";
import { saturnClick, enceladusClick, titanClick } from "../../../../redux/contentClick/SaturnContentSlice";

interface ClickSaturn {
  clickSaturn: boolean;
}

interface ClcikEnceladus {
  clickEnceladus: boolean;
}

interface ClcikTitan {
  clickTitan: boolean;
}

const SaturnItem = styled.img<ClickSaturn>`
  width: 26%;
  height: 26%;
  /* border: 1px solid white; */
  border-radius: 50%;
  z-index: 4;
  box-shadow: ${({ clickSaturn }) => clickSaturn ? '0 0 30rem 0 violet, inset 0 0 20rem 0 violet' : null};

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 20rem 0 purple;
  }

  &:active {
    cursor: grab;
    box-shadow: 0 0 20rem 0 violet;
  }
`

const createEnceladusOrbitKeyframes = (radianCount: number) => keyframes`
  from {
    transform: rotate(${360 * radianCount / 15}deg);
  }
  to {
    transform: rotate(${360 * radianCount / 15 + 360}deg);
  }
`;

const EnceladusOrbit = styled.div<PlanetProps>`
  border-radius: 50%;
  position: absolute;
  width: 160px;
  height: 160px;
  border-style: solid;
  border-color: transparent transparent transparent #c6c6c6;
  border-width: 0.1rem 0.1rem 0;
  animation: ${({ speed, radianCount, isPaused }) => css`
    ${createEnceladusOrbitKeyframes(radianCount)} ${1.5 / speed}s linear infinite;
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

const EnceladusItem = styled.img<ClcikEnceladus>`
  top: 14.5rem;
  left: 14.5rem;
  width: 12%;
  height: 12%;
  border-radius: 50%;
  position: absolute;
  z-index: 2;
  box-shadow: ${({ clickEnceladus }) => clickEnceladus ? '0 0 30rem 0 violet, inset 0 0 30rem 0 violet' : null};
  border: ${({ clickEnceladus }) => clickEnceladus ? '3px solid violet' : null};
`

const createTitanOrbitKeyframes = (radianCount: number) => keyframes`
  from {
    transform: rotate(${360 * radianCount / 45}deg);
  }
  to {
    transform: rotate(${360 * radianCount / 45 + 360}deg);
  }
`;

const TitanOrbit = styled.div<PlanetProps>`
  border-radius: 50%;
  position: absolute;
  width: 290px;
  height: 290px;
  border-style: solid;
  border-color: transparent transparent transparent #c6c6c6;
  border-width: 0.1rem 0.1rem 0;
  animation: ${({ speed, radianCount, isPaused }) => css`
    ${createTitanOrbitKeyframes(radianCount)} ${4.5 / speed}s linear infinite;
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

const TitanItem = styled.img<ClcikTitan>`
  top: 28.6rem;
  left: 28.6rem;
  width: 9%;
  height: 9%;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  box-shadow: ${({ clickTitan }) => clickTitan ? '0 0 30rem 0 violet, inset 0 0 10rem 0 violet' : null};
  border: ${({ clickTitan }) => clickTitan ? '3px solid violet' : null};
`

const SaturnContent: React.FC<PlanetProps> = (props) => {
  const { speed, radianCount, isPaused } = props;
  const dispatch: AppDispatch = useAppDispatch();
  const clickSaturn = useAppSelector((state: RootState) => state.saturnContent.Saturn);
  const clickEnceladus = useAppSelector((state: RootState) => state.saturnContent.Enceladus);
  const clickTitan = useAppSelector((state: RootState) => state.saturnContent.Titan);

  const handleClickSaturn = () => {
    dispatch(saturnClick());
  }

  const handleClickEnceladus = () => {
    dispatch(enceladusClick());
  }

  const handleClickTitan = () => {
    dispatch(titanClick());
  }

  return (
    <>
      <SaturnItem src={saturn} alt="Saturn" clickSaturn={clickSaturn} onClick={handleClickSaturn}/>
      <EnceladusOrbit 
        speed={speed} 
        isPaused={isPaused} 
        radianCount={radianCount}
        onClick={handleClickEnceladus}  
      >
        <EnceladusItem src={enceladus} alt="Enceladus" clickEnceladus={clickEnceladus}/>
      </EnceladusOrbit>
      <TitanOrbit 
        speed={speed} 
        isPaused={isPaused} 
        radianCount={radianCount}
        onClick={handleClickTitan}  
      >
        <TitanItem src={titan} alt="Titan" clickTitan={clickTitan}/>
      </TitanOrbit>
    </>
  )
}

export default SaturnContent
