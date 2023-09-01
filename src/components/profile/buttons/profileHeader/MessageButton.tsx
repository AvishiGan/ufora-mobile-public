import React from "react";
import { MessageSquare } from "lucide-react-native";
import CustomButton from "./CustomButton";
import { COLORS } from "../../../../constants";

type ShareButtonProps = {
  onPress: () => void;
};

const EditButton: React.FC<ShareButtonProps> = ({ onPress }) => {
  return (
    <CustomButton
      onPress={onPress}
      icon={<MessageSquare size={16} color={COLORS.brandGrey} />}
      title="Message"
    />
  );
};

export default EditButton;
