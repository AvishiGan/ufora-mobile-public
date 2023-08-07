import React, { FunctionComponent } from "react";
import {
  GestureResponderEvent,
  TouchableOpacity,
} from "react-native";
import { View } from "react-native";

import SmallMedium from "../../../constants/fonts/SmallMedium";
import Google from "./Google";
import Apple from "./Apple";

interface ImagesSectionProps {
  // handlePressGoogle: (event: GestureResponderEvent) => void;
  // handlePressApple: (event: GestureResponderEvent) => void;
  
}

const Authentication: FunctionComponent<ImagesSectionProps> = ({
}) => {
  // const handlePressGoogle = (event: GestureResponderEvent) => {
  //   // Handle the onPressGoogle event
  //   //onPressGoogle(event);
  // };

  // const handlePressApple = (event: GestureResponderEvent) => {
  //   // Handle the onPressApple event
  //   //onPressApple(event);
  // };

  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>
      <SmallMedium>Or continue with</SmallMedium>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          justifyContent: "space-between",
          gap:61
        }}
      >
        <TouchableOpacity>
          <Google />
        </TouchableOpacity>
        <TouchableOpacity >
          <Apple />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Authentication;
