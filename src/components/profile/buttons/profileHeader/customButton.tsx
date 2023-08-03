import React from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { RegularNormal } from "../../../../constants";
import { styles } from "../styles";

type ButtonProps = TouchableOpacityProps & {
  onPress: () => void;
  icon: React.ReactNode;
  title: string;
};

const CustomButton: React.FC<ButtonProps> = ({ onPress, icon, title }) => (
  <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
    <View style={styles.buttonContainer}>
      <View style={styles.buttonContent}>
        {icon}
        <RegularNormal>{title}</RegularNormal>
      </View>
    </View>
  </TouchableOpacity>
);

CustomButton.defaultProps = {
  activeOpacity: 0.8,
};

export default CustomButton;
