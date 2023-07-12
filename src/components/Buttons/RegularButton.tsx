import React, { FunctionComponent } from "react";
import RegularText from "../../constants/fonts/RegularText";
import { GestureResponderEvent, TouchableOpacity } from "react-native";

interface ButtonProps {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  children: React.ReactNode;
}

const RegularButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <TouchableOpacity className="items-center justify-center bg-blue-500 px-2 py-2 rounded-xl w-full">
      <RegularText className="text-white"> {props.children}</RegularText>
    </TouchableOpacity>
  );
};

export default RegularButton;
