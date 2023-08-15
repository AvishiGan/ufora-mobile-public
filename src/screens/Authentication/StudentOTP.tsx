import React, { FunctionComponent, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  Text,
  View,
  StyleSheet,
  TextInput,
} from "react-native";
import logo from "../../../assets/logo.png";
import RegularButton from "../../components/authentication/buttons/RegularButton";
import { TouchableOpacity } from "react-native";
import Logo from "../../components/authentication/logo/Logo";
import RegularNormal from "../../constants/fonts/RegularNormal";

//navigation
import { RootStackParamList } from "../../navigation/navigator/WelcomeNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import { Field, Formik } from "formik";
import axios from "axios";
import RegularSmall from "../../constants/fonts/RegularSmall";
import envs from "../../services/config/env";
import { API_PATH } from '@env';
type Props = StackScreenProps<RootStackParamList, "StudentOTP">;

interface FormValues {
  [key: string]: string;
}

const StudentOTP: FunctionComponent<Props> = ({ route, navigation }) => {
  // const { API_PATH } = envs;
  const [errorMessage, setErrorMessage] = useState<string>("");
  const inputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  const initialValues: FormValues = {
    num1: "",
    num2: "",
    num3: "",
    num4: "",
    num5: "",
    num6: "",
  };

  const focusNextField = (index: number) => {
    if (index < inputRefs.length - 1) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleResendOTP = async (values: FormValues) => {
    const email = route.params.email;
    try {
      const otpResponse = await axios.post(`${API_PATH}/otp/request`, {
      // const otpResponse = await axios.post("http://192.168.1.7:3000/otp/request", {
        email: email,
      });
      console.log("OTP Request Response: ", otpResponse.data);
    } catch (otpError) {
      console.error("OTP Request Error: ", otpError);
    }
  };

  const handleSubmit = async (values: FormValues) => {
    const email = route.params.email;
    //console.log(email)
    const otp = `${values.num1}${values.num2}${values.num3}${values.num4}${values.num5}${values.num6}`;
    console.log(otp);

    try {
      const response = await axios.post(`${API_PATH}/otp/verify/email`, {
      // const response = await axios.post("http://192.168.1.7:3000/otp/verify/email", {
        email: email,
        otp: otp,
      });
      console.log(values);
      navigation.navigate("SelectUniversity", {
        username: route.params.username,
      });
      console.log("API Response: ", response.data);
    } catch (error: any) {
      if (error.response) {
        setErrorMessage("Invalid OTP");
        //console.error("API error status: ", error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("API error: No response received");
        console.log(error);
      } else {
        // Something happened in setting up the request that triggered an Error
        const errorMessage = `${JSON.stringify(error.message)}`;
        alert(errorMessage);
        console.error("API error: ", error.message);
      }
    }
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={250}
      behavior="padding"
      style={styles.container}
    >
      <StatusBar />
      <View>
        {/* Top section */}
        <Logo
          source={logo}
          mainText="OTP"
          subText="Please enter the OTP sent to your Email"
        />

        {/* Bottom section */}
        <View
          style={{
            marginTop: 360,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ handleChange, handleSubmit, values }) => (
              <>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  {inputRefs.map((ref, index) => (
                    <View key={index}>
                      <TextInput
                        ref={ref}
                        placeholder="0"
                        placeholderTextColor={
                          errorMessage ? "#CC3535" : "#B8B8B8"
                        }
                        style={[
                          styles.input,
                          errorMessage ? styles.inputError : null,
                        ]}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={(value) => {
                          handleChange(`num${index + 1}`)(value);
                          if (value) {
                            focusNextField(index);
                          }
                        }}
                        value={values[`num${index + 1}`]}
                      />
                    </View>
                  ))}
                </View>

                <View
                  style={{ marginTop: 10, flexDirection: "row", marginLeft: 0 }}
                >
                  <RegularSmall>
                    {errorMessage ? (
                      <Text style={{ color: "#CC3535", fontSize: 12 }}>
                        {errorMessage}
                      </Text>
                    ) : null}
                  </RegularSmall>
                </View>

                {/* Button */}
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 10,
                    width: 280,
                  }}
                >
                  <RegularButton onPress={handleSubmit}>
                    <Text style={{ color: "#FEFEFE" }}>Verify</Text>
                  </RegularButton>
                </View>
              </>
            )}
          </Formik>

          <View
            style={{
              marginTop: 25,
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <RegularNormal>
              <Text style={{ alignItems: "center" }}>
                Didn't receive an OTP?
              </Text>
            </RegularNormal>
            <TouchableOpacity onPress={handleResendOTP}>
              <View>
                <RegularNormal>
                  <Text style={{ color: "#2656FF" }}>Resend OTP</Text>
                </RegularNormal>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: "#87929D",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "400",
    borderRadius: 12,
  },
  inputError: {
    borderColor: "#CC3535",
  },
});

export default StudentOTP;
