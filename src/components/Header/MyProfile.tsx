import styled from "styled-components"
import gitHub from "../../assets/GitHub.svg"
import gmail from "../../assets/Gmail.svg"
import instagram from "../../assets/Instagram.svg"
import { useAppSelector } from "../../redux/hooks"
import { RootState } from "../../redux/store"

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-12.5rem);
  transition: 500ms ease;

  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  @media (max-width: 1200px) {
    width: 144px;
    height: 108px;
  }
`

const Text = styled.p`
  font-size: 12.5px;
  text-align: center;
  color: white;

  @media (max-width: 1200px) {
    font-size: 7px;
  }
`

const Icons = styled.div`
  display: flex;
  flex-direction: row;
`

const IconBox = styled.a`
  width: 45px;
  height: 45px;
  margin: 15px;
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
    margin: 5px;
  }
`

const MyProfile = () => {
  const isToggled = useAppSelector((state: RootState) => state.toggle.isToggled)

  return (
    <ProfileContainer className={isToggled ? 'active' : ''}>      
      <Icons>
        <IconBox href="https://github.com/kimD0ngjun/solarsystem" target="_blank">
          <img style={{width: `45px`, height: `45px`}} src={gitHub} alt="gitHub" />
        </IconBox>
       <IconBox href="mailto:chickentasty0112@gmail.com" target="_blank">
         <img style={{width: `45px`, height: `45px`}} src={gmail} alt="gmail" />
       </IconBox>
       <IconBox href="https://instagram.com/00ngjun?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==" target="_blank">
         <img style={{width: `45px`, height: `45px`}} src={instagram} alt="instagram" />
       </IconBox>
      </Icons>
      <Text>
        Copyright 2023. 김동준. all rights reserved.
      </Text>
    </ProfileContainer>
  )
}

export default MyProfile