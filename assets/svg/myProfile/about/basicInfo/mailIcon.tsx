import React from "react";
import { Svg, Path } from "react-native-svg";

interface MailIconProps {
  width: number;
  height: number;
  color: string;
}

const MailIcon: React.FC<MailIconProps> = ({ width, height, color }) => (
  <Svg width={width} height={height} viewBox="0 0 31 30" fill="none">
    <Path
      d="M25.5 5H5.5C4.11929 5 3 6.11929 3 7.5V22.5C3 23.8807 4.11929 25 5.5 25H25.5C26.8807 25 28 23.8807 28 22.5V7.5C28 6.11929 26.8807 5 25.5 5Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M28 8.75L16.7875 15.875C16.4016 16.1168 15.9554 16.245 15.5 16.245C15.0446 16.245 14.5984 16.1168 14.2125 15.875L3 8.75"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default MailIcon;

