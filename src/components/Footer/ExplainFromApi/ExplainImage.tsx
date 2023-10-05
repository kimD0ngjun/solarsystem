import styled from "styled-components";
import { PlanetProps } from "../../../common/types";
import EarthContent from "./PlanetContent/EarthContent";
import { useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import VenusContent from "./PlanetContent/VenusContent";
import MercuryContent from "./PlanetContent/MercuryContent";
import SunContent from "./PlanetContent/SunContent";
import MarsContent from "./PlanetContent/MarsContent";
import JupiterContent from "./PlanetContent/JupiterContent";
import SaturnContent from "./PlanetContent/SaturnContent";
import UranusContent from "./PlanetContent/UranusContent";
import NeptuneContent from "./PlanetContent/NeptuneContent";


const ImgFrame = styled.div`
  width: 100%;
  height: 100%;
  /* border: 2px solid pink; */
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column-start: 1;
	grid-column-end: 2;
  grid-row-start: 1;
	grid-row-end: 2;
  overflow: hidden;
`

const ExplainImage: React.FC<PlanetProps> = (props) => {
  const { speed, radianCount, isPaused } = props;

  const selectSun = useAppSelector((state: RootState) => state.select.Sun);
  const selectMercury = useAppSelector((state: RootState) => state.select.Mercury);
  const selectVenus = useAppSelector((state: RootState) => state.select.Venus);
  const selectEarth = useAppSelector((state: RootState) => state.select.Earth);
  const selectMars = useAppSelector((state: RootState) => state.select.Mars);
  const selectJupiter = useAppSelector((state: RootState) => state.select.Jupiter);
  const selectSaturn = useAppSelector((state: RootState) => state.select.Saturn);
  const selectUranus = useAppSelector((state: RootState) => state.select.Uranus);
  const selectNeptune = useAppSelector((state: RootState) => state.select.Neptune);

  return (
    <ImgFrame>
      {selectSun ? <SunContent /> : null}
      {selectMercury ? <MercuryContent /> : null}
      {selectVenus ? <VenusContent /> : null}
      {selectEarth ? <EarthContent speed={speed} radianCount={radianCount} isPaused={isPaused} /> : null}
      {selectMars ? <MarsContent speed={speed} radianCount={radianCount} isPaused={isPaused} /> : null}
      {selectJupiter ? <JupiterContent speed={speed} radianCount={radianCount} isPaused={isPaused} /> : null}
      {selectSaturn ? <SaturnContent speed={speed} radianCount={radianCount} isPaused={isPaused} /> : null}
      {selectUranus ? <UranusContent speed={speed} radianCount={radianCount} isPaused={isPaused} /> : null}
      {selectNeptune ? <NeptuneContent speed={speed} radianCount={radianCount} isPaused={isPaused} /> : null}
    </ImgFrame>
  )
}

export default ExplainImage
