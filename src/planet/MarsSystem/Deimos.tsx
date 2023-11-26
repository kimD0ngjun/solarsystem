import styled, { css, keyframes } from "styled-components";
import { PlanetProps } from "../../common/types";

const createOrbitKeyframes = (radianCount: number) => keyframes`
  from {
    transform: rotate(${(360 * radianCount) / 45}deg);
  }
  to {
    transform: rotate(${(360 * radianCount) / 45 + 360}deg);
  }
`;

const Sphere = styled.li<PlanetProps>`
  border-radius: 50%;
  position: absolute;
  top: 13rem;
  left: 13rem;
  width: 25rem;
  height: 25rem;
  border-style: solid;
  border-color: transparent transparent transparent #c6c6c6;
  border-width: 0.1rem 0.1rem 0;
  animation: ${({ speed, radianCount, isPaused }) => css`
    ${createOrbitKeyframes(radianCount)} ${4.5 / speed}s linear infinite;
    animation-play-state: ${isPaused ? "paused" : "running"};
  `};
  z-index: 6.4;

  &::before {
    top: 2.7rem;
    left: 2.7rem;
    content: "";
    position: absolute;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    background-color: #666666;
  }
`;

const Deimos: React.FC<PlanetProps> = (props) => {
  const { speed, radianCount, isPaused } = props;

  return (
    <>
      <Sphere speed={speed} radianCount={radianCount} isPaused={isPaused} />
    </>
  );
};

export default Deimos;
