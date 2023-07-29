import React from "react";
import { Svg, Path, Rect } from "react-native-svg";

const VerifiedIcon: React.FC<{
  size: number;
  fillColor: string;
  strokeColor: string;
}> = ({ size, fillColor, strokeColor }) => (
  <Svg width={size} height={size} viewBox="0 0 21 21" fill="none">
    <Rect x="0.5" y="0.5" width="20" height="20" rx="10" fill={fillColor} />
    <Path
      d="M13.5 8.5L9.375 12.5L7.5 10.6818"
      stroke={strokeColor}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default VerifiedIcon;
