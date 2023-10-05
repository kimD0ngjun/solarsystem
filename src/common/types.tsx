export interface PlanetProps {
  speed: number;
  radianCount: number;
  isPaused: boolean;
}

export interface MainOrbitProps {
  speed: number;
  radianCount: number;
  isPaused: boolean;
  isHovered: boolean;
  isSelected: boolean;
  isChanged: boolean;
}

export interface MainSelectProps {
  isHovered: boolean;
  isSelected: boolean;
  isChanged: boolean;
}

export interface ChangeWidthProps {
  isChangedWidth: boolean;
}

export interface HoveredData {
  Sun: boolean;
  Mercury: boolean;
  Venus: boolean;
  Earth: boolean;
  Mars: boolean;
  Jupiter: boolean;
  Saturn: boolean;
  Uranus: boolean;
  Neptune: boolean;
}
