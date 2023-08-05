import React, { FunctionComponent, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {Text,View,Image, KeyboardAvoidingView,StyleSheet} from "react-native";
import logo from "../../../assets/logo.png";
import { TouchableOpacity } from "react-native";
import RegularNormal from "../../constants/fonts/RegularNormal";
import Logo from "../../components/authentication/logo/Logo";
import SmallButton from "../../components/authentication/buttons/SmallButton";
import UnfilledButton from "../../components/authentication/buttons/UnfilledButton";
import InputField from "../../components/authentication/inputField/InputField";
import { Mail } from "lucide-react-native";

//navigation
import { RootStackParamList } from "../../navigation/Nav/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
import { Field, Formik } from "formik";
import axios, { AxiosRequestConfig } from "axios";
import * as SecureStore from 'expo-secure-store';
import * as Yup from 'yup'
import RegularSmall from "../../constants/fonts/RegularSmall";
type Props = StackScreenProps<RootStackParamList, "ForgotPassword">;

interface FormValues {
  email: string;
}

const ForgotPassword: FunctionComponent<Props> = ({ navigation }) => {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const initialValues: FormValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required('Email is Required'),
  })

  const handleNext = async(values: FormValues) => {
    try {
      //const ip = process.env.IP
      //console.log(ip)
        const response = await axios.post("http://192.168.1.4:3000/password/reset/otp/request",{
          email: values.email,
        });
  
        console.log(values);

        const token = response.data.OTPSent.token;
        await SecureStore.setItemAsync('token', token);


        navigation.navigate("ForgotPassOTP");
  
        console.log("API Response: ", response.data);

    } catch (error: any) {

      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        console.error("API error: ", error.response.data);
        console.error("API error status: ", error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("API error: No response received");
        console.log(error);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("API error: ", error.message);
      }
    }
  };

  return (
      <KeyboardAvoidingView keyboardVerticalOffset={250} behavior="padding" style={styles.container}>
      <StatusBar />
      <View style={{alignItems: "center"}}>
        {/* Top section */}
        <Logo source={logo} mainText="Forgot Password" subText="Please enter your Email to continue "/>


        {/* Bottom section */}
        <View style={{paddingHorizontal: 10, marginTop: 350, alignItems: "center"}}>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleNext}>
            {({ handleChange, handleSubmit, values, errors, handleBlur, touched }) => (
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "transparent",
                    borderRadius: 20,
                    
                  }}
                >
                  <Field
                    component={InputField}
                    error = {touched.email && errors.email}
                    iconComponent={<Mail color={touched.email && errors.email ? "#CC3535" : "#B8B8B8"} size={24} />}
                    name="email"
                    placeholder="Please enter your Email"
                    onChangeText={handleChange("email")}
                    value={values.email}
                    onBlur={handleBlur('email')}
                  />
                </View>

                <View style={{marginTop: 0,flexDirection: "row", marginLeft: 8}}>
                  <RegularSmall>
                    {errorMessage ? <Text style={{color: "#CC3535", fontSize: 12}}>{errorMessage}</Text> : null}
                  </RegularSmall>
                </View>

                {/* Button */}
                <View style={{flexDirection: "row",marginTop: 15,alignItems: "center",gap: 10,}} >
                  <UnfilledButton onPress={() => navigation.navigate('Login')}>
                    <Text style={{ color: "#2656FF" }}>Back</Text>
                  </UnfilledButton>

                  <SmallButton onPress={handleSubmit}>
                    <Text style={{ color: "#FEFEFE" }}>Next</Text>
                  </SmallButton>
                </View>
              </View>
            )}
          </Formik>

          <View style={{ marginTop: 20, alignItems: 'center', marginBottom: 20}}>
            <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
              <View>
                <RegularNormal>
                    <Text style={{ color: '#2656FF' }}>Can't reset your password?</Text>
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
      width: '80%',
      height: 40,
      borderWidth: 1,
      borderColor: 'gray',
  },
});

export default ForgotPassword;
