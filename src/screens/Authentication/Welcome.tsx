import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
} from "react-native";
import logo from "../../../assets/logo.png";
import UnfilledButton from "../../components/buttons/UnfilledButton";
import SmallButton from "../../components/buttons/SmallButton";
import Authentication, {
  handlePressGoogle,
  handlePressApple,
} from "../../components/auth/Authentication";
import Logo from "../../components/logo/Logo";

//navigation
import { RootStackParamList } from "../../navigation/Nav/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
type Props = StackScreenProps<RootStackParamList, "Welcome">;

const Welcome: FunctionComponent<Props> = ({ navigation }) => {
  const handlePressCreateAccount = () => {
    navigation.navigate("CreateAccount");
  };

  const handlePressLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <>
      <StatusBar />
      {/* welcome container */}
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
            marginTop: 390,
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

//         <Authentication
//           onPressGoogle={handlePressGoogle}
//           onPressApple={handlePressApple}
//         />
//       </View>
//     </>
//   );
// };

// export default Welcome;
