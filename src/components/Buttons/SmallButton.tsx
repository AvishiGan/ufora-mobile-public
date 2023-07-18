import React, { FunctionComponent } from "react";
import MediumText from "../../constants/fonts/RegularBig";
import { GestureResponderEvent, TouchableOpacity } from "react-native";
import RegularText from "../../constants/fonts/RegularBig";
import SemiBoldBig from "../../constants/fonts/SemiboldBig";

interface ButtonProps {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  children: React.ReactNode;
}

const SmallButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#2656FF', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 12, width: 167, height:45, borderColor: '#2656FF', borderWidth: 1 }}>
      <SemiBoldBig style={{ color: 'white' }}>{props.children}</SemiBoldBig>
    </TouchableOpacity>
  );
};

export default SmallButton;
