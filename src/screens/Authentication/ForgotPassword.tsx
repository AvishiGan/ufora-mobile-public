import React, { FunctionComponent, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {ImageSourcePropType,Text,View,Image,TextInput,} from "react-native";
import logo from "../../../assets/logo.png";
import User from "../../../assets/icons/user.png";
import RegularButton from "../../components/buttons/RegularButton";
import { GestureResponderEvent } from "react-native";
import { TouchableOpacity } from "react-native";

//React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BoldText from "../../constants/fonts/BoldHeading";
import MediumText from "../../constants/fonts/SmallMedium";
import RegularBig from "../../constants/fonts/RegularBig";
import RegularNormal from "../../constants/fonts/RegularNormal";
import Logo from "../../components/logo/Logo";
import SmallButton from "../../components/buttons/SmallButton";
import UnfilledButton from "../../components/buttons/UnfilledButton";
import InputField from "../../components/inputField/InputField";
import { blue } from "@mui/material/colors";
import CustomizedInputsStyled from "../../components/inputField/InputField";

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
      <Logo source={logo} mainText="Forgot Password" subText="Choose an Account type to get started "/>

      {/* Bottom section */}
      <View style={{ paddingHorizontal: 10, marginTop: 340 ,alignItems: "center"}}>
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'transparent', borderRadius: 20,padding: 2 }}>
            <InputField
              imageSource={require('../../../assets/icons/mail.png')}
              placeholder="Please enter your Email"
              value={email}
              onChangeText={handleEmailChange}
            />
          </View>
        </View>

        {/* Button */}
        <View
            style={{flexDirection: "row",marginTop: 30,alignItems: "center",gap: 10,}}
          >
            <UnfilledButton onPress={() => {}}>
              <Text style={{ color: "#2656FF" }}>Back</Text>
            </UnfilledButton>

            <SmallButton onPress={() => {}}>
              <Text style={{ color: "#FEFEFE" }}>Next</Text>
            </SmallButton>
          </View>
            <View style={{ marginTop: 20, alignItems: 'center' }}>
            <TouchableOpacity onPress={{}}>
              <View>
                <RegularNormal>
                    <Text style={{ color: '#2656FF' }}>Can't reset your password?</Text>
                  </RegularNormal>
              </View>
            </TouchableOpacity>
            </View>
          </View>
        </View>

    </>
  );
};

export default ForgotPassword;
