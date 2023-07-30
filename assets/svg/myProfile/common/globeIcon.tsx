import React from "react";
import { Svg, G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const GlobeIcon: React.FC<{ width: number; height: number; color: string }> = ({
  width,
  height,
  color,
}) => (
  <Svg width={width} height={height} viewBox="0 0 11 10" fill="none">
    <G clipPath="url(#clip0_373_428)">
      <Path
        d="M5.50001 9.16665C7.8012 9.16665 9.66668 7.30117 9.66668 4.99998C9.66668 2.69879 7.8012 0.833313 5.50001 0.833313C3.19882 0.833313 1.33334 2.69879 1.33334 4.99998C1.33334 7.30117 3.19882 9.16665 5.50001 9.16665Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.33334 4.99998H9.66668M5.50001 0.833313C6.54221 1.97429 7.13449 3.45499 7.16668 4.99998C7.13449 6.54497 6.54221 8.02567 5.50001 9.16665C4.45781 8.02567 3.86553 6.54497 3.83334 4.99998C3.86553 3.45499 4.45781 1.97429 5.50001 0.833313Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_373_428">
        <Rect width="10" height="10" fill="white" transform="translate(0.5)" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default GlobeIcon;
