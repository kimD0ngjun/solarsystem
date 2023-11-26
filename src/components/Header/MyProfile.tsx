import styled from "styled-components";
// import gitHub from "../../../public/assets/GitHub.svg"
// import gmail from "../../../public/assets/Gmail.svg"
// import instagram from "../../../public/assets/Instagram.svg"
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";

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
    width: 144rem;
    height: 108rem;
  }
`;

const Text = styled.p`
  font-size: 12.5rem;
  text-align: center;
  color: white;

  @media (max-width: 1200px) {
    font-size: 7rem;
  }
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
`;

const IconBox = styled.a`
  width: 45rem;
  height: 45rem;
  margin: 15rem;
  transition: transform 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  &:active {
    cursor: grab;
    transform: scale(1);
  }

  @media (max-width: 1200px) {
    margin: 5rem;
  }
`;

const MyProfile = () => {
  const isToggled = useAppSelector(
    (state: RootState) => state.toggle.isToggled
  );

  return (
    <ProfileContainer className={isToggled ? "active" : ""}>
      <Icons>
        <IconBox
          href="https://github.com/kimD0ngjun/solarsystem"
          target="_blank"
        >
          <img
            style={{ width: `45px`, height: `45px` }}
            src="/assets/GitHub.svg"
            alt="gitHub"
          />
        </IconBox>
        <IconBox href="mailto:chickentasty0112@gmail.com" target="_blank">
          <img
            style={{ width: `45px`, height: `45px` }}
            src="/assets/Gmail.svg"
            alt="gmail"
          />
        </IconBox>
        <IconBox
          href="https://instagram.com/00ngjun?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="
          target="_blank"
        >
          <img
            style={{ width: `45px`, height: `45px` }}
            src="/assets/Instagram.svg"
            alt="instagram"
          />
        </IconBox>
      </Icons>
      <Text>Copyright 2023. 김동준. all rights reserved.</Text>
    </ProfileContainer>
  );
};

export default MyProfile;
