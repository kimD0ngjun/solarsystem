import styled from "styled-components";
import { useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import React from "react";

interface PlanetData {
  name: string;
  mass: string;
  rotationPeriod: string;
  orbitalPeriod: string;
  atmosphericPressure: string;
  surfaceGravity: string;
}

interface PlanetContent {
  [key: string]: PlanetData[];
}

const planetData: PlanetContent = {
  SunContent: [
    {
      name: `태양`,
      mass: `1.98855 × 10³⁰ kg`,
      rotationPeriod: `약 27일 6시간`,
      orbitalPeriod: `없음`,
      atmosphericPressure: `핵 중심부 2.65 × 10¹⁶ Pa`,
      surfaceGravity: `274.5862 m/s²`,
    }
  ],
  MercuryContent: [
    {
      name: `수성`,
      mass: `3.023 × 10²³ kg`,
      rotationPeriod: `58.646일`,
      orbitalPeriod: `87.9691일`,
      atmosphericPressure: `1/10¹⁰ bar`,
      surfaceGravity: `3.6971 m/s²`,
    },
  ],
  VenusContent: [
    {
      name: `금성`,
      mass: `4.8685 × 10²⁴ kg`,
      rotationPeriod: `243.0158일`,
      orbitalPeriod: `224.7일`,
      atmosphericPressure: `표면 9.3 Mpa`,
      surfaceGravity: `8.87 m/s²`,
    },
  ],
  EarthContent: [
    {
      name: `지구`, 
      mass: `5.9722 × 10²⁴ kg`, 
      rotationPeriod: `23시간 56분 4초`, 
      orbitalPeriod: `365.256 41일`, 
      atmosphericPressure: `101.325 kPa`, 
      surfaceGravity: `9.80665 m/s²`,
    },
    {
      name: `달`,
      mass: `7.342 x 10²² kg`,
      rotationPeriod: `조석 고정`,
      orbitalPeriod: `27일 7시간 43분 11.5초`,
      atmosphericPressure: `1/10⁸・⁵ Pa`,
      surfaceGravity: `1.62 m/s²`,
    },
  ],
  MarsContent: [
    {
      name: `화성`, 
      mass: `6.4174 × 10²³ kg`, 
      rotationPeriod: `24시간 37분 22초`, 
      orbitalPeriod: `686.971일`, 
      atmosphericPressure: `0.8 kPa`, 
      surfaceGravity: `3.68730 m/s²`,
    },
    {
      name: `포보스`,
      mass: `1.06585 × 10¹⁶ kg`,
      rotationPeriod: `조석 고정`,
      orbitalPeriod: `7시간 39분 13.8초`,
      atmosphericPressure: `없음`,
      surfaceGravity: `0.0057 m/s²`,
    },
    {
      name: `데이모스`,
      mass: `1.4762 × 10¹⁵ kg`,
      rotationPeriod: `조석 고정`,
      orbitalPeriod: `1일 6시간 18분 43.2초`,
      atmosphericPressure: `없음`,
      surfaceGravity: `0.003 m/s²`,
    },
  ],
    JupiterContent: [
      {
        name: `목성`, 
        mass: `1.899 × 10²⁷ kg`, 
        rotationPeriod: `약 9시간 55분`, 
        orbitalPeriod: `4332.59일`, 
        atmosphericPressure: `20 ~ 200 kPa (구름층 기준)`, 
        surfaceGravity: `24.791211 m/s²`,
      },
      {
        name: `이오`,
        mass: `(8.931938±0.000018) × 10²² kg`,
        rotationPeriod: `조석 고정`,
        orbitalPeriod: `1.7691378일`,
        atmosphericPressure: `500 µPa`,
        surfaceGravity: `1.796 m/s²`,
      },
      {
        name: `유로파`,
        mass: `(4.799844 ± 0.000013) × 10²² kg`,
        rotationPeriod: `조석 고정`,
        orbitalPeriod: `3.551181일`,
        atmosphericPressure: `0.1 µPa `,
        surfaceGravity: `1.314 m/s²`,
      },
      {
        name: `가니메데`,
        mass: `1.4819 × 10²³ kg`,
        rotationPeriod: `조석 고정`,
        orbitalPeriod: `7.15455296일`,
        atmosphericPressure: `0.2~1.2 µPa`,
        surfaceGravity: `1.428 m/s²`,
      },
      {
        name: `칼리스토`,
        mass: `(1.075938 ± 0.000137) × 10²³ kg`,
        rotationPeriod: `조석 고정`,
        orbitalPeriod: `16.6890184일`,
        atmosphericPressure: `0.75 µPa`,
        surfaceGravity: `1.235 m/s²`,
      },
  ],
  SaturnContent: [
    {
      name: `토성`, 
      mass: `5.6846 × 10²⁶ kg`, 
      rotationPeriod: `10시간 33분 38초`, 
      orbitalPeriod: `29.4571년`, 
      atmosphericPressure: `50 ~ 200 kPa (대기 상층부 기준)`, 
      surfaceGravity: `10.44408 m/s²`,
    },
    {
      name: `엔셀라두스`,
      mass: `(1.08022±0.00101) × 10²⁰ kg`,
      rotationPeriod: `조석 고정`,
      orbitalPeriod: `1.370218일`,
      atmosphericPressure: `매우 약함`,
      surfaceGravity: `0.0113 m/s²`,
    },
    {
      name: `타이탄`,
      mass: `(1.3452 ± 0.0002) × 10²³ kg`,
      rotationPeriod: `조석 고정`,
      orbitalPeriod: `15.945일`,
      atmosphericPressure: `146.7 kPa`,
      surfaceGravity: `1.352 m/s²`,
    },
  ],
  UranusContent: [
    {
      name: `천왕성`, 
      mass: `8.6832 × 10²⁵ kg`, 
      rotationPeriod: `약 17시간 14분 24초`, 
      orbitalPeriod: `84.0205년`, 
      atmosphericPressure: `120 kPa`, 
      surfaceGravity: `8.68869 m/s²`,
    },
    {
      name: `티타니아`,
      mass: `(3.527 ± 0.09) x 10²¹ kg`,
      rotationPeriod: `조석 고정`,
      orbitalPeriod: `8.706234일`,
      atmosphericPressure: `매우 약함`,
      surfaceGravity: `0.379 m/s²`,
    },
  ],
  NeptuneContent: [
    {
      name: `해왕성`, 
      mass: `1.02413 × 10²⁶ kg`, 
      rotationPeriod: `16시간 6분 36초`, 
      orbitalPeriod: `164.8년`, 
      atmosphericPressure: `100 MPa`, 
      surfaceGravity: `11.15 m/s²`,
    },
    {
      name: `트리톤`,
      mass: `2.14 x 10²² kg`,
      rotationPeriod: `조석 고정`,
      orbitalPeriod: `5.876854일`,
      atmosphericPressure: `1.4 ~ 1.9 Pa`,
      surfaceGravity: `0.779 m/s²`,
    },
  ],
};

const ExplainTitleText = styled.div`
  width: 100%;
  height: 100%;
  /* border: 2px solid yellow; */
  font-size: 30px;
  padding-left: 15rem;
  white-space: nowrap;
  grid-column-start: 2;
	grid-column-end: 3;
  grid-row-start: 1;
	grid-row-end: 2;

  @media (max-width: 1200px) {
    grid-column-start: 1;
	  grid-column-end: 2;
    grid-row-start: 2;
	  grid-row-end: 3;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;

  ol {
    list-style: circle;
    padding-left: 25rem;
    margin-top: 1rem;
  }

  li {
    font-size: 15px;
    margin-bottom: 10rem;
  }
`

const ExplainTitle = () => {
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
  const clickGanymede = useAppSelector((state: RootState) => state.jupiterContent.Ganymede);
  const clickCallisto = useAppSelector((state: RootState) => state.jupiterContent.Callisto);
  const clickSaturn = useAppSelector((state: RootState) => state.saturnContent.Saturn);
  const clickEnceladus = useAppSelector((state: RootState) => state.saturnContent.Enceladus);
  const clickTitan = useAppSelector((state: RootState) => state.saturnContent.Titan);
  const clickUranus = useAppSelector((state: RootState) => state.uranusContent.Uranus);
  const clickTitania = useAppSelector((state: RootState) => state.uranusContent.Titania);
  const clickNeptune = useAppSelector((state: RootState) => state.neptuneContent.Neptune);
  const clickTriton = useAppSelector((state: RootState) => state.neptuneContent.Triton);

  let selectedData: PlanetData[] = [];

  if (clickSun) {
    selectedData = planetData.SunContent;
  } else if (clickMercury) {
    selectedData = planetData.MercuryContent;
  } else if (clickVenus) {
    selectedData = planetData.VenusContent;
  } else if (clickEarth) {
    selectedData = [planetData.EarthContent[0]];
  } else if (clickMoon) {
    selectedData = [planetData.EarthContent[1]];
  } else if (clickMars) {
    selectedData = [planetData.MarsContent[0]];
  } else if (clickPhobos) {
    selectedData = [planetData.MarsContent[1]];
  } else if (clickDeimos) {
    selectedData = [planetData.MarsContent[2]];
  } else if (clickJupiter) {
    selectedData = [planetData.JupiterContent[0]];
  } else if (clickIo) {
    selectedData = [planetData.JupiterContent[1]];
  } else if (clickEuropa) {
    selectedData = [planetData.JupiterContent[2]];
  } else if (clickGanymede) {
    selectedData = [planetData.JupiterContent[3]];
  } else if (clickCallisto) {
    selectedData = [planetData.JupiterContent[4]];
  } else if (clickSaturn) {
    selectedData = [planetData.SaturnContent[0]];
  } else if (clickEnceladus) {
    selectedData = [planetData.SaturnContent[1]];
  } else if (clickTitan) {
    selectedData = [planetData.SaturnContent[2]];
  } else if (clickUranus) {
    selectedData = [planetData.UranusContent[0]];
  } else if (clickTitania) {
    selectedData = [planetData.UranusContent[1]];
  } else if (clickNeptune) {
    selectedData = [planetData.NeptuneContent[0]];
  } else if (clickTriton) {
    selectedData = [planetData.NeptuneContent[1]];
  }

  return (
    <ExplainTitleText>
      <ol>
      {selectedData.map((planet, index) => (
          <React.Fragment key={index}>
            <li>이름 : {planet.name}</li>
            <li>질량 : {planet.mass}</li>
            <li>자전 주기 : {planet.rotationPeriod}</li>
            <li>공전 주기 : {planet.orbitalPeriod}</li>
            <li>대기압 : {planet.atmosphericPressure}</li>
            <li>표면 중력 : {planet.surfaceGravity}</li>
          </React.Fragment>
        ))}
      </ol>
    </ExplainTitleText>
  )
}

export default ExplainTitle;