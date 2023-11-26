import styled, { css, keyframes } from "styled-components";
import { PlanetProps } from "../../common/types";

const createOrbitKeyframes = (radianCount: number) => keyframes`
  from {
    transform: rotate(${(360 * radianCount) / 16.4}deg);
  }
  to {
    transform: rotate(${(360 * radianCount) / 16.4 + 360}deg);
  }
`;

const Sphere = styled.li<PlanetProps>`
  border-radius: 50%;
  position: absolute;
  top: 61rem;
  left: 61rem;
  width: 36rem;
  height: 36rem;
  border-style: solid;
  border-color: transparent transparent transparent #c6c6c6;
  border-width: 0.1rem 0.1rem 0;
  animation: ${({ speed, radianCount, isPaused }) => css`
    ${createOrbitKeyframes(radianCount)} ${1.64 / speed}s linear infinite;
    animation-play-state: ${isPaused ? "paused" : "running"};
  `};
  z-index: 3.5;

  &::before {
    top: 4.7rem;
    left: 4.7rem;
    content: "";
    position: absolute;
    border-radius: 50%;
    width: 2.4rem;
    height: 2.4rem;
    background: radial-gradient(#5bc7f8b7, #a6a6a6);
  }
`;

const Titania: React.FC<PlanetProps> = (props) => {
  const { speed, radianCount, isPaused } = props;

  return (
    <>
      <Sphere speed={speed} radianCount={radianCount} isPaused={isPaused} />
    </>
  );
};

export default Titania;
