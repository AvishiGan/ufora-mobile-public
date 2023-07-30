import React from "react";
import { Svg, Path } from "react-native-svg";

type CommentIconProps = {
  width: number;
  height: number;
  strokeColor?: string; // Optional stroke color for the SVG path
};

const CommentIcon: React.FC<CommentIconProps> = ({
  width,
  height,
  strokeColor = "#87929D",
}) => (
  <Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
    <Path
      d="M2.25 15.7499L3.675 11.4749C2.99785 10.121 2.82459 8.57033 3.18623 7.10035C3.54787 5.63037 4.4208 4.33706 5.64882 3.45185C6.87683 2.56664 8.37978 2.14731 9.8887 2.2689C11.3976 2.39049 12.814 3.04507 13.8845 4.11549C14.9549 5.18592 15.6095 6.60233 15.731 8.11125C15.8526 9.62017 15.4333 11.1231 14.5481 12.3511C13.6629 13.5791 12.3696 14.4521 10.8996 14.8137C9.42961 15.1754 7.87891 15.0021 6.525 14.3249L2.25 15.7499Z"
      stroke={strokeColor} // Use the provided stroke color or default to "#87929D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CommentIcon;
