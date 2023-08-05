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
import { RootStackParamList } from "../../navigation/Nav/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
import { Field, Formik } from "formik";
import axios from "axios";
import * as SecureStore from 'expo-secure-store'
import RegularSmall from "../../constants/fonts/RegularSmall";

type Props = StackScreenProps<RootStackParamList, "ForgotPassOTP">;

interface FormValues {
  [key: string]: string;
}

const ForgotPassOTP: FunctionComponent<Props> = ({navigation}) => {
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

  const handleVerify = async(values: FormValues) => {
    const otp = `${values.num1}${values.num2}${values.num3}${values.num4}${values.num5}${values.num6}`;
    console.log(otp)


    try{
      const token = await SecureStore.getItemAsync('token');

      const response = await axios.post("http://192.168.1.4:3000/password/reset/otp/verify",{
        otp: otp,
        token: token,
      });
      console.log(values);

      const password_reset_token = response.data.OTPVerified.password_reset_token;
      await SecureStore.setItemAsync('password_reset_token', password_reset_token);

      navigation.navigate("ChangePassword");
      console.log("API Response: ", response.data);

    } catch (error: any) {
  
      if (error.response) {
        setErrorMessage("Invalid OTP");
      } else if (error.request) {
        // The request was made but no response was received
        console.error("API error: No response received");
        console.log(error);
      } else {
        // Something happened in setting up the request that triggered an Error
        const errorMessage = `${JSON.stringify(error.message)}`
        alert(errorMessage);
        console.error("API error: ", error.message);
      }
    }
 };

  return (
    <KeyboardAvoidingView keyboardVerticalOffset={250} behavior="padding" style={styles.container}>
      <StatusBar />
      <View>
        {/* Top section */}
        <Logo source={logo} mainText="OTP" subText="Please enter the OTP sent to your Email"/>


        {/* Bottom section */}
        <View style={{ paddingHorizontal: 10, marginTop: 350, alignItems: "center", justifyContent: "center"}}>
        <Formik initialValues={initialValues} onSubmit={handleVerify}>
          {({ handleChange, handleSubmit, values }) => (
            <>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 8 }}>
                {inputRefs.map((ref, index) => (
                  <View key={index}>
                    <TextInput
                      ref={ref}
                      placeholder="0"
                      placeholderTextColor={errorMessage ? "#CC3535" : "#B8B8B8"}
                      style={[styles.input, errorMessage ? styles.inputError : null]}
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

              <View style={{marginTop: 10,flexDirection: "row", marginLeft: 0}}>
                  <RegularSmall>
                    {errorMessage ? <Text style={{color: "#CC3535", fontSize: 12}}>{errorMessage}</Text> : null}
                  </RegularSmall>
                </View>

              {/* Button */}
              <View style={{ alignItems: "center", justifyContent: "center", marginTop: 30, width: 280 }}>
                <RegularButton onPress={handleSubmit}>
                  <Text style={{ color: "#FEFEFE" }}>Verify</Text>
                </RegularButton>
              </View>
            </>
          )}
        </Formik>

          <View style={{ marginTop: 30, alignItems: 'center',flexDirection: 'row', marginBottom: 20}}>
            <RegularNormal>
              <Text style={{ alignItems: 'center'}}>Didn't receive an OTP?</Text>
            </RegularNormal>
            <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
              <View>
                <RegularNormal>
                    <Text style={{ color: '#2656FF' }}>Resend OTP</Text>
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
      justifyContent: 'center',
      alignItems: 'center',
  },
  input: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: "gray",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "400",
    borderRadius: 12,
  },
  inputError: {
    borderColor: "#CC3535"
  }
});

export default ForgotPassOTP;
