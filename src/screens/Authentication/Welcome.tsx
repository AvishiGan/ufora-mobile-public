import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import { ImageSourcePropType, Text, View, Image, TextStyle  } from "react-native";
import logo from "../../../assets/logo.png";
import google from "../../../assets/icons/google.png";
import apple from "../../../assets/icons/apple.png";
import RegularButton from "../../components/buttons/RegularButton";
import UnfilledButton from "../../components/buttons/UnfilledButton";
import { GestureResponderEvent } from "react-native";
import { TouchableOpacity } from "react-native";
import SmallButton from "../../components/buttons/SmallButton";
import Authentication, {
  handlePressGoogle,
  handlePressApple,
} from "../../components/auth/Authentication";
import BoldHeading from "../../constants/fonts/BoldHeading";
import SmallMedium from "../../constants/fonts/SmallMedium";
import RegularBig from "../../constants/fonts/RegularBig";
import Logo from "../../components/logo/Logo"

import { RootStackParamList } from "../../navigation/Nav/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
import { useNavigation } from '@react-navigation/native';
type Props = StackScreenProps<RootStackParamList, "Welcome">;

const Welcome: FunctionComponent<Props> = ({navigation}) => {
  
  return (
    <>
      <StatusBar />
      {/* welcome container */}
      <View>
        {/* Top section */}
        <Logo source={logo} mainText="Welcome" subText="Login to your account, " additionalText="or Create Account to get started" />

        {/* Bottom section */}
        {/* Buttons */}
        <View
          style={{flexDirection: "row",marginTop: 380,justifyContent: "space-between",alignItems: "center",marginLeft: 20,marginRight: 20,gap: 10,}}
        >

          <UnfilledButton onPress={() => {navigation.navigate("CreateAccount")}}>
            <Text style={{ color: "#2656FF" }}>Create Account</Text>
          </UnfilledButton>

          <SmallButton onPress={() => {navigation.navigate("Login")}}>
            <Text style={{ color: "#FEFEFE" }}>Log In</Text>
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
