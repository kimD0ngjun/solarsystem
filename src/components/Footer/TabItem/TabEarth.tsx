import styled from "styled-components"

import { expandWidth } from "../../../redux/ChangeWidthSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { AppDispatch, RootState } from "../../../redux/store";
import { resetPlanets, selectEarth } from "../../../redux/SelectedSlice";
import { hoverEarth, leavePlanets } from "../../../redux/HoveredSlice";
import { MainSelectProps } from "../../../common/types";
import { earthClick } from "../../../redux/contentClick/EarthContentSlice";
import { resetSunClick } from "../../../redux/contentClick/SunContentSlice";
import { resetMercuryClick } from "../../../redux/contentClick/MercuryContentSlice";
import { resetVenusClick } from "../../../redux/contentClick/VenusContentSlice";
import { resetMarsClick } from "../../../redux/contentClick/MarsContentSlice";
import { resetJupiterClick } from "../../../redux/contentClick/JupiterContentSlice";
import { resetSaturnClick } from "../../../redux/contentClick/SaturnContentSlice";
import { resetUranusClick } from "../../../redux/contentClick/UranusContentSlice";
import { resetNeptuneClick } from "../../../redux/contentClick/NeptuneContentSlice";

interface FontSize {
  isSelected: boolean;
}

const Tab = styled.li<MainSelectProps>`
  /* border: 2px solid yellow; */
  width: 11.1%;
  /* width: 37px;  */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 13;
  box-shadow: 
  ${({ isSelected, isChanged, isHovered }) => 
    isSelected && isChanged 
      ? '0 0 10rem 0 violet, inset 0 0 10rem 0 violet' 
      : isHovered 
      ? '0 0 10rem 0 purple, inset 0 0 10rem 0 purple' 
      : 'none'};

  &:hover {
    cursor: pointer;
  }

  &:active {
    cursor: grab;
  }
`

const TabText = styled.p<FontSize>`
  width: 100%;
  /* font-size: 12.45px; */
  font-size: ${({ isSelected }) => isSelected ? `18px` : `12.45px` };
  transition: font-size 350ms ease-in-out;
  text-align: center;
  white-space: nowrap;
  overflow: hidden; 
  text-overflow: ellipsis; 
`

const TabEarth = () => {
  const isHovered = useAppSelector((state: RootState) => state.hover.Earth)
  const isSelected = useAppSelector((state: RootState) => state.select.Earth)
  const handleHoverEnter = () => {
    dispatch(hoverEarth())
  }
  const handleHoverLeave = () => {
    dispatch(leavePlanets())
  }

  const dispatch: AppDispatch = useAppDispatch();
  const isChanged = useAppSelector((state: RootState) => state.changeWidth.isChanged)
  const handleExpand = () => {
    dispatch(resetPlanets())
    dispatch(selectEarth())
    dispatch(expandWidth())
    dispatch(resetSunClick())
    dispatch(resetMercuryClick())
    dispatch(resetVenusClick())
    dispatch(resetMarsClick())
    dispatch(resetJupiterClick())
    dispatch(resetSaturnClick())
    dispatch(resetUranusClick())
    dispatch(resetNeptuneClick())
    dispatch(earthClick());
  };

  return (
    <Tab
      isHovered={isHovered}
      isSelected={isSelected}
      isChanged={isChanged}
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
      onClick={handleExpand}
    >
      <TabText
        isSelected={isSelected}
      >
        지구
      </TabText>
    </Tab>
  )
}

export default TabEarth