import React from "react";
import { Svg, Path } from "react-native-svg";

const ShareIcon: React.FC<{ size: number; strokeColor: string }> = ({
  size,
  strokeColor,
}) => (
  <Svg width={size} height={size} viewBox="0 0 17 17" fill="none">
    <Path
      d="M12.25 5.83334C13.3546 5.83334 14.25 4.93791 14.25 3.83334C14.25 2.72877 13.3546 1.83334 12.25 1.83334C11.1454 1.83334 10.25 2.72877 10.25 3.83334C10.25 4.93791 11.1454 5.83334 12.25 5.83334Z"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4.25 10.5C5.35457 10.5 6.25 9.60457 6.25 8.5C6.25 7.39543 5.35457 6.5 4.25 6.5C3.14543 6.5 2.25 7.39543 2.25 8.5C2.25 9.60457 3.14543 10.5 4.25 10.5Z"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.25 15.1667C13.3546 15.1667 14.25 14.2713 14.25 13.1667C14.25 12.0621 13.3546 11.1667 12.25 11.1667C11.1454 11.1667 10.25 12.0621 10.25 13.1667C10.25 14.2713 11.1454 15.1667 12.25 15.1667Z"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.97667 9.50666L10.53 12.16M10.5233 4.84L5.97667 7.49333"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ShareIcon;
