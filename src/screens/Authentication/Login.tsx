import React, { FunctionComponent, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {ImageSourcePropType,Text,View,Image,TextInput,} from "react-native";
import logo from "../../../assets/logo.png";
import google from "../../../assets/icons/google.png";
import apple from "../../../assets/icons/google.png";
import User from "../../../assets/icons/user.png";
import Password from "../../../assets/icons/password.png";
import Eyeoff from "../../../assets/icons/eye-off.png";
import RegularButton from "../../components/buttons/RegularButton";
import { GestureResponderEvent } from "react-native";
import { TouchableOpacity } from "react-native";
import Authentication, {
  handlePressGoogle,
  handlePressApple,
} from "../../components/auth/Authentication";
import InputField from "../../components/inputField/InputField";
import BoldHeading from "../../constants/fonts/BoldHeading";
import SmallMedium from "../../constants/fonts/SmallMedium";
import RegularBig from "../../constants/fonts/RegularBig";
import Logo from "../../components/logo/Logo";
import RegularNormal from "../../constants/fonts/RegularNormal";
import RegularSmall from "../../constants/fonts/RegularSmall";
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Field, Formik } from 'formik';

import { RootStackParamList } from "../../navigation/Nav/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
import { useNavigation } from '@react-navigation/native';
import { Alert } from "react-native";
type Props = StackScreenProps<RootStackParamList, "Login">;


interface FormValues {
  email: string;
  password: string;
}

const Login: FunctionComponent<Props> = ({navigation}) => {
    
  const initialValues: FormValues = {
    email: '',
    password: '',
  };

/**
 * 
 * @returns | 
 */
  //const handleLogin = (values: FormValues) => {
  const handleLogin = () => Alert.alert("Login")
    // Making the API request
    //console.log(values);
    //navigation.navigate("CreateAccount");
  

  const Link = () => {
    const handleForgotPassword = () => {}
  };

  return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <StatusBar />
        <View>
       {/* Top section */}
      <Logo source={logo} mainText="Login" subText="Login to your account "/>


      {/* Bottom section */}
      <View style={{ paddingHorizontal: 10, marginTop: 215 ,alignItems: "center"}}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleLogin}
      >
            {({ handleChange, handleSubmit, values }) => (
              <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'transparent', borderRadius: 20, padding: 2 }}>
                  <Field
                    component={InputField}
                    imageSource={require('../../../assets/icons/user.png')}
                    name="email"
                    placeholder="Username / Email"
                  />
                </View>

                <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', backgroundColor: 'transparent', borderRadius: 20, padding: 2 }}>
                  <Field
                    component={InputField}
                    imageSource={require('../../../assets/icons/password.png')}
                    name="password"
                    placeholder="*********"
                    secureTextEntry={true}
                  />
                </View>
                <TouchableOpacity onPress={() => {}}>
                  <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 }}>
                    <RegularSmall>
                      <Text style={{ color: '#2656FF' }}>Forgot Password?</Text>
                    </RegularSmall>
                  </View>
                </TouchableOpacity>
                
                {/* Button */}
                <View style={{ flexDirection: "row", marginTop: 25, alignItems: "center", width: 330 }}>
                  <RegularButton onPress={handleSubmit}>
                    <Text style={{ color: "#FEFEFE" }}>Log In</Text>
                  </RegularButton>
                </View>
              </View>
            )}
      </Formik>
      
        <View style={{ marginTop: 20, alignItems: 'center',flexDirection: 'row'}}>
          <RegularNormal>
            <Text style={{ alignItems: 'center'}}>Don't have an account?</Text>
          </RegularNormal>
          <TouchableOpacity onPress={() => {}}>
            <View>
              <RegularNormal>
                <Text style={{ color: '#2656FF' }}>Create Account</Text>
              </RegularNormal>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Authentication
        onPressGoogle={handlePressGoogle}
        onPressApple={handlePressApple}
      />
      </View>
      </KeyboardAvoidingView>
  );
};

export default Login;
