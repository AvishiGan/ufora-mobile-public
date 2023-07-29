import React from "react";
import { Svg, Circle } from "react-native-svg";

const DotIcon: React.FC<{ size: number; color: string }> = ({
  size,
  color,
}) => (
  <Svg width={size} height={size} viewBox="0 0 5 6" fill="none">
    <Circle cx="2.5" cy="3" r="2.5" fill={color} />
  </Svg>
);

export default DotIcon;
