import styled, { css, keyframes } from "styled-components";
import { PlanetProps } from "../../common/types";

const createOrbitKeyframes = (radianCount: number) => keyframes`
  from {
    transform: rotate(${360 * radianCount / 167}deg);
  }
  to {
    transform: rotate(${360 * radianCount / 167 + 360}deg);
  }
`;

const Sphere = styled.li<PlanetProps>`
  border-radius: 50%;
  position: absolute;
  top: 15rem;
  left: 15rem;
  width: 70rem;
  height: 70rem;
  border-style: solid;
  border-color: transparent transparent transparent #c6c6c6;
  border-width: 0.1rem 0.1rem 0;
  animation: ${({ speed, radianCount, isPaused }) => css`
    ${createOrbitKeyframes(radianCount)} ${16.7 / speed}s linear infinite;
    animation-play-state: ${isPaused ? "paused" : "running"};
  `};
  z-index: 5.2;

  &::before {
    top: 8rem;
    left: 8rem;
    content: '';
    position: absolute;
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    background: radial-gradient(gray, #3e3e3e);
  }
`

const Callisto: React.FC<PlanetProps> = (props) => {
  const { speed, radianCount, isPaused } = props;

  return (
    <>
      <Sphere speed={speed} radianCount={radianCount} isPaused={isPaused} />
    </>
  )
}

export default Callisto