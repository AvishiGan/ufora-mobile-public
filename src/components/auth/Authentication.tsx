import React, { FunctionComponent } from "react";
import {
  GestureResponderEvent,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";
import { View } from "react-native";
import google from "../../assets/icons/google.png";
import apple from "../../assets/icons/apple.png";
import SmallText from "../../constants/fonts/MediumText";
import LightText from "../../constants/fonts/LightText";
import MediumText from "../../constants/fonts/MediumText";

interface CustomImageProps {
  source: ImageSourcePropType;
}

const CustomImage: FunctionComponent<CustomImageProps> = ({ source }) => {
  return <Image source={source} />;
};

interface ImagesSectionProps {
  onPressGoogle: (event: GestureResponderEvent) => void;
  onPressApple: (event: GestureResponderEvent) => void;
}

const Authentication: FunctionComponent<ImagesSectionProps> = ({
  onPressGoogle,
  onPressApple,
}) => {
  const handlePressGoogle = (event: GestureResponderEvent) => {
    // Handle the onPressGoogle event
    //onPressGoogle(event);
  };

  const handlePressApple = (event: GestureResponderEvent) => {
    // Handle the onPressApple event
    //onPressApple(event);
  };

  return (
    <View className="items-center mt-5">
      <MediumText className="">Or continue with</MediumText>
      <View className="flex-row mt-1 justify-between w-32">
        <TouchableOpacity onPress={onPressGoogle}>
          <CustomImage source={google} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressApple}>
          <CustomImage source={apple} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Authentication;
