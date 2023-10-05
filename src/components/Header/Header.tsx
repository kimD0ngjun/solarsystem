import styled from "styled-components";
import Section from "../Section";
import Logo from "./Logo";
import Content from "../Content";
import MyProfile from "./MyProfile"
import Introduce from "./Introduce";

import { useAppSelector } from '../../redux/hooks'
import { RootState } from '../../redux/store'

const Container = styled.header`
  position: absolute;
  background-color: transparent;
  width: 21vw;
  height: 100vh;
  z-index: 10;
  display: flex;
  flex-direction: column;
  opacity: 1;
  visibility: visible;
  transform: translateX(0);
  transition: 500ms ease;

  &.active {
    opacity: 0;
    visibility: hidden;
    transform: translateX(-12.5rem);
  }
  
`;

const Header = () => {
  const isChangedWidth = useAppSelector((state: RootState) => state.changeWidth.isChanged)

  return (
    <Container className={isChangedWidth ? 'active' : ''}>
      <Section>
        <Logo />
      </Section>
      <Content>
        <Introduce />
      </Content>
      <Section>
        <MyProfile />
      </Section>
    </Container>  
  )
}

export default Header