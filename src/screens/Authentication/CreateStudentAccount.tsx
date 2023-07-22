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

    const handleSubmit = (values: FormValues) => {
    //const handleSubmit = () => Alert.alert("Login");
    // Making the API request
    //console.log(values);
    navigation.navigate("StudentOTP");
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
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ handleChange, handleSubmit, values }) => (
            <View style={{alignItems: "center"}}>
                <View style={{flexDirection: "row", alignItems: "center", backgroundColor: "transparent", borderRadius: 20, padding: 2}} >
                <Field
                    component={InputField}
                    imageSource={require("../../../assets/icons/person-standing.png")}
                    name="name"
                    placeholder="Saman Perera"
                />
                </View>

                <View style={{marginTop: 10, flexDirection: "row", alignItems: "center", backgroundColor: "transparent", borderRadius: 20, padding: 2, }} >
                <Field
                    component={InputField}
                    imageSource={require("../../../assets/icons/mail.png")}
                    name="email"
                    placeholder="samanperera@gmail.com"
                />
                </View>

                <View style={{marginTop: 10, flexDirection: "row", alignItems: "center", backgroundColor: "transparent", borderRadius: 20, padding: 2, }} >
                <Field
                    component={InputField}
                    imageSource={require("../../../assets/icons/user.png")}
                    name="username"
                    placeholder="SamanPerera"
                />
                </View>

                <View style={{marginTop: 10, flexDirection: "row", alignItems: "center", backgroundColor: "transparent", borderRadius: 20, padding: 2, }} >
                <Field
                    component={InputField}
                    imageSource={require("../../../assets/icons/password.png")}
                    name="password"
                    placeholder="*********"
                    secureTextEntry={true}
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

export default CreateBusinessAccount;
