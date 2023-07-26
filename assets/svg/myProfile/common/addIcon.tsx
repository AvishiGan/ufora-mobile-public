import React from "react";
import { Svg, Path } from "react-native-svg";

type AddIconProps = {
  width: number;
  height: number;
};

const AddIcon: React.FC<AddIconProps> = ({ width, height }) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#87929D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 8V16M8 12H16"
      stroke="#87929D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default AddIcon;
