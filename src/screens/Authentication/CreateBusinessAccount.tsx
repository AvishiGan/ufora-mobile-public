import React, { useState } from 'react';
import {StatusBar, View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Image} from 'react-native';
import Logo from '../../components/logo/Logo'
import logo from "../../../assets/logo.png"
import RegularNormal from '../../constants/fonts/RegularNormal'
import InputField from '../../components/inputField/InputField'
import RegularSmall from '../../constants/fonts/RegularSmall'
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

const CreateBusinessAccount:FunctionComponent<Props> = ({navigation}) => {

const initialValues: FormValues = {
    name: "",
    email: "",
    username: "",
    password: "",
    };

    const handleSubmit = async(values: FormValues) => {
        try{
            const response = await axios.post("http://10.22.167.182:3000/register/business",{
                name: values.name,
                email: values.email,
                username: values.username,
                password: values.password
            });
            console.log(values);
            navigation.navigate("OTP");
            console.log("API Response: ", response.data);
        } catch (error:any){
            if(error.response){
                console.error("API error: ", error.response.data);
                console.error("API error status: ", error.response.status);
            } else if (error.request){
                // The request was made but no response was received
                console.error("API error: No response received");
                console.log(error);
            } else {
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
            <Logo source={logo} mainText="Create Account" subText="Create a Business Account " />
        

    {/* Bottom section */}
    <View style={{ paddingHorizontal: 10, marginTop: 62 ,alignItems: "center"}}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ handleChange, handleSubmit, values }) => (
            <View>
                <View style={{flexDirection: "row", alignItems: "center",justifyContent: "center", backgroundColor: "transparent", borderRadius: 20, padding: 2}} >
                <Field
                    component={InputField}
                    imageSource={require("../../../assets/icons/building.png")}
                    name="name"
                    placeholder="ABC Industry"
                />
                </View>

                <View style={{marginTop: 10, flexDirection: "row", alignItems: "center", justifyContent: "center",  backgroundColor: "transparent", borderRadius: 20, padding: 2, }} >
                <Field
                    component={InputField}
                    imageSource={require("../../../assets/icons/mail.png")}
                    name="email"
                    placeholder="contact@abcindustries.com"
                />
                </View>

                <View style={{marginTop: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "transparent", borderRadius: 20, padding: 2, }} >
                <Field
                    component={InputField}
                    imageSource={require("../../../assets/icons/user.png")}
                    name="username"
                    placeholder="abcindustry"
                />
                </View>

                <View style={{marginTop: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "transparent", borderRadius: 20, padding: 2, }} >
                <Field
                    component={InputField}
                    imageSource={require("../../../assets/icons/password.png")}
                    name="password"
                    placeholder="*********"
                    secureTextEntry={true}
                />
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                <View style={{ flexDirection: "row", justifyContent: "flex-end", marginTop: 5, }} >
                    <RegularSmall>
                        <Text style={{ color: "#2656FF" }}>
                            Forgot Password?
                        </Text>
                    </RegularSmall>
                </View>
                </TouchableOpacity>

                <View style={{ marginTop: 10, alignItems: 'center',flexDirection: 'row', justifyContent: "center"}}>

                    <SmallerRegular>
                        <Text style={{ alignItems: 'center'}}>I agree to the</Text>
                    </SmallerRegular>
                    <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
                        <View>
                        <SmallerRegular>
                            <Text style={{ color: '#2656FF' }}>Terms & conditions</Text>
                        </SmallerRegular>
                        </View>
                    </TouchableOpacity>
                    <SmallerRegular>
                        <Text style={{ alignItems: 'center'}}>and the</Text>
                    </SmallerRegular>
                    <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
                        <View>
                        <SmallerRegular>
                            <Text style={{ color: '#2656FF' }}>privacy policy</Text>
                        </SmallerRegular>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: "row",marginTop: 20,alignItems: "center", width: 340, gap:10}}>
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
                <Text style={{ alignItems: 'center'}}>Don't have an account?</Text>
            </RegularNormal>
            <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CreateBusinessAccount;