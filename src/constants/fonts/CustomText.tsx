import React from "react";
import { Text, TextProps } from "react-native";

type CustomTextProps = TextProps & {
  color?: string;
};

const CustomText: React.FC<CustomTextProps> = ({
  children,
  style,
  color,
  ...rest
}) => {
  const combinedStyle = [{ color }, style]; // Merge the color prop with existing styles
  return (
    <Text style={combinedStyle} {...rest}>
      {children}
    </Text>
  );
};

export default CustomText;
