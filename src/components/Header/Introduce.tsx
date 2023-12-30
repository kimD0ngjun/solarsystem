import styled from "styled-components";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";

const IntroduceOl = styled.ol`
  list-style-type: circle;
  margin-left: 35%;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
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
    white-space: wrap;
    margin-left: 20rem;
  }
`;

const IntroduceLi = styled.li`
  font-size: 13.7rem;
  margin-top: 12rem;
  margin-bottom: 12rem;
  line-height: 1.7;

  @media (max-width: 1200px) {
    font-size: 10rem;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

const LinkToWiki = styled.a`
  color: white;
  text-decoration: none;
  font-size: 13.7rem;

  &:active {
    cursor: grab;
  }

  @media (max-width: 1200px) {
    font-size: 10rem;
  }
`;

const Introduce = () => {
  const isToggled = useAppSelector(
    (state: RootState) => state.toggle.isToggled
  );

  return (
    <IntroduceOl className={isToggled ? "active" : ""}>
      <IntroduceLi>태양계 천체 공전 궤도 시뮬레이션입니다.</IntroduceLi>
      <IntroduceLi>
        기산점은{" "}
        <LinkToWiki
          href="https://en.wikipedia.org/wiki/Voyager_2"
          target="_blank"
          rel="noopener noreferrer"
        >
          보이저 2호
        </LinkToWiki>
        가 발사된 1977년 8월 20일입니다.
      </IntroduceLi>
      <IntroduceLi>
        모든 공전 궤도는 원으로 두고, 0.1초에 1일이 흐릅니다.
      </IntroduceLi>
      <IntroduceLi>
        우측 상단의 배속 버튼으로 시뮬레이션 조정이 됩니다.
      </IntroduceLi>
      <IntroduceLi>
        원하는 행성 공전 궤도를 선택할 수 있습니다.
        <br />
        선택 시, 해당 행성 및 위성의 설명이 뜹니다.
      </IntroduceLi>
      <IntroduceLi>목성형 행성들은 대표 위성들만 구현했습니다.</IntroduceLi>
      <IntroduceLi>
        화성과 토성, 해왕성의 실제 위성 공전 주기는 매우 짧습니다.
        <br />
        다만, 시각적인 확인을 위해서 임의로 공전 주기를 늘였습니다.
      </IntroduceLi>
      <IntroduceLi>즐거운 하루 되세요!</IntroduceLi>
    </IntroduceOl>
  );
};

export default Introduce;
