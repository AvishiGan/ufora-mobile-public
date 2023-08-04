import React from "react";
import CustomButton from "./CustomButton";
import { ImagePlus } from "lucide-react-native";
import { COLORS } from "../../../../constants";

type AddPhotoVideoButtonProps = {
  onPress: () => void;
};

const AddPhotoVideoButton: React.FC<AddPhotoVideoButtonProps> = ({
  onPress,
}) => {
  return (
    <CustomButton
      onPress={onPress}
      icon={<ImagePlus size={30} color={COLORS.brandGrey} />}
      title="Add Photo/Video"
    />
  );
};

export default AddPhotoVideoButton;
