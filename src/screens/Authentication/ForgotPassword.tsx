import React, { FunctionComponent, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ImageSourcePropType,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
import logo from "../../../assets/logo.png";
import User from "../../../assets/icons/user.png";
import RegularButton from "../../components/buttons/RegularButton";
import { GestureResponderEvent } from "react-native";
import { TouchableOpacity } from "react-native";

//React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BoldText from "../../constants/fonts/BoldText";
import MediumText from "../../constants/fonts/MediumText";
import LightText from "../../constants/fonts/LightText";
import RegularText from "../../constants/fonts/RegularText";

interface CustomImageProps {
  source: ImageSourcePropType;
}

const CustomImage: FunctionComponent<CustomImageProps> = ({ source }) => {
  return <Image source={source} />;
};

const ForgotPassword: FunctionComponent<LoginProps> = ({ onPressLogin }) => {
  const [email, setemail] = useState("");

  const handleEmailChange = (text: string) => {
    setemail(text);
  };

  return (
    <>
      <StatusBar />

      <View>
        {/* Top section */}
        <View className="items-center mt-40 justify-center px-5">
          <CustomImage source={logo} />
          <View className="items-center mt-2 w-85">
            <BoldText className="">Forgot Password</BoldText>
            <MediumText className="flex-wrap">
              Please enter your Email to continue
            </MediumText>
            <MediumText> </MediumText>
          </View>
        </View>

        {/* Bottom section */}
        <View className="px-10 mt-60">
          <View className="">
            <LightText className="text-gray-600 mb-1">Email</LightText>
            <View className="flex flex-row items-center bg-transparent border rounded-2xl mb-2 p-1">
              <View className="p-2">
                <Image source={User} />
              </View>
              <TextInput
                placeholder="Please enter your Email"
                value={email}
                onChangeText={handleEmailChange}
              />
            </View>
          </View>

          {/* Button */}
          <View className="mt-5 items-center">
            <RegularButton className="" onPress={() => {}}>
              <Text className="text-white">Next</Text>
            </RegularButton>
          </View>
          <View className="mt-6 items-center">
            <RegularText>
              <Text className="items-center text-blue-500">
                Can't reset your password?
              </Text>
            </RegularText>
          </View>
        </View>
      </View>
    </>
  );
};

export default ForgotPassword;
