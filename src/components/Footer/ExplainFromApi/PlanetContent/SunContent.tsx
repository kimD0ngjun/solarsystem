import styled from "styled-components";
// import sun from "../../../../../public/assets/PlanetImg/Sun.svg"
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { AppDispatch, RootState } from "../../../../redux/store";
import { sunClick } from "../../../../redux/contentClick/SunContentSlice";

interface ClickSun {
  clickSun: boolean;
}

const SunItem = styled.img<ClickSun>`
  width: 40%;
  height: 40%;
  /* border: 1px solid white; */
  border-radius: 50%;
  z-index: 3;
  box-shadow: ${({ clickSun }) => clickSun ? '0 0 20rem 0 violet' : null};

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 20rem 0 purple;
  }

  &:active {
    cursor: grab;
    box-shadow: 0 0 20rem 0 violet;
  }
`

const SunContent: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const clickSun= useAppSelector((state: RootState) => state.sunContent.Sun);

  const handleClickSun = () => {
    dispatch(sunClick());
  }

  return (
    <>
      <SunItem src="/assets/PlanetImg/Sun.svg" alt="Mercury" clickSun={clickSun} onClick={handleClickSun}/>
    </>
  )
}

export default SunContent
