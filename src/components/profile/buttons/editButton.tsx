import React from "react";
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  View,
} from "react-native";
import { styles } from "./styles";
import { EditIcon } from "../../../../assets/svg";

type ButtonProps = TouchableOpacityProps & {
  onPress: () => void;
};

/**
 *
 * @param param0 | ButtonProps
 * @returns | This component returns the edit button of the user profile
 */
const EditButton: React.FC<ButtonProps> = ({ onPress }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={styles.buttonContainer}
  >
    <View style={styles.buttonContent}>
      <EditIcon size={17} fillColor="#111111" strokeColor="#4F4E4E" />
      <Text style={styles.buttonText}>Edit Profile</Text>
    </View>
  </TouchableOpacity>
);

EditButton.defaultProps = {
  activeOpacity: 0.8,
};

export default EditButton;
