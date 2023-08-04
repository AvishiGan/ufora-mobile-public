import React from "react";
import { Share2 } from "lucide-react-native";
import CustomButton from "./CustomButton";
import { COLORS } from "../../../../constants";

type ShareButtonProps = {
  onPress: () => void;
};

const ShareButton: React.FC<ShareButtonProps> = ({ onPress }) => {
  return (
    <CustomButton
      onPress={onPress}
      icon={<Share2 size={17} color={COLORS.brandGrey} />}
      title="Share Profile"
    />
  );
};

export default ShareButton;
