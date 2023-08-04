import React from "react";
import { Edit } from "lucide-react-native";
import CustomButton from "./CustomButton";

type ShareButtonProps = {
  onPress: () => void;
};

const EditButton: React.FC<ShareButtonProps> = ({ onPress }) => {
  return (
    <CustomButton
      onPress={onPress}
      icon={<Edit size={17} strokeColor="#4F4E4E" />}
      title="Share Profile"
    />
  );
};

export default EditButton;
