import styled from 'styled-components'
import { useAppSelector } from './redux/hooks'
import { RootState } from './redux/store'

import Universe from './components/Universe'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

interface BlackFieldProps {
  isChangedWidth: boolean;
}

const BlackField = styled.div<BlackFieldProps>`
  position: absolute;
  right: 0;
  width: ${({ isChangedWidth }) => (isChangedWidth ? '40vw' : '0')};
  background-color: black;
  height: 100vh;
  transition: width 1s ease-in-out;
`

function MainUnion() {
  const isChangedWidth = useAppSelector((state: RootState) => state.changeWidth.isChanged);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Header />
      <Universe />
      <Footer />
      <BlackField isChangedWidth={isChangedWidth}/>
    </div>
  )
}

export default MainUnion
