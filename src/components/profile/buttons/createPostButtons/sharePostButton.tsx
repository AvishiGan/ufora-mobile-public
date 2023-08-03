import React from "react";
import CustomButton from "./customButton";
import { Send } from "lucide-react-native";
import { COLORS } from "../../../../constants";

type ShareButtonProps = {
  onPress: () => void;
};

const SharePostButton: React.FC<ShareButtonProps> = ({ onPress }) => {
  return (
    <CustomButton
      onPress={onPress}
      icon={<Send size={30} color={COLORS.brandGrey} />}
      title="Share Profile"
    />
  );
};

export default SharePostButton;
