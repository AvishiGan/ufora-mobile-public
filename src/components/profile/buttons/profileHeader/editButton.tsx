import React from "react";
import { ShareIcon } from "../../../../../assets/svg";
import CustomButton from "./customButton";

type ShareButtonProps = {
  onPress: () => void;
};

const ShareButton: React.FC<ShareButtonProps> = ({ onPress }) => {
  return (
    <CustomButton
      onPress={onPress}
      icon={<ShareIcon size={17} strokeColor="#4F4E4E" />}
      title="Share Profile"
    />
  );
};

export default ShareButton;
