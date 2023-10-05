import styled, { css, keyframes } from "styled-components";
import { PlanetProps } from "../../common/types";

const createOrbitKeyframes = (radianCount: number) => keyframes`
  from {
    transform: rotate(${360 * radianCount / 35.5}deg);
  }
  to {
    transform: rotate(${360 * radianCount / 35.5 + 360}deg);
  }
`;

const Sphere = styled.li<PlanetProps>`
  border-radius: 50%;
  position: absolute;
  top: 29.5rem;
  left: 29.5rem;
  width: 40.5rem;
  height: 40.5rem;
  border-style: solid;
  border-color: transparent transparent transparent #c6c6c6;
  border-width: 0.1rem 0.1rem 0;
  animation: ${({ speed, radianCount, isPaused }) => css`
    ${createOrbitKeyframes(radianCount)} ${3.55 / speed}s linear infinite;
    animation-play-state: ${isPaused ? "paused" : "running"};
  `};
  z-index: 5.6;

  &::before {
    top: 4.35rem;
    left: 4.35rem;
    content: '';
    position: absolute;
    border-color: #e4be9ab6;
    border-radius: 50%;
    width: 3.4rem;
    height: 3.4rem;
    background: radial-gradient(#c6c6c6, #e4be9a7f);
  }
`

const Europa: React.FC<PlanetProps> = (props) => {
  const { speed, radianCount, isPaused } = props;

  return (
    <>
      <Sphere speed={speed} radianCount={radianCount} isPaused={isPaused} />
    </>
  )
}

export default Europa