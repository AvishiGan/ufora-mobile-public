import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

interface CrossIconProps {
  size?: number;
  color?: string;
}

const CrossIcon: React.FC<CrossIconProps> = ({
  size = 25,
  color = "black",
}) => {
  return (
    <View>
      <Svg width={size} height={size} viewBox="0 0 25 24" fill="none">
        <Path
          d="M18.5 6L6.5 18M6.5 6L18.5 18"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default CrossIcon;
