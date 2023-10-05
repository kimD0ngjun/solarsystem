import styled from "styled-components";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";

const SatelliteContainer = styled.div`
  /* border: 2px solid yellow; */
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SatelliteText = styled.p`
  font-size: 12.5px;
  text-align: center;
`;

const planetName = (name: string): string => {
  const nameMap: Record<string, string> = {
    Sun: "태양",
    Mercury: "수성",
    Venus: "금성",
    Earth: "지구",
    Mars: "화성",
    Jupiter: "목성",
    Saturn: "토성",
    Uranus: "천왕성",
    Neptune: "해왕성",
  };
  return nameMap[name] || name;
};

// Record<KeyType, ValueType> : 타입스크립트에서 객체의 키 타입과 값 타입을 지정

const Satellite = () => {
  const hoverState = useAppSelector((state: RootState) => state.hover);
  // HoveredSlice에서 작성한 state 객체를 통째로 들고옴

  const getActiveSatellite = () => {
    for (const [planet, isHovered] of Object.entries(hoverState)) 
    // Object.entries는 hoverState 객체의 키, 값을 배열[planet, isHovered]로 만들어버림
    {
      if (isHovered) {
        return planet;
      }
      // 그래서 isHovered(호버 여부 판별하는 불리언)에 따라 true라면 행성 이름(planet) 반환
    }
    return null;
  };

  const activeSatellite = getActiveSatellite();

  const satelliteInfo: Record<string, string> = {
    Sun: "없음",
    Mercury: "없음",
    Venus: "없음",
    Earth: "달",
    Mars: "포보스, 데이모스",
    Jupiter: "이오, 유로파, 가니메데, 칼리스토 포함 92개",
    Saturn: "엔셀라두스, 타이탄 포함 145개",
    Uranus: "티타니아 포함 27개",
    Neptune: "트리톤 포함 14개",
  };

  // 최종적으로 Satellite 함수에서 isHovered가 true인 행성(영어이름)을 찾고,
  // 그 행성(영어이름)을 planetName 함수가 한글로 다시 변환해줌
  // 그 중간을 매개하는 변수가 activeSatellite 변수

  return (
    <SatelliteContainer>
      <SatelliteText>
        {activeSatellite ? `${planetName(activeSatellite)}의 위성(거리순) : ${satelliteInfo[activeSatellite]}` : null}
      </SatelliteText>
    </SatelliteContainer>
  );
};

export default Satellite;
