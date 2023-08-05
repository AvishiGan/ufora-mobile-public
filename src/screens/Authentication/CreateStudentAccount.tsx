import React, { useState } from 'react';
import {StatusBar, View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Image} from 'react-native';
import Logo from '../../components/authentication/logo/Logo'
import logo from "../../../assets/logo.png"
import RegularNormal from '../../constants/fonts/RegularNormal'
import InputField from '../../components/authentication/inputField/InputField'
import SmallButton from '../../components/authentication/buttons/SmallButton'
import UnfilledButton from '../../components/authentication/buttons/UnfilledButton'
import Authentication, {
    handlePressGoogle,
    handlePressApple,
  } from "../../components/authentication/auth/Authentication";
import SmallerRegular from '../../constants/fonts/SmallerRegular'
import { PersonStanding } from 'lucide-react-native';
import { Mail } from 'lucide-react-native';
import { Key } from 'lucide-react-native';
import { User } from 'lucide-react-native';

//navigation
import { RootStackParamList } from "../../navigation/Nav/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
import { FunctionComponent } from "react";
import { Field, Formik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup'
import RegularSmall from '../../constants/fonts/RegularSmall';
import envs from "../../services/config/env"
type Props = StackScreenProps<RootStackParamList, "CreateStudentAccount">;

interface FormValues {
    name: string;
    email: string;
    username: string;
    password: string;
  }

const validationSchema = Yup.object({
  name: Yup.string().required('Name is Required'),
  email: Yup.string().email("Invalid Email").required('Email is Required'),
  username: Yup.string().required('Username is Required'),
  password: Yup.string().required('Password is Required')
})


const CreateStudentAccount:FunctionComponent<Props> = ({navigation}) => {
    const {API_PATH} = envs;
    const [errorMessage, setErrorMessage] = useState<string>("");
    const initialValues: FormValues = {
        name: "",
        email: "",
        username: "",
        password: "",
    };

    const handleCreateStudentAcc = async(values: FormValues) => {
    try{
        const response = await axios.post(`${API_PATH}/register/undergraduate`,{
            name: values.name,
            email: values.email,
            username: values.username,
            password: values.password
        });
        console.log(values);
        navigation.navigate("StudentOTP", {username: values.username, email: values.email});
        console.log("API Response: ", response.data);

        //Request OTP when create account success
        try{
            const otpResponse = await axios.post(`${API_PATH}/otp/request`, {
                email: values.email,
            });

            console.log("OTP Request Response: ", otpResponse.data);
        } catch (otpError){
            console.error("OTP Request Error: ", otpError);
        }

    } catch (error:any){
        if(error.response.status === 500){
            setErrorMessage("Server Error");
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
    <KeyboardAvoidingView keyboardVerticalOffset={5} behavior="padding" style={styles.container}>
        <StatusBar />
        <View>
            {/* Top section */}
            <Logo source={logo} mainText="Create Account" subText="Create a Student Account " />
        </View>

    {/* Bottom section */}
    <View style={{ paddingHorizontal: 10, marginTop: 100 ,alignItems: "center"}}>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleCreateStudentAcc}>
            {({ handleChange, handleSubmit, values, errors, handleBlur, touched }) => (
            <View style={{alignItems: "center"}}>
                <View style={{flexDirection: "row", alignItems: "center", backgroundColor: "transparent", borderRadius: 20, padding: 2}} >
                <Field
                    component={InputField}
                    error = {touched.name && errors.name}
                    iconComponent={<PersonStanding color={touched.name && errors.name ? "#CC3535" : "#B8B8B8"} size={24} />}
                    name="name"
                    placeholder="Name"
                    onChangeText = {handleChange("name")}
                    value = {values.name}
                    onBlur={handleBlur('name')}
                />
                </View>

                <View style={{marginTop: 8, flexDirection: "row", alignItems: "center", backgroundColor: "transparent", borderRadius: 20}} >
                <Field
                    component={InputField}
                    error = {touched.email && errors.email}
                    iconComponent={<Mail color={touched.email && errors.email ? "#CC3535" : "#B8B8B8"} size={24} />}
                    name="email"
                    placeholder="Email"
                    onChangeText = {handleChange("email")}
                    value = {values.email}
                    onBlur={handleBlur('email')}
                />
                </View>

                <View style={{marginTop: 8, flexDirection: "row", alignItems: "center", backgroundColor: "transparent", borderRadius: 20 }} >
                <Field
                    component={InputField}
                    error = {touched.username && errors.username}
                    iconComponent={<User color={touched.username && errors.username ? "#CC3535" : "#B8B8B8"} size={24} />}
                    name="username"
                    placeholder="Username"
                    onChangeText = {handleChange("username")}
                    value = {values.username}
                    onBlur={handleBlur('username')}
                />
                </View>

                <View style={{marginTop: 8, flexDirection: "row", alignItems: "center", backgroundColor: "transparent", borderRadius: 20 }} >
                <Field
                    component={InputField}
                    error = {touched.password && errors.password}
                    iconComponent={<Key color={touched.password && errors.password ? "#CC3535" : "#B8B8B8"} size={24} />}
                    name="password"
                    placeholder="Password"
                    secureTextEntry={true}
                    showPasswordToggle = {true}
                    onChangeText = {handleChange("password")}
                    value = {values.password}
                    onBlur={handleBlur('password')}
                />
                </View>

                <View style={{marginTop: 0,flexDirection: "row", marginLeft: 8}}>
                  <RegularSmall>
                    {errorMessage ? <Text style={{color: "#CC3535", fontSize: 12}}>{errorMessage}</Text> : null}
                  </RegularSmall>
                </View>

                <View style={{flexDirection: "row",marginTop: 0,alignItems: "center", width: 340, gap:10}}>
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
        <View style={{ marginTop: 15, alignItems: 'center',flexDirection: 'row'}}>
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
        <View style={{ justifyContent: "center",marginTop: 20, alignItems: "center", flexDirection: "row", }}>
        <SmallerRegular>
          <Text style={{ alignItems: "center" }}>By Creating an Account, you agree to our </Text>
        </SmallerRegular>
        <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
        <View>
          <SmallerRegular>
            <Text style={{ color: "#2656FF" }}>Terms of Service</Text>
          </SmallerRegular>
        </View>
      </TouchableOpacity>
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
});

export default CreateStudentAccount;
