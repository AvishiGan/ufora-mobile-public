import React from "react";
import { Svg, Path } from "react-native-svg";

const MoreIcon: React.FC<{ width: number; height: number; color: string }> = ({
  width,
  height,
  color,
}) => (
  <Svg width={width} height={height} viewBox="0 0 25 24" fill="none">
    <Path
      d="M12.5 13C13.0523 13 13.5 12.5523 13.5 12C13.5 11.4477 13.0523 11 12.5 11C11.9477 11 11.5 11.4477 11.5 12C11.5 12.5523 11.9477 13 12.5 13Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19.5 13C20.0523 13 20.5 12.5523 20.5 12C20.5 11.4477 20.0523 11 19.5 11C18.9477 11 18.5 11.4477 18.5 12C18.5 12.5523 18.9477 13 19.5 13Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.5 13C6.05228 13 6.5 12.5523 6.5 12C6.5 11.4477 6.05228 11 5.5 11C4.94772 11 4.5 11.4477 4.5 12C4.5 12.5523 4.94772 13 5.5 13Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default MoreIcon;
