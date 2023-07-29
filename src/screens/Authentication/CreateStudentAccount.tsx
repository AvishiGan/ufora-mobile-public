import React, { useState } from 'react';
import {StatusBar, View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Image} from 'react-native';
import Logo from '../../components/logo/Logo'
import logo from "../../../assets/logo.png"
import RegularNormal from '../../constants/fonts/RegularNormal'
import InputField from '../../components/inputField/InputField'
import SmallButton from '../../components/buttons/SmallButton'
import UnfilledButton from '../../components/buttons/UnfilledButton'
import Authentication, {
    handlePressGoogle,
    handlePressApple,
  } from "../../components/auth/Authentication";
import SmallerRegular from '../../constants/fonts/SmallerRegular'

//navigation
import { RootStackParamList } from "../../navigation/Nav/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
import { FunctionComponent } from "react";
import { Field, Formik } from 'formik';
import axios from 'axios';
type Props = StackScreenProps<RootStackParamList, "CreateBusinessAccount">;

interface FormValues {
    name: string;
    email: string;
    username: string;
    password: string;
  }

const CreateStudentAccount:FunctionComponent<Props> = ({navigation}) => {

    const initialValues: FormValues = {
        name: "",
        email: "",
        username: "",
        password: "",
    };

    const handleCreateStudentAcc = async(values: FormValues) => {
    try{
        const response = await axios.post("http://192.168.1.6:3000/register/undergraduate",{
            name: values.name,
            email: values.email,
            username: values.username,
            password: values.password
        });
        console.log(values);
        navigation.navigate("StudentOTP");
        console.log("API Response: ", response.data);

        //Request OTP when create account success
        try{
            const otpResponse = await axios.post("http://192.168.1.6:3000/otp/request", {
                email: values.email,
            });

            console.log("OTP Request Response: ", otpResponse.data);
        } catch (otpError){
            console.error("OTP Request Error: ", otpError);
        }

    } catch (error:any){
        if(error.response){
            const errorMessage = `${JSON.stringify(error.response.data)}`
            alert(errorMessage);
            console.error("API error: ", error.response.data);
            //console.error("API error status: ", error.response.status);
        } else if (error.request){
            // The request was made but no response was received
            console.error("API error: No response received");
            console.log(error);
        } else {
            const errorMessage = `${JSON.stringify(error.message)}`
            alert(errorMessage);
            console.error("API error: ", error.message);
        }
     }
    };

    const handleBack = () => {
        navigation.navigate("CreateAccount");
    }

return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar />
        <View>
            {/* Top section */}
            <Logo source={logo} mainText="Create Account" subText="Create a Student Account " />
        </View>

    {/* Bottom section */}
    <View style={{ paddingHorizontal: 10, marginTop: 72 ,alignItems: "center"}}>
        <Formik initialValues={initialValues} onSubmit={handleCreateStudentAcc}>
            {({ handleChange, handleSubmit, values }) => (
            <View style={{alignItems: "center"}}>
                <View style={{flexDirection: "row", alignItems: "center", backgroundColor: "transparent", borderRadius: 20, padding: 2}} >
                <Field
                    component={InputField}
                    imageSource={require("../../../assets/icons/person-standing.png")}
                    name="name"
                    placeholder="Saman Perera"
                    onChangeText = {handleChange("name")}
                    value = {values.name}
                />
                </View>

                <View style={{marginTop: 10, flexDirection: "row", alignItems: "center", backgroundColor: "transparent", borderRadius: 20, padding: 2, }} >
                <Field
                    component={InputField}
                    imageSource={require("../../../assets/icons/mail.png")}
                    name="email"
                    placeholder="samanperera@gmail.com"
                    onChangeText = {handleChange("email")}
                    value = {values.email}
                />
                </View>

                <View style={{marginTop: 10, flexDirection: "row", alignItems: "center", backgroundColor: "transparent", borderRadius: 20, padding: 2, }} >
                <Field
                    component={InputField}
                    imageSource={require("../../../assets/icons/user.png")}
                    name="username"
                    placeholder="SamanPerera"
                    onChangeText = {handleChange("username")}
                    value = {values.username}
                />
                </View>

                <View style={{marginTop: 10, flexDirection: "row", alignItems: "center", backgroundColor: "transparent", borderRadius: 20, padding: 2, }} >
                <Field
                    component={InputField}
                    imageSource={require("../../../assets/icons/password.png")}
                    name="password"
                    placeholder="*********"
                    secureTextEntry={true}
                    onChangeText = {handleChange("password")}
                    value = {values.password}
                />
                </View>

                <View style={{flexDirection: "row",marginTop: 30,alignItems: "center", width: 340, gap:10}}>
                    <UnfilledButton onPress={handleBack}>
                        <Text style={{ color: "#2656FF" }}>Back</Text>
                    </UnfilledButton>
                    <SmallButton onPress={handleSubmit}>
                        <Text style={{ color: "#FEFEFE" }}>Next</Text>
                    </SmallButton>
                </View>
            </View>
            )}
        </Formik>

        {/* Button */}
        <View style={{ marginTop: 18, alignItems: 'center',flexDirection: 'row'}}>
            <RegularNormal>
                <Text style={{ alignItems: 'center'}}>Already have an account?</Text>
            </RegularNormal>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <View>
                <RegularNormal>
                    <Text style={{ color: '#2656FF' }}>Login</Text>
                </RegularNormal>
                </View>
            </TouchableOpacity>
            </View>
        
        <Authentication
            onPressGoogle={handlePressGoogle}
            onPressApple={handlePressApple}
        />
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
});

export default CreateStudentAccount;
