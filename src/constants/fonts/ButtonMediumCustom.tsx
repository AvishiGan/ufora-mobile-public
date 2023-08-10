import React from "react";
import { TouchableOpacity, ViewStyle } from "react-native";
import CustomText from "./CustomText"; // Import the custom Text component

type ButtonMediumProps = {
  children: any;
  color?: string; // Accept the color prop
  onPress?: () => void;
  style?: ViewStyle;
};

const ButtonMediumCustom: React.FC<ButtonMediumProps> = ({
  children,
  color,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <CustomText color={color}>{children}</CustomText>
    </TouchableOpacity>
  );
};

export default ButtonMediumCustom;
