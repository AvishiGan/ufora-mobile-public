import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import logo from "../../../assets/logo.png";
import UnfilledButton from "../../components/authentication/buttons/UnfilledButton";
import SmallButton from "../../components/authentication/buttons/SmallButton";
import Authentication from "../../components/authentication/auth/Authentication";
import Logo from "../../components/authentication/logo/Logo";

//navigation
import { RootStackParamList } from "../../navigation/navigator/WelcomeNavigator";
import { StackScreenProps } from "@react-navigation/stack";
type Props = StackScreenProps<RootStackParamList, "Welcome">;

// const Welcome: FunctionComponent<Props> = ({ navigation }) => {
//   const handlePressCreateAccount = () => {
//     navigation.navigate("CreateAccount");
//   };

//   const handlePressLogin = () => {
//     navigation.navigate("Login");
//   };

  return (
    <>
      <StatusBar />
      <View>
        {/* Top section */}
        <Logo
          source={logo}
          mainText="Welcome"
          subText="Login to your account, "
          additionalText="or Create Account to get started"
        />

        {/* Bottom section */}
        {/* Buttons */}
        <View
          style={{
            flexDirection: "row",
            marginTop: 410,
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: 20,
            marginRight: 20,
            gap: 10,
          }}
        >
          <UnfilledButton onPress={handlePressCreateAccount}>
            <Text style={{ color: "#2656FF" }}>Create Account</Text>
          </UnfilledButton>

          <SmallButton onPress={handlePressLogin}>
            <Text style={{ color: "#FEFEFE" }}>Log In</Text>
          </SmallButton>
        </View>

        <Authentication />
      </View>
    </>
  );
};

export default Welcome;
