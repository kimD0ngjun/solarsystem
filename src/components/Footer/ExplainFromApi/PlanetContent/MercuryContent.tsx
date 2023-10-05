import styled from "styled-components";
import mercury from "../../../../assets/PlanetImg/Mercury.svg"
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { AppDispatch, RootState } from "../../../../redux/store";
import { mercuryClick } from "../../../../redux/contentClick/MercuryContentSlice";

interface ClickMercury {
  clickMercury: boolean;
}

const MercuryItem = styled.img<ClickMercury>`
  width: 14%;
  height: 14%;
  /* border: 1px solid white; */
  border-radius: 50%;
  z-index: 3;
  box-shadow: ${({ clickMercury }) => clickMercury ? '0 0 20rem 0 violet' : null};

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 20rem 0 purple;
  }

  &:active {
    cursor: grab;
    box-shadow: 0 0 20rem 0 violet;
  }
`

const MercuryContent: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const clickMercury= useAppSelector((state: RootState) => state.mercuryContent.Mercury);

  const handleClickMercury = () => {
    dispatch(mercuryClick());
  }

  return (
    <>
      <MercuryItem src={mercury} alt="Mercury" clickMercury={clickMercury} onClick={handleClickMercury}/>
    </>
  )
}

export default MercuryContent
