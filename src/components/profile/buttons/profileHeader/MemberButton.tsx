import React from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { COLORS, RegularNormal } from "../../../../constants";
import { styles } from "../../styles";
import { UserCheck } from "lucide-react-native";

type ButtonProps = TouchableOpacityProps & {
  onPress: () => void;
};

const MemberButton: React.FC<ButtonProps> = ({ onPress }) => (
  <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
    <View style={styles.profileHeaderButtonContainer}>
      <View style={styles.buttonContent}>
        <UserCheck size={16} color={COLORS.formFieldOutline} />
        <RegularNormal>Member</RegularNormal>
      </View>
    </View>
  </TouchableOpacity>
);

MemberButton.defaultProps = {
  activeOpacity: 0.8,
};

export default MemberButton;
