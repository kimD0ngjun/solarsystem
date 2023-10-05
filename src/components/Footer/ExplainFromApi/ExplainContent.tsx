import { useState, useEffect } from "react";
import styled from "styled-components";
import contentData from "./utility/DetailDummyData";
import { useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";

const ContentFrame = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid blue;
  font-size: 15px;
  line-height: 200%;
  padding: 20rem;
  overflow-y: auto;
  grid-column-start: 1;
	grid-column-end: 3;
  grid-row-start: 2;
	grid-row-end: 3;
`

const ExplainContent = () => {
  const clickSun = useAppSelector((state: RootState) => state.sunContent.Sun);
  const clickMercury = useAppSelector((state: RootState) => state.mercuryContent.Mercury);
  const clickVenus = useAppSelector((state: RootState) => state.venusContent.Venus);
  const clickEarth = useAppSelector((state: RootState) => state.earthContent.Earth);
  const clickMoon = useAppSelector((state: RootState) => state.earthContent.Moon);
  const clickMars = useAppSelector((state: RootState) => state.marsContent.Mars);
  const clickPhobos = useAppSelector((state: RootState) => state.marsContent.Phobos);
  const clickDeimos = useAppSelector((state: RootState) => state.marsContent.Deimos);
  const clickJupiter = useAppSelector((state: RootState) => state.jupiterContent.Jupiter);
  const clickIo = useAppSelector((state: RootState) => state.jupiterContent.Io);
  const clickEuropa = useAppSelector((state: RootState) => state.jupiterContent.Europa);
  const clickGanymede = useAppSelector((state: RootState) => state.jupiterContent.Ganymade);
  const clickCallisto = useAppSelector((state: RootState) => state.jupiterContent.Callisto);
  const clickSaturn = useAppSelector((state: RootState) => state.saturnContent.Saturn);
  const clickEnceladus = useAppSelector((state: RootState) => state.saturnContent.Enceladus);
  const clickTitan = useAppSelector((state: RootState) => state.saturnContent.Titan);
  const clickUranus = useAppSelector((state: RootState) => state.uranusContent.Uranus);
  const clickTitania = useAppSelector((state: RootState) => state.uranusContent.Titania);
  const clickNeptune = useAppSelector((state: RootState) => state.neptuneContent.Neptune);
  const clickTriton = useAppSelector((state: RootState) => state.neptuneContent.Triton);

  let selectedDetail: string = "";

  if (clickSun) {
    selectedDetail = contentData.SunContent[0];
  } else if (clickMercury) {
    selectedDetail = contentData.MercuryContent[0];
  } else if (clickVenus) {
    selectedDetail = contentData.VenusContent[0];
  } else if (clickEarth) {
    selectedDetail = contentData.EarthContent[0];
  } else if (clickMoon) {
    selectedDetail = contentData.EarthContent[1];
  } else if (clickMars) {
    selectedDetail = contentData.MarsContent[0];
  } else if (clickPhobos) {
    selectedDetail = contentData.MarsContent[1];
  } else if (clickDeimos) {
    selectedDetail = contentData.MarsContent[2];
  } else if (clickJupiter) {
    selectedDetail = contentData.JupiterContent[0];
  } else if (clickIo) {
    selectedDetail = contentData.JupiterContent[1];
  } else if (clickEuropa) {
    selectedDetail = contentData.JupiterContent[2];
  } else if (clickGanymede) {
    selectedDetail = contentData.JupiterContent[3];
  } else if (clickCallisto) {
    selectedDetail = contentData.JupiterContent[4];
  } else if (clickSaturn) {
    selectedDetail = contentData.SaturnContent[0];
  } else if (clickEnceladus) {
    selectedDetail = contentData.SaturnContent[1];
  } else if (clickTitan) {
    selectedDetail = contentData.SaturnContent[2];
  } else if (clickUranus) {
    selectedDetail = contentData.UranusContent[0];
  } else if (clickTitania) {
    selectedDetail = contentData.UranusContent[1];
  } else if (clickNeptune) {
    selectedDetail = contentData.NeptuneContent[0];
  } else if (clickTriton) {
    selectedDetail = contentData.NeptuneContent[1];
  }

  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText((prevText) => prevText + selectedDetail[index]);
      index++;
      if (index === selectedDetail.length) {
        clearInterval(interval);
      }
    }, 50);
    
    return () => {
      clearInterval(interval);
    };
  }, [
    clickSun, 
    clickMercury, 
    clickVenus, 
    clickEarth, 
    clickMoon, 
    clickMars, 
    clickPhobos,
    clickDeimos,
    clickJupiter,
    clickIo,
    clickEuropa,
    clickGanymede,
    clickCallisto,
    clickSaturn,
    clickEnceladus,
    clickTitan,
    clickUranus,
    clickTitania,
    clickNeptune,
    clickTriton    
  ]);

  return (
    <ContentFrame>
      {displayText}
    </ContentFrame>
  )
}

export default ExplainContent