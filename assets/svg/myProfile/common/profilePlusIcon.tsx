import React from "react";
import { Svg, Path, Rect } from "react-native-svg";

interface ProfilePlusIconProps {
  size?: number;
  color?: string;
}

const ProfilePlusIcon: React.FC<ProfilePlusIconProps> = ({
  size = 20,
  color = "#2656FF",
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Rect
        x="-4.57764e-05"
        y="-4.57764e-05"
        width={size}
        height={size}
        rx={10}
        fill={color}
      />
      <Path
        d="M9.99998 4.99998V15M4.99998 9.99998H15"
        stroke="#FEFEFE"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ProfilePlusIcon;
