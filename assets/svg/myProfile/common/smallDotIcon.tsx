import React from "react";
import { Svg, Circle } from "react-native-svg";

type SmallDotIconProps = {
  width: number;
  height: number;
  color: string;
};

const SmallDotIcon: React.FC<SmallDotIconProps> = ({
  width,
  height,
  color,
}) => (
  <Svg width={width} height={height} viewBox="0 0 3 2" fill="none">
    <Circle cx="1.5" cy="1" r="1" fill={color} />
  </Svg>
);

export default SmallDotIcon;
