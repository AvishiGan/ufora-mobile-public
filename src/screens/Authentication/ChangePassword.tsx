import React, { useState } from 'react'
import { StatusBar, View, Text, TouchableOpacity, KeyboardAvoidingView, StyleSheet} from 'react-native'
import Logo from '../../components/logo/Logo'
import logo from "../../../assets/logo.png"
import RegularButton from '../../components/buttons/RegularButton'
import RegularNormal from '../../constants/fonts/RegularNormal'
import InputField from '../../components/inputField/InputField'

//navigation
import { RootStackParamList } from "../../navigation/Nav/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
import { FunctionComponent } from "react";
import { Field, Formik } from 'formik'
import axios from 'axios'
import * as SecureStore from 'expo-secure-store'
type Props = StackScreenProps<RootStackParamList, "ChangePassword">;

interface FormValues {
  password: string;
  confirmPassword: string;
}

const ChangePassword: FunctionComponent<Props> = ({ navigation }) => {
    const initialValues: FormValues = {
      password: "",
      confirmPassword: "",
    };

    const handleLogin = async(values: FormValues) => {
  
      try{
        const token = await SecureStore.getItemAsync('password_reset_token');
  
        const response = await axios.post("http://192.168.1.6:3000/password/reset",{
          password:values.password,
          confirm_password: values.confirmPassword,
          password_reset_token: token,
        });
        console.log(values);
  
  
      navigation.navigate("Login");
      console.log("API Response: ", response.data);
  
      } catch (error: any) {
    
        if (error.response) {
          const errorMessage = `${JSON.stringify(error.response.data)}`
          alert(errorMessage);
          console.error("API error: ", error.response.data);

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
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar />
        <View>
          {/* Top section */}
          <Logo source={logo} mainText="Change Password" subText="Please enter a new password to continue " />


          {/* Bottom section */}
          <View style={{paddingHorizontal: 10, marginTop: 280, alignItems: "center"}}>
            <Formik initialValues={initialValues} onSubmit={handleLogin}>
              {({ handleChange, handleSubmit, values }) => (
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "transparent",
                      borderRadius: 20,
                      padding: 2,
                    }}
                  >
                    <Field
                      component={InputField}
                      imageSource={require("../../../assets/icons/password.png")}
                      name="password"
                      placeholder="*********"
                      secureTextEntry={true}
                      onChangeText={handleChange("password")}
                      value={values.password}
                    />
                  </View>

                  <View
                    style={{
                      marginTop: 10,
                      flexDirection: "row",
                      alignItems: "center",
                      backgroundColor: "transparent",
                      borderRadius: 20,
                      padding: 2,
                    }}
                  >
                    <Field
                      component={InputField}
                      imageSource={require("../../../assets/icons/password.png")}
                      name="ConfirmPassword"
                      placeholder="*********"
                      secureTextEntry={true}
                      onChangeText={handleChange("password")}
                      value={values.password}
                    />
                  </View>
                  

                  {/* Button */}
                  <View
                    style={{flexDirection: "row", marginTop: 30, alignItems: "center", width: 330, }} >
                    <RegularButton onPress={handleSubmit}>
                      <Text style={{ color: "#FEFEFE" }}>Next</Text>
                    </RegularButton>
                  </View>
                </View>
              )}
            </Formik>

            <View style={{ marginTop: 30, alignItems: 'center', marginBottom: 10 }}>
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

export default ChangePassword;
