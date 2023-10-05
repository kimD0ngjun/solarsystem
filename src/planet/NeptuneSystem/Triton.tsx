import styled, { css, keyframes } from "styled-components";
import { PlanetProps } from "../../common/types";

const createOrbitKeyframes = (radianCount: number) => keyframes`
  from {
    transform: rotate(${360 * radianCount / 15}deg);
  }
  to {
    transform: rotate(${360 * radianCount / 15 - 360}deg);
  }
`;

const Sphere = styled.li<PlanetProps>`
  border-radius: 50%;
  position: absolute;
  top: 102rem;
  left: 102rem;
  width: 36rem;
  height: 36rem;
  border-style: solid;
  border-color: transparent #c6c6c6 transparent transparent;
  border-width: 0.1rem 0.1rem 0;
  animation: ${({ speed, radianCount, isPaused }) => css`
    ${createOrbitKeyframes(radianCount)} ${1.5 / speed}s linear infinite;
    animation-play-state: ${isPaused ? "paused" : "running"};
  `};
  z-index: 2.5;

  &::before {
    top: 3.7rem;
    right: 4.7rem;
    content: '';
    position: absolute;
    border-radius: 50%;
    width: 2.4rem;
    height: 2.4rem;
    background: radial-gradient(#eae697b7, #a6a6a6);
  }
`

const Triton: React.FC<PlanetProps> = (props) => {
  const { speed, radianCount, isPaused } = props;

  return (
    <>
      <Sphere speed={speed} radianCount={radianCount} isPaused={isPaused} />
    </>
  )
}

export default Triton