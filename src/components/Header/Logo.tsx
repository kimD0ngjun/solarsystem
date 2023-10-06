import styled, { keyframes } from "styled-components";
// import logo from "../../../public/assets/Logo.svg"
import { AppDispatch } from "../../redux/store";
import { useAppDispatch } from "../../redux/hooks";
import { setToggle } from "../../redux/ToggleSlice";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  12.5% {
    transform: scale(1.2);
  }
  25% {
    transform: scale(1);
  }
  37.5% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1);
  }
  62.5% {
    transform: scale(1.2);
  }
  75% {
    transform: scale(1);
  }
  87.5% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LogoImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 288px;
  margin: 6px;
  transition: transform 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  &:active {
    cursor: grab;
    transform: scale(1.0);
  }

  @media (max-width: 1200px) {
    width: 144px;
  }
`

const Text = styled.p`
  font-size: 15px;
  margin: 3px;
  animation: ${pulse} 4s 4s 1.5;
`

const Logo = () => {
  const dispatch: AppDispatch = useAppDispatch();

  const handleToggle = () => {
    dispatch(setToggle())
  }

  return (
    <LogoBox>
      <LogoImg src="/assets/Logo.svg" alt="logo" onClick={handleToggle} />
      <Text>click the logo ◡̈</Text>
    </LogoBox>
  )
}

export default Logo

