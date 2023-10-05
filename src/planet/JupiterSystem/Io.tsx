import styled, { css, keyframes } from "styled-components";
import { PlanetProps } from "../../common/types";

const createOrbitKeyframes = (radianCount: number) => keyframes`
  from {
    transform: rotate(${360 * radianCount / 18}deg);
  }
  to {
    transform: rotate(${360 * radianCount / 18 + 360}deg);
  }
`;

const Sphere = styled.li<PlanetProps>`
  border-radius: 50%;
  position: absolute;
  top: 36.4rem;
  left: 36.4rem;
  width: 26rem;
  height: 26rem;
  border-style: solid;
  border-color: transparent transparent transparent #c6c6c6;
  border-width: 0.1rem 0.1rem 0;
  animation: ${({ speed, radianCount, isPaused }) => css`
    ${createOrbitKeyframes(radianCount)} ${1.8 / speed}s linear infinite;
    animation-play-state: ${isPaused ? "paused" : "running"};
  `};
  z-index: 5.8;

  &::before {
    top: 2.1rem;
    left: 2.1rem;
    content: '';
    position: absolute;
    border-color: #e4be9ab6;
    border-radius: 50%;
    width: 3.8rem;
    height: 3.8rem;
    background: radial-gradient(#c6c6c6, gold, #e4be9a7f, #787777);
  }
`

const Io: React.FC<PlanetProps> = (props) => {
  const { speed, radianCount, isPaused } = props;

  return (
    <>
      <Sphere speed={speed} radianCount={radianCount} isPaused={isPaused} />
    </>
  )
}

export default Io