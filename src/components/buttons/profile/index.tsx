import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";
import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  onPress: () => void;
  title: string;
};

/**
 * 
 * @param param0 | ButtonProps
 * @returns | React.FC<ButtonProps>
 */
const ProfileButton: React.FC<ButtonProps> = ({ onPress, title }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={styles.buttonContainer}
  >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

ProfileButton.defaultProps = {
  activeOpacity: 0.8,
};

export default ProfileButton;
