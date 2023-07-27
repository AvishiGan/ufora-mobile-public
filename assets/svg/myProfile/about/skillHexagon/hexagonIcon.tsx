import React from "react";
import { Svg, Path } from "react-native-svg";

interface HexagonIconProps {
  width: number;
  height: number;
  fillColor: string;
  strokeColor: string;
  strokeWidth: number;
}

const HexagonIcon: React.FC<HexagonIconProps> = ({
  width,
  height,
  fillColor,
  strokeColor,
  strokeWidth,
}) => (
  <Svg width={width} height={height} viewBox="0 0 118 102" fill="none">
    <Path
      d="M29.6772 101.373L0.696257 51.1769L29.6772 0.980469H87.639L116.62 51.1769L87.639 101.373H29.6772Z"
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
    />
  </Svg>
);

export default HexagonIcon;
