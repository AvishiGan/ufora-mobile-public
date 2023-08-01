import React from "react";
import { Svg, Path } from "react-native-svg";

type PostShareIconProps = {
  width: number;
  height: number;
  strokeColor?: string; // Optional stroke color for the SVG paths
};

const PostShareIcon: React.FC<PostShareIconProps> = ({
  width,
  height,
  strokeColor = "#87929D",
}) => (
  <Svg width={width} height={height} viewBox="0 0 19 18" fill="none">
    <Path
      d="M14 6C15.2426 6 16.25 4.99264 16.25 3.75C16.25 2.50736 15.2426 1.5 14 1.5C12.7574 1.5 11.75 2.50736 11.75 3.75C11.75 4.99264 12.7574 6 14 6Z"
      stroke={strokeColor} // Use the provided stroke color or default to "#87929D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5 11.25C6.24264 11.25 7.25 10.2426 7.25 9C7.25 7.75736 6.24264 6.75 5 6.75C3.75736 6.75 2.75 7.75736 2.75 9C2.75 10.2426 3.75736 11.25 5 11.25Z"
      stroke={strokeColor} // Use the provided stroke color or default to "#87929D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14 16.5C15.2426 16.5 16.25 15.4926 16.25 14.25C16.25 13.0074 15.2426 12 14 12C12.7574 12 11.75 13.0074 11.75 14.25C11.75 15.4926 12.7574 16.5 14 16.5Z"
      stroke={strokeColor} // Use the provided stroke color or default to "#87929D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.9425 10.1326L12.065 13.1176M12.0575 4.88257L6.9425 7.86757"
      stroke={strokeColor} // Use the provided stroke color or default to "#87929D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default PostShareIcon;
