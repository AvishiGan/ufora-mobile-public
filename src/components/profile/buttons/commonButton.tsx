import React from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { styles } from "./styles";
import { RegularNormal } from "../../../constants";

type ButtonProps = TouchableOpacityProps & {
  onPress: () => void;
  // title: string;
  title: React.ReactNode; // Updated type
};

/**
 *
 * @param param0 | ButtonProps
 * @returns | This component returns the common button of the user profile
 */
const ProfileButton: React.FC<ButtonProps> = ({ onPress, title }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={styles.buttonContainer}
  >
    <View style={styles.buttonContent}>
      {typeof title === "string" ? (
        <RegularNormal>{title}</RegularNormal>
      ) : (
        title // Render icon or any other ReactNode
      )}
    </View>
  </TouchableOpacity>
);

ProfileButton.defaultProps = {
  activeOpacity: 0.8,
};

export default ProfileButton;
