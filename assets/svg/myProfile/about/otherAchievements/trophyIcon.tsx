import React from "react";
import { Svg, Path, Rect } from "react-native-svg";

interface TrophyIconProps {
  width: number;
  height: number;
  color: string;
}

const TrophyIcon: React.FC<TrophyIconProps> = ({ width, height, color }) => (
  <Svg width={width} height={height} viewBox="0 0 41 40" fill="none">
    <Path
      d="M14.5 17H13C12.337 17 11.7011 16.7366 11.2322 16.2678C10.7634 15.7989 10.5 15.163 10.5 14.5C10.5 13.837 10.7634 13.2011 11.2322 12.7322C11.7011 12.2634 12.337 12 13 12H14.5M26.5 17H28C28.663 17 29.2989 16.7366 29.7678 16.2678C30.2366 15.7989 30.5 15.163 30.5 14.5C30.5 13.837 30.2366 13.2011 29.7678 12.7322C29.2989 12.2634 28.663 12 28 12H26.5M12.5 30H28.5M18.5 22.66V25C18.5 25.55 18.03 25.98 17.53 26.21C16.35 26.75 15.5 28.24 15.5 30M22.5 22.66V25C22.5 25.55 22.97 25.98 23.47 26.21C24.65 26.75 25.5 28.24 25.5 30"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M26.5 10H14.5V17C14.5 18.5913 15.1321 20.1174 16.2574 21.2426C17.3826 22.3679 18.9087 23 20.5 23C22.0913 23 23.6174 22.3679 24.7426 21.2426C25.8679 20.1174 26.5 18.5913 26.5 17V10Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Rect
      x="1"
      y="0.5"
      width="39"
      height="39"
      rx="19.5"
      stroke={color}
      strokeWidth={1.5}
    />
  </Svg>
);

export default TrophyIcon;
