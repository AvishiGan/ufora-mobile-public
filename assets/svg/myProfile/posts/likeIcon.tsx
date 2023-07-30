import React from "react";
import { Svg, Path } from "react-native-svg";

type LikeIconProps = {
  width: number;
  height: number;
  strokeColor?: string; // Optional stroke color for the SVG paths
};

const LikeIcon: React.FC<LikeIconProps> = ({
  width,
  height,
  strokeColor = "#87929D",
}) => (
  <Svg width={width} height={height} viewBox="0 0 19 18" fill="none">
    <Path
      d="M5.75 7.5V16.5M11.75 4.41L11 7.5H15.3725C15.6054 7.5 15.835 7.55422 16.0433 7.65836C16.2516 7.7625 16.4328 7.91371 16.5725 8.1C16.7122 8.28629 16.8066 8.50256 16.8483 8.73167C16.89 8.96078 16.8777 9.19645 16.8125 9.42L15.065 15.42C14.9741 15.7316 14.7846 16.0053 14.525 16.2C14.2654 16.3947 13.9496 16.5 13.625 16.5H3.5C3.10218 16.5 2.72064 16.342 2.43934 16.0607C2.15804 15.7794 2 15.3978 2 15V9C2 8.60218 2.15804 8.22065 2.43934 7.93934C2.72064 7.65804 3.10218 7.5 3.5 7.5H5.57C5.84906 7.49985 6.12255 7.42186 6.35972 7.27479C6.59688 7.12772 6.78832 6.91741 6.9125 6.6675L9.5 1.5C9.85368 1.50438 10.2018 1.58863 10.5184 1.74645C10.8349 1.90427 11.1117 2.13158 11.3281 2.4114C11.5444 2.69122 11.6947 3.01632 11.7678 3.3624C11.8409 3.70848 11.8348 4.0666 11.75 4.41Z"
      stroke={strokeColor} // Use the provided stroke color or default to "#87929D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default LikeIcon;
