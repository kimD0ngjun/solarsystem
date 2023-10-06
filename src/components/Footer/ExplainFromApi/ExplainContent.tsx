import { useState, useEffect, useRef, useMemo } from "react";
import styled from "styled-components";
import contentData from "./utility/DetailDummyData";
import { useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";

const ContentFrame = styled.div`
  width: 100%;
  height: 100%;
  /* border: 2px solid blue; */
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
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [displayText, setDisplayText] = useState<string>('');

  const isChanged = useAppSelector((state:RootState) => state.changeWidth.isChanged);

  const planetContents = useMemo(() => ({
    Sun: contentData.SunContent[0],
    Mercury: contentData.MercuryContent[0],
    Venus: contentData.VenusContent[0],
    Earth: contentData.EarthContent[0],
    Moon: contentData.EarthContent[1],
    Mars: contentData.MarsContent[0],
    Phobos: contentData.MarsContent[1],
    Deimos: contentData.MarsContent[2],
    Jupiter: contentData.JupiterContent[0],
    Io: contentData.JupiterContent[1],
    Europa: contentData.JupiterContent[2],
    Ganymede: contentData.JupiterContent[3],
    Callisto: contentData.JupiterContent[4],
    Saturn: contentData.SaturnContent[0],
    Enceladus: contentData.SaturnContent[1],
    Titan: contentData.SaturnContent[2],
    Uranus: contentData.UranusContent[0],
    Titania: contentData.UranusContent[1],
    Neptune: contentData.NeptuneContent[0],
    Triton: contentData.NeptuneContent[1],
  }), []);

  const selectedPlanet = useAppSelector((state: RootState) => {
    if (state.sunContent.Sun) return 'Sun';
    if (state.mercuryContent.Mercury) return 'Mercury';
    if (state.venusContent.Venus) return 'Venus';
    if (state.earthContent.Earth) return 'Earth';
    if (state.earthContent.Moon) return 'Moon';
    if (state.marsContent.Mars) return 'Mars';
    if (state.marsContent.Phobos) return 'Phobos';
    if (state.marsContent.Deimos) return 'Deimos';
    if (state.jupiterContent.Jupiter) return 'Jupiter';
    if (state.jupiterContent.Io) return 'Io';
    if (state.jupiterContent.Europa) return 'Europa';
    if (state.jupiterContent.Ganymede) return 'Ganymede';
    if (state.jupiterContent.Callisto) return 'Callisto';
    if (state.saturnContent.Saturn) return 'Saturn';
    if (state.saturnContent.Enceladus) return 'Enceladus';
    if (state.saturnContent.Titan) return 'Titan';
    if (state.uranusContent.Uranus) return 'Uranus';
    if (state.uranusContent.Titania) return 'Titania';
    if (state.neptuneContent.Neptune) return 'Neptune';
    if (state.neptuneContent.Triton) return 'Triton';
    return '';
  });

  useEffect(() => {
    let typingInterval: NodeJS.Timeout;

    if (selectedPlanet && isChanged) {
      const description = planetContents[selectedPlanet];
      let index = 0;

      setDisplayText('');

      typingInterval = setInterval(() => {
        index++;
        setDisplayText(prevText => prevText + description[index]);
        if (contentRef.current) {
          contentRef.current.scrollTop = contentRef.current.scrollHeight;}
        if (index === description.length - 1) {
          clearInterval(typingInterval);
        }
      }, 25);
    } else {
      setDisplayText('');
    }

    return () => {
      clearInterval(typingInterval);
    };
  }, [selectedPlanet, planetContents, isChanged]);

  return (
    <ContentFrame ref={contentRef}>
      {displayText}
    </ContentFrame>
  );
};

export default ExplainContent;