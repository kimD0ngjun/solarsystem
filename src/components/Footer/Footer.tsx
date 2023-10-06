import styled from "styled-components";
import TimeCounter from "./TimeCounter"
import Explain from "./Explain";
import { ChangeWidthProps } from '../../common/types'
// import returnBtn from "../../../public/assets/ReturnButton.svg"

import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { RootState, AppDispatch } from '../../redux/store'
import { shortenWidth } from "../../redux/ChangeWidthSlice";
import { resetPlanets } from "../../redux/SelectedSlice";

const Container = styled.footer<ChangeWidthProps>`
  position: absolute;
  right: 0;
  width: ${({ isChangedWidth }) => (isChangedWidth ? '40vw' : '22vw')};
  height: 100vh;
  /* border: 2px solid purple; */
  background-color: transparent;
  z-index: 13;
  transition: width 1s ease-in-out;
`

const FooterSection = styled.div<ChangeWidthProps>`
  box-sizing: border-box;
  width: 100%;
  height: 15%;
  /* border: 2px solid green; */
  display: flex;
  justify-content: ${({ isChangedWidth }) => (isChangedWidth ? 'space-around' : 'center')};
  align-items: center;
  z-index: 13;
`

const ReturnButton = styled.img`
  width: 0px;
  height: 0px;
  opacity: 0;
  visibility: hidden;
  transition: transform 500ms, visibility 0s, opacity 500ms ease;

  &.active {
    width: 51px;
    height: 119px;
    opacity: 1;
    visibility: visible;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }

  &:active {
    cursor: grab;
    transform: scale(1.0);
  }
`

const Footer = () => {
  const isChangedWidth = useAppSelector((state: RootState) => state.changeWidth.isChanged);
  const dispatch: AppDispatch = useAppDispatch();
  const handleShorten = () => {
    dispatch(shortenWidth());
    dispatch(resetPlanets());
  };

  return (
      <Container isChangedWidth={isChangedWidth}>
        <FooterSection isChangedWidth={isChangedWidth}>
          <ReturnButton 
            src="../../../public/assets/ReturnButton.svg"
            alt="뒤로 가기" className={isChangedWidth ? 'active' : ''} 
            onClick={handleShorten}
          />
          <TimeCounter />
        </FooterSection>
        <Explain />
      </Container>
  )
}

export default Footer