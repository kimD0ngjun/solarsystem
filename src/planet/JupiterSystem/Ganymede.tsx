import styled, { css, keyframes } from "styled-components";
import { PlanetProps } from "../../common/types";

const createOrbitKeyframes = (radianCount: number) => keyframes`
  from {
    transform: rotate(${360 * radianCount / 71.5}deg);
  }
  to {
    transform: rotate(${360 * radianCount / 71.5 + 360}deg);
  }
`;

const Sphere = styled.li<PlanetProps>`
  border-radius: 50%;
  position: absolute;
  top: 22rem;
  left: 22rem;
  width: 56rem;
  height: 56rem;
  border-style: solid;
  border-color: transparent transparent transparent #c6c6c6;
  border-width: 0.1rem 0.1rem 0;
  animation: ${({ speed, radianCount, isPaused }) => css`
    ${createOrbitKeyframes(radianCount)} ${7.15 / speed}s linear infinite;
    animation-play-state: ${isPaused ? "paused" : "running"};
  `};
  z-index: 5.4;

  &::before {
    top: 6rem;
    left: 6rem;
    content: '';
    position: absolute;
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    background: radial-gradient(gray, #a52a2a5e);
  }
`

const Ganymede: React.FC<PlanetProps> = (props) => {
  const { speed, radianCount, isPaused } = props;

  return (
    <>
      <Sphere speed={speed} radianCount={radianCount} isPaused={isPaused} />
    </>
  )
}

export default Ganymede