import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import { ImageSourcePropType, Text, View, Image } from "react-native";
import logo from "../assets/icons/logo.png";
import google from "../assets/icons/google.png";
import apple from "../assets/icons/apple.png";

import { COLORS } from "../constants/theme";
import RegularButton from "../components/Buttons/RegularButton";
import UnfilledButton from "../components/Buttons/UnfilledButton";
import { GestureResponderEvent } from "react-native";
import { TouchableOpacity } from "react-native";
import SmallButton from "../components/Buttons/SmallButton";
//import Authentication from "../components/Auth/Authentication";
import Authentication, {
  handlePressGoogle,
  handlePressApple,
} from "../components/Auth/Authentication";
import LightText from "../constants/fonts/LightText";
import BoldText from "../constants/fonts/BoldText";
import MediumText from "../constants/fonts/MediumText";
import RegularText from "../constants/fonts/RegularText";
//import handlePressGoogle from "../components/Auth/Authentication";
//import handlePressApple from "../components/Auth/Authentication";

//navigation
{
  /*import { RootStackParamList } from "../nav/RootStack";
import {StackScreenProps} from "@react-navigation-stack";

type Props = StackScreenProps<RootStackParamList, "Welcome">;*/
}

interface CustomImageProps {
  source: ImageSourcePropType;
}

const CustomImage: FunctionComponent<CustomImageProps> = ({ source }) => {
  return <Image source={source} />;
};

interface WelcomeProps {}

//const Welcome: FunctionComponent<Props> = ({navigation}) => {
const Welcome: FunctionComponent<WelcomeProps> = () => {
  return (
    <>
      <StatusBar />
      {/* welcome container */}
      <View>
        {/* Top section */}
        <View className="items-center mt-32 justify-center">
          <CustomImage source={logo} />
          <View className="items-center mt-2">
            <BoldText className=" text-4xl mb-1">Welcome!</BoldText>
            <RegularText className="flex-wrap text-base">
              Login to your account,{" "}
            </RegularText>
            <RegularText className="flex-shrink-0 mb-8 text-base">
              or Create Account to get started
            </RegularText>
          </View>
        </View>

        {/* Bottom section */}
        {/*Buttons */}
        <View className="flex-row mt-80 justify-between ml-7 mr-7">
          <UnfilledButton className="bg-transparent" onPress={() => {}}>
            <Text className="text-blue-500">Create Account</Text>
          </UnfilledButton>

          <SmallButton className="" onPress={() => {}}>
            <Text className="text-white">Log In</Text>
          </SmallButton>

          
        </View>

        <Authentication
          onPressGoogle={handlePressGoogle}
          onPressApple={handlePressApple}
        />
      </View>
    </>
  );
};

export default Welcome;
