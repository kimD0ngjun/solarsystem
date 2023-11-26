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
  top: 35rem;
  left: 35rem;
  width: 54rem;
  height: 54rem;
  border-style: solid;
  border-color: transparent transparent transparent #c6c6c6;
  border-width: 0.1rem 0.1rem 0;
  animation: ${({ speed, radianCount, isPaused }) => css`
    ${createOrbitKeyframes(radianCount)} ${4.5 / speed}s linear infinite;
    animation-play-state: ${isPaused ? "paused" : "running"};
  `};
  z-index: 4.4;

  &::before {
    top: 6.2rem;
    left: 6.3rem;
    content: "";
    position: absolute;
    border-radius: 50%;
    width: 4.8rem;
    height: 4.8rem;
    background: radial-gradient(#cdc94db7, #aaa61bb7, #a6a6a6);
  }
`;

const Titan: React.FC<PlanetProps> = (props) => {
  const { speed, radianCount, isPaused } = props;

  return (
    <>
      <Sphere speed={speed} radianCount={radianCount} isPaused={isPaused} />
    </>
  );
};

export default Titan;
