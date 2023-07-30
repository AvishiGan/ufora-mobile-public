import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { styles } from "./styles";
import { ShareIcon } from "../../../../assets/svg";
import { RegularNormal } from "../../../constants";

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
      <RegularNormal>Share Profile</RegularNormal>
    </View>
  </TouchableOpacity>
);

ShareButton.defaultProps = {
  activeOpacity: 0.8,
};

export default ShareButton;
