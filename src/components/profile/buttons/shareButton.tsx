import React from "react";
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  View,
} from "react-native";
import { styles } from "./styles";
import { EditIcon, ShareIcon } from "../../../../assets/svg";

type ButtonProps = TouchableOpacityProps & {
  onPress: () => void;
};

/**
 *
 * @param param0 | ButtonProps
 * @returns | This component returns the share button of the user profile
 */
const ShareButton: React.FC<ButtonProps> = ({ onPress }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={styles.buttonContainer}
  >
    <View style={styles.buttonContent}>
      <ShareIcon size={17} strokeColor="#4F4E4E" />
      <Text style={styles.buttonText}>Share Profile</Text>
    </View>
  </TouchableOpacity>
);

ShareButton.defaultProps = {
  activeOpacity: 0.8,
};

export default ShareButton;
