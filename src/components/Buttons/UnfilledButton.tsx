import React, { FunctionComponent } from "react";
import SemiBoldBig from "../../constants/fonts/SemiboldBig";
import styled from "styled-components";
import { GestureResponderEvent, TouchableOpacity } from "react-native";

interface ButtonProps {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  children: React.ReactNode;
}

const UnfilledButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 12,
        width: 167,
        height: 45,
        borderColor: "#2656FF",
        borderWidth: 1,
      }}
      onPress={props.onPress}
    >
      <SemiBoldBig style={{ color: "#2656FF" }}>{props.children}</SemiBoldBig>
    </TouchableOpacity>
  );
};

export default UnfilledButton;
