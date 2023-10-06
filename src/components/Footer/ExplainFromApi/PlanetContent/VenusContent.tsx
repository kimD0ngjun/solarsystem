import styled from "styled-components";
// import venus from "../../../../../public/assets/PlanetImg/Venus.svg"
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { AppDispatch, RootState } from "../../../../redux/store";
import { venusClick } from "../../../../redux/contentClick/VenusContentSlice";

interface ClickVenus {
  clickVenus: boolean;
}

const VenusItem = styled.img<ClickVenus>`
  width: 14%;
  height: 14%;
  /* border: 1px solid white; */
  border-radius: 50%;
  z-index: 3;
  box-shadow: ${({ clickVenus }) => clickVenus? '0 0 20rem 0 violet, inset 0 0 20rem 0 violet' : null};

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 20rem 0 purple;
  }

  &:active {
    cursor: grab;
    box-shadow: 0 0 20rem 0 violet;
  }
`

const VenusContent: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const clickVenus = useAppSelector((state: RootState) => state.venusContent.Venus);

  const handleClickVenus = () => {
    dispatch(venusClick());
  }

  return (
    <>
      <VenusItem src="/public/assets/PlanetImg/Venus.svg" alt="Venus" clickVenus={clickVenus} onClick={handleClickVenus}/>
    </>
  )
}

export default VenusContent
