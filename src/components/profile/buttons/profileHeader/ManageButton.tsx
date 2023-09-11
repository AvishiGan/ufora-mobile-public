import React from "react";
import { Settings } from "lucide-react-native";
import CustomButton from "./CustomButton";
import { COLORS } from "../../../../constants";

type ShareButtonProps = {
  onPress: () => void;
};

const ManageButton: React.FC<ShareButtonProps> = ({ onPress }) => {
  return (
    <CustomButton
      onPress={onPress}
      icon={<Settings size={16} color={COLORS.brandGrey} />}
      title="Manage"
    />
  );
};

export default ManageButton;