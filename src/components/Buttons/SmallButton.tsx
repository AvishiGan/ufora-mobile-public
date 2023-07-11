import React, { FunctionComponent } from "react";
import { COLORS } from "../../constants/theme";
import MediumText from "../../constants/fonts/RegularText";
import { GestureResponderEvent, TouchableOpacity } from "react-native";
import RegularText from "../../constants/fonts/RegularText";

interface ButtonProps {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  children: React.ReactNode;
}

const SmallButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <TouchableOpacity className="items-center justify-center bg-blue-500 px-2 py-2 rounded-xl w-40">
      <RegularText className="text-white"> {props.children}</RegularText>
    </TouchableOpacity>
  );
};

export default SmallButton;
