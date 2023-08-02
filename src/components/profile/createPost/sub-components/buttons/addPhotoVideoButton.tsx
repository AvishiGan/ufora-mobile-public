import React from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { styles } from "./styles";
import { COLORS } from "../../../../../constants";
import { ButtonMedium } from "../../../../../constants/fonts";
import { ImagePlus } from "lucide-react-native";

const EditButton: React.FC<ButtonProps> = ({ onPress }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={styles.buttonContainer}
  >
    <View style={styles.buttonContent}>
      <ImagePlus color={COLORS.brandGrey} size={30} fill={COLORS.brandGrey} />
      <ButtonMedium>Add Photo/Video</ButtonMedium>
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
