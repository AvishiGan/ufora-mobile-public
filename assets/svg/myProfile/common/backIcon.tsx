import React from "react";
import { Svg, Path } from "react-native-svg";

const BackIcon: React.FC<{ width: number; height: number; color: string }> = ({
  width,
  height,
  color,
}) => (
  <Svg width={width} height={height} viewBox="0 0 8 14" fill="none">
    <Path
      d="M7 13L1 7L7 1"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default BackIcon;
