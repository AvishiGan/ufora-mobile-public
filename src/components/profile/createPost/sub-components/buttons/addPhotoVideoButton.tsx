import React from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { styles } from "./styles";
import { EditIcon } from "../../../../assets/svg";
import { RegularNormal } from "../../../constants";
import { send } from "lucide-react-native";

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
      {/* <EditIcon size={17} fillColor="#111111" strokeColor="#4F4E4E" /> */}
      {/* <send color="red" size={30} />; */}
      <RegularNormal>Edit Profile</RegularNormal>
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
