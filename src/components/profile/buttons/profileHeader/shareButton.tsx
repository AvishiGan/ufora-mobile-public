import React from "react";
import { Send } from "lucide-react-native";
import CustomButton from "./CustomButton";

type ShareButtonProps = {
  onPress: () => void;
};

const ShareButton: React.FC<ShareButtonProps> = ({ onPress }) => {
  return (
    <CustomButton
      onPress={onPress}
      icon={<Send size={17} strokeColor="#4F4E4E" />}
      title="Share Profile"
    />
  );
};

export default ShareButton;
