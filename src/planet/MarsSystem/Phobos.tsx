import styled, { css, keyframes } from "styled-components";
import { PlanetProps } from "../../common/types";

const createOrbitKeyframes = (radianCount: number) => keyframes`
  from {
    transform: rotate(${360 * radianCount / 15}deg);
  }
  to {
    transform: rotate(${360 * radianCount / 15 + 360}deg);
  }
`;

const Sphere = styled.li<PlanetProps>`
  border-radius: 50%;
  position: absolute;
  top: 26rem;
  left: 26rem;
  width: 14rem;
  height: 14rem;
  border-style: solid;
  border-color: transparent transparent transparent #c6c6c6;
  border-width: 0.1rem 0.1rem 0;
  animation: ${({ speed, radianCount, isPaused }) => css`
    ${createOrbitKeyframes(radianCount)} ${1.5 / speed}s linear infinite;
    animation-play-state: ${isPaused ? "paused" : "running"};
  `};
  z-index: 6.8;

  &::before {
    top: 1rem;
    left: 1rem;
    content: '';
    position: absolute;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    background: radial-gradient(#3d2222, #4b3a3a);
  }
`

const Phobos: React.FC<PlanetProps> = (props) => {
  const { speed, radianCount, isPaused } = props;

  return (
    <>
      <Sphere speed={speed} radianCount={radianCount} isPaused={isPaused} />
    </>
  )
}

export default Phobos