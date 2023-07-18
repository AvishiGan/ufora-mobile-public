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
import MediumText from "../../constants/fonts/SmallMedium";
import RegularButton from "../../components/buttons/RegularButton";
import { GestureResponderEvent } from "react-native";
import { TouchableOpacity } from "react-native";
import BoldText from "../../constants/fonts/BoldHeading";
import Logo from "../../components/logo/Logo";
import InputField from "../../components/inputField/OTPInput";
import RegularNormal from "../../constants/fonts/RegularNormal";

interface CustomImageProps {
  source: ImageSourcePropType;
}

const CustomImage: FunctionComponent<CustomImageProps> = ({ source }) => {
  return <Image source={source} />;
};

const UniOTP: FunctionComponent = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [num4, setNum4] = useState("");
  const [num5, setNum5] = useState("");
  const [num6, setNum6] = useState("");

  const handleNum1Change = (text: string) => {
    setNum1(text);
  };

  const handleNum2Change = (text: string) => {
    setNum2(text);
  };

  const handleNum3Change = (text: string) => {
    setNum3(text);
  };

  const handleNum4Change = (text: string) => {
    setNum4(text);
  };

  const handleNum5Change = (text: string) => {
    setNum5(text);
  };

  const handleNum6Change = (text: string) => {
    setNum6(text);
  };

  const [email, setemail] = useState("");

  const handleEmailChange = (text: string) => {
    setemail(text);
  };

  return (
    <>
      <StatusBar />

      <View>
        {/* Top section */}
        <Logo source={logo} mainText="Uni OTP" subText="Please enter the OTP sent to your Uni Email"/>


        {/* Bottom section */}
        <View style={{ paddingHorizontal: 10, marginTop: 350, alignItems: "center"}}>
          <View style={{ flexDirection: "row", justifyContent: "center", gap:8 }}>
            <InputField
              placeholder="0"
              value={num1}
              onChangeText={handleNum1Change}
            />

            <InputField
              placeholder="0"
              value={num2}
              onChangeText={handleNum2Change}
            />

            <InputField
              placeholder="0"
              value={num3}
              onChangeText={handleNum3Change}
            />

            <InputField
              placeholder="0"
              value={num4}
              onChangeText={handleNum4Change}
            />

            <InputField
              placeholder="0"
              value={num5}
              onChangeText={handleNum5Change}
            />

            <InputField
              placeholder="0"
              value={num6}
              onChangeText={handleNum6Change}
            />
          </View>

          {/* Button */}
          <View
            style={{flexDirection: "row", alignItems: "center", marginTop: 30, width:280}}
          >
            <RegularButton onPress={() => {}}>
              <Text style={{ color: "#FEFEFE" }}>Verify</Text>
            </RegularButton>
          </View>

          <View style={{ marginTop: 30, alignItems: 'center',flexDirection: 'row'}}>
            <RegularNormal>
              <Text style={{ alignItems: 'center'}}>Didn't receive an OTP?</Text>
            </RegularNormal>
            <TouchableOpacity onPress={{}}>
              <View>
                <RegularNormal>
                    <Text style={{ color: '#2656FF' }}>Resend OTP</Text>
                  </RegularNormal>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default UniOTP;
