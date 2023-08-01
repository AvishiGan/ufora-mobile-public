import React from "react";
import { Svg, Path } from "react-native-svg";

interface CakeIconProps {
  width: number;
  height: number;
  color: string;
}

const CakeIcon: React.FC<CakeIconProps> = ({ width, height, color }) => (
  <Svg width={width} height={height} viewBox="0 0 31 30" fill="none">
    <Path
      d="M25.5 26.25V16.25C25.5 15.587 25.2366 14.9511 24.7678 14.4822C24.2989 14.0134 23.663 13.75 23 13.75H8C7.33696 13.75 6.70107 14.0134 6.23223 14.4822C5.76339 14.9511 5.5 15.587 5.5 16.25V26.25"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.5 20C5.5 20 6.125 18.75 8 18.75C9.875 18.75 11.125 21.25 13 21.25C14.875 21.25 16.125 18.75 18 18.75C19.875 18.75 21.125 21.25 23 21.25C24.875 21.25 25.5 20 25.5 20M3 26.25H28"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.25 10V12.5M15.5 10V12.5M21.75 10V12.5M9.25 5H9.2625M15.5 5H15.5125M21.75 5H21.7625"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CakeIcon;
