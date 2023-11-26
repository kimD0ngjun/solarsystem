import styled, { css, keyframes } from "styled-components";
import { PlanetProps } from "../../common/types";

const createOrbitKeyframes = (radianCount: number) => keyframes`
  from {
    transform: rotate(${(360 * radianCount) / 27}deg);
  }
  to {
    transform: rotate(${(360 * radianCount) / 27 + 360}deg);
  }
`;

// 365를 다른 행성에서는 공전 주기 일수로 치환하면 됨

const Sphere = styled.li<PlanetProps>`
  border-radius: 50%;
  position: absolute;
  top: 4.1rem;
  left: 4.1rem;
  width: 25rem;
  height: 25rem;
  border-style: solid;
  border-color: transparent transparent transparent #c6c6c6;
  border-width: 0.1rem 0.1rem 0;
  animation: ${({ speed, radianCount, isPaused }) => css`
    ${createOrbitKeyframes(radianCount)} ${2.7 / speed}s linear infinite;
    animation-play-state: ${isPaused ? "paused" : "running"};
  `};
  z-index: 7;

  &::before {
    top: 2.1rem;
    left: 2.1rem;
    content: "";
    position: absolute;
    border-radius: 50%;
    width: 3.8rem;
    height: 3.8rem;
    background: radial-gradient(gray, white);
  }
`;

const Moon: React.FC<PlanetProps> = (props) => {
  const { speed, radianCount, isPaused } = props;

  return (
    <>
      <Sphere speed={speed} radianCount={radianCount} isPaused={isPaused} />
    </>
  );
};

export default Moon;
