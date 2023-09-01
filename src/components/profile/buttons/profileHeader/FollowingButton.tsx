import React from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { COLORS, RegularNormal } from "../../../../constants";
import { styles } from "../../styles";
import { CheckCircle } from "lucide-react-native";

type ButtonProps = TouchableOpacityProps & {
  onPress: () => void;
};

const FollowingButton: React.FC<ButtonProps> = ({ onPress }) => (
  <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
    <View style={styles.profileHeaderButtonContainer}>
      <View style={styles.buttonContent}>
        <CheckCircle size={16} color={COLORS.brandBlue} />
        <RegularNormal>Following</RegularNormal>
      </View>
    </View>
  </TouchableOpacity>
);

FollowingButton.defaultProps = {
  activeOpacity: 0.8,
};

export default FollowingButton;
