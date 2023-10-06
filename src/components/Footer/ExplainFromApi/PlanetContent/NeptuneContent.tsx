import styled, { css, keyframes } from "styled-components";
// import neptune from "../../../../../public/assets/PlanetImg/Neptune.svg";
// import triton from "../../../../../public/assets/PlanetImg/Triton.svg";
import { PlanetProps } from "../../../../common/types";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { AppDispatch, RootState } from "../../../../redux/store";
import { neptuneClick, tritonClick } from "../../../../redux/contentClick/NeptuneContentSlice";

interface ClickNeptune {
  clickNeptune: boolean;
}

interface ClcikTriton {
  clickTriton: boolean;
}

const NeptuneItem = styled.img<ClickNeptune>`
  width: 15%;
  height: 15%;
  /* border: 1px solid white; */
  border-radius: 50%;
  z-index: 3;
  box-shadow: ${({ clickNeptune }) => clickNeptune ? '0 0 30rem 0 violet, inset 0 0 5rem 0 violet' : null};

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
    transform: rotate(${360 * radianCount / 15}deg);
  }
  to {
    transform: rotate(${360 * radianCount / 15 - 360}deg);
  }
`;

const TritonOrbit = styled.div<PlanetProps>`
  border-radius: 50%;
  position: absolute;
  width: 150px;
  height: 150px;
  border-style: solid;
  border-color: transparent #c6c6c6 transparent transparent;
  border-width: 0.1rem 0.1rem 0;
  animation: ${({ speed, radianCount, isPaused }) => css`
    ${createOrbitKeyframes(radianCount)} ${1.64 / speed}s linear infinite;
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

const TritonItem = styled.img<ClcikTriton>`
  top: 9.5rem;
  right: 9.5rem;
  width: 17%;
  height: 17%;
  border-radius: 50%;
  position: absolute;
  z-index: 2;
  box-shadow: ${({ clickTriton }) => clickTriton ? '0 0 10rem 0 violet, inset 0 0 10rem 0 violet' : null};
  border: ${({ clickTriton }) => clickTriton ? '1.3px solid violet' : null};
`

const NeptuneContent: React.FC<PlanetProps> = (props) => {
  const { speed, radianCount, isPaused } = props;
  const dispatch: AppDispatch = useAppDispatch();
  const clickNeptune = useAppSelector((state: RootState) => state.neptuneContent.Neptune);
  const clickTriton = useAppSelector((state: RootState) => state.neptuneContent.Triton);

  const handleClickNeptune = () => {
    dispatch(neptuneClick());
  }

  const handleClickTriton = () => {
    dispatch(tritonClick())
  }

  return (
    <>
      <NeptuneItem src="/public/assets/PlanetImg/Neptune.svg" alt="Neptune" clickNeptune={clickNeptune} onClick={handleClickNeptune}/>
      <TritonOrbit 
        speed={speed} 
        isPaused={isPaused} 
        radianCount={radianCount}
        onClick={handleClickTriton}  
      >
        <TritonItem src="/public/assets/PlanetImg/Triton.svg" alt="Triton" clickTriton={clickTriton}/>
      </TritonOrbit>
    </>
  )
}

export default NeptuneContent
