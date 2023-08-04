import React from "react";
import { Edit } from "lucide-react-native";
import CustomButton from "./CustomButton";
import { COLORS } from "../../../../constants";

type ShareButtonProps = {
  onPress: () => void;
};

const EditButton: React.FC<ShareButtonProps> = ({ onPress }) => {
  return (
    <CustomButton
      onPress={onPress}
      icon={<Edit size={17} color={COLORS.brandGrey} />}
      title="Edit Profile"
    />
  );
};

export default EditButton;
