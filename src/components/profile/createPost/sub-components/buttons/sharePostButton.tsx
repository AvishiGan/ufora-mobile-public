import React from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { styles } from "./styles";
import { Send } from "lucide-react-native";
import { ButtonMedium } from "../../../../../constants";
import { COLORS } from "../../../../../constants";

const EditButton: React.FC<ButtonProps> = ({ onPress }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={styles.buttonContainer}
  >
    <View style={styles.buttonContent}>
      <Send size={30} color={COLORS.brandGrey} fill={COLORS.brandGrey} />
      <ButtonMedium>Share Post</ButtonMedium>
    </View>
  </TouchableOpacity>
);

type ButtonProps = TouchableOpacityProps & {
  onPress: () => void;
};

EditButton.defaultProps = {
  activeOpacity: 0.8,
};

export default EditButton;
