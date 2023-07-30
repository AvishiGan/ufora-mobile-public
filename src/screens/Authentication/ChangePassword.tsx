import React, { useState } from 'react'
import { StatusBar, View, Text, TouchableOpacity, KeyboardAvoidingView, StyleSheet} from 'react-native'
import Logo from '../../components/logo/Logo'
import logo from "../../../assets/logo.png"
import RegularButton from '../../components/buttons/RegularButton'
import RegularNormal from '../../constants/fonts/RegularNormal'
import InputField from '../../components/inputField/InputField'
import RegularSmall from '../../constants/fonts/RegularSmall'

//navigation
import { RootStackParamList } from "../../navigation/Nav/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
import { FunctionComponent } from "react";
import { Field, Formik } from 'formik'
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

    const handleLogin = (values: FormValues) => {
      //const handleLogin = () => Alert.alert("Login");
      // Making the API request
      //console.log(values);
      navigation.navigate("Login");
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
