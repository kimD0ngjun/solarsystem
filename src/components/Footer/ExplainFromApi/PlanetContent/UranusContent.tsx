import styled, { css, keyframes } from "styled-components";
import uranus from "../../../../assets/PlanetImg/Uranus.svg";
import titania from "../../../../assets/PlanetImg/Titania.svg";
import { PlanetProps } from "../../../../common/types";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { AppDispatch, RootState } from "../../../../redux/store";
import { uranusClick, titaniaClick } from "../../../../redux/contentClick/UranusContentSlice";

interface ClickUranus {
  clickUranus: boolean;
}

interface ClcikTitania {
  clickTitania: boolean;
}

const UranusItem = styled.img<ClickUranus>`
  width: 15%;
  height: 15%;
  /* border: 1px solid white; */
  border-radius: 50%;
  z-index: 3;
  box-shadow: ${({ clickUranus }) => clickUranus ? '0 0 30rem 0 violet, inset 0 0 5rem 0 violet' : null};

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
    transform: rotate(${360 * radianCount / 16.4}deg);
  }
  to {
    transform: rotate(${360 * radianCount / 16.4 + 360}deg);
  }
`;

const TitaniaOrbit = styled.div<PlanetProps>`
  border-radius: 50%;
  position: absolute;
  width: 150px;
  height: 150px;
  border-style: solid;
  border-color: transparent transparent transparent #c6c6c6;
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

const TitaniaItem = styled.img<ClcikTitania>`
  top: 9.5rem;
  left: 9.5rem;
  width: 17%;
  height: 17%;
  border-radius: 50%;
  position: absolute;
  z-index: 2;
  box-shadow: ${({ clickTitania }) => clickTitania ? '0 0 10rem 0 violet, inset 0 0 10rem 0 violet' : null};
  border: ${({ clickTitania }) => clickTitania ? '1.3px solid violet' : null};
`

const UranusContent: React.FC<PlanetProps> = (props) => {
  const { speed, radianCount, isPaused } = props;
  const dispatch: AppDispatch = useAppDispatch();
  const clickUranus = useAppSelector((state: RootState) => state.uranusContent.Uranus);
  const clickTitania = useAppSelector((state: RootState) => state.uranusContent.Titania);

  const handleClickUranus = () => {
    dispatch(uranusClick());
  }

  const handleClickTitania = () => {
    dispatch(titaniaClick())
  }

  return (
    <>
      <UranusItem src={uranus} alt="Uranus" clickUranus={clickUranus} onClick={handleClickUranus}/>
      <TitaniaOrbit 
        speed={speed} 
        isPaused={isPaused} 
        radianCount={radianCount}
        onClick={handleClickTitania}  
      >
        <TitaniaItem src={titania} alt="Titania" clickTitania={clickTitania}/>
      </TitaniaOrbit>
    </>
  )
}

export default UranusContent
