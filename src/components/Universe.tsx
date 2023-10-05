import styled from 'styled-components'
import Sun from "../planet/Sun"
import EarthSystem from "../planet/EarthSystem/Earth"
import Venus from "../planet/Venus"
import Mercury from '../planet/Mercury'
import MarsSystem from '../planet/MarsSystem/Mars'
import JupiterSystem from '../planet/JupiterSystem/Jupiter'
import SatrunSystem from "../planet/SaturnSystem/Saturn"
import UranusSystem from '../planet/UranusSystem/Uranus'
import Neptune from '../planet/NeptuneSystem/Neptune'
import { ChangeWidthProps } from '../common/types'

import { useAppSelector } from '../redux/hooks'
import { RootState } from '../redux/store'

const SolarSystem = styled.div<ChangeWidthProps>`
  margin: 0;
  width: ${({ isChangedWidth }) => (isChangedWidth ? '60vw' : '100vw')};
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  overflow: hidden;
  transition: width 1s ease-in-out;
  z-index: 1;
`

const Universe = () => {
  const speed = useAppSelector((state: RootState) => state.timeCounter.speed);
  const isPaused = useAppSelector((state: RootState) => state.timeCounter.isPaused);
  const radianCount = useAppSelector((state: RootState) => state.timeCounter.changeCallCount);
  const isChangedWidth = useAppSelector((state: RootState) => state.changeWidth.isChanged);

  return (
        <SolarSystem isChangedWidth={isChangedWidth}>
          <Sun />
          <Mercury speed={speed} radianCount={radianCount} isPaused={isPaused} />
          <Venus speed={speed} radianCount={radianCount} isPaused={isPaused} />
          <EarthSystem speed={speed} radianCount={radianCount} isPaused={isPaused} />
          <MarsSystem speed={speed} radianCount={radianCount} isPaused={isPaused} />
          <JupiterSystem speed={speed} radianCount={radianCount} isPaused={isPaused} />
          <SatrunSystem speed={speed} radianCount={radianCount} isPaused={isPaused} />
          <UranusSystem speed={speed} radianCount={radianCount} isPaused={isPaused} />
          <Neptune speed={speed} radianCount={radianCount} isPaused={isPaused} />
        </SolarSystem>
       )
}

export default Universe
