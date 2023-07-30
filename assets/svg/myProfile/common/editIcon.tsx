import React from "react";
import { Svg, Path, G, Defs, ClipPath, Rect } from "react-native-svg";

const EditIcon: React.FC<{
  size: number;
  fillColor: string;
  strokeColor: string;
}> = ({ size, fillColor, strokeColor }) => (
  <Svg width={size} height={size} viewBox="0 0 17 17" fill="none">
    <G clipPath="url(#clip0_1_379)">
      <Path
        d="M7.58333 3.16666H2.91667C2.56305 3.16666 2.22391 3.30713 1.97386 3.55718C1.72381 3.80723 1.58333 4.14637 1.58333 4.49999V13.8333C1.58333 14.1869 1.72381 14.5261 1.97386 14.7761C2.22391 15.0262 2.56305 15.1667 2.91667 15.1667H12.25C12.6036 15.1667 12.9428 15.0262 13.1928 14.7761C13.4429 14.5261 13.5833 14.1869 13.5833 13.8333V9.16666"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.5833 2.16665C12.8485 1.90144 13.2083 1.75244 13.5833 1.75244C13.9584 1.75244 14.3181 1.90144 14.5833 2.16665C14.8485 2.43187 14.9975 2.79158 14.9975 3.16665C14.9975 3.54173 14.8485 3.90144 14.5833 4.16665L8.25 10.5L5.58333 11.1667L6.25 8.49999L12.5833 2.16665Z"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1_379">
        <Rect
          width="16"
          height="16"
          fill="white"
          transform="translate(0.25 0.5)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export default EditIcon;
