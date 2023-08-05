import React, { useState } from 'react';
import {StatusBar, View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Image} from 'react-native';
import Logo from '../../components/authentication/logo/Logo'
import logo from "../../../assets/logo.png"
import RegularNormal from '../../constants/fonts/RegularNormal'
import InputField from '../../components/authentication/inputField/InputField'
import RegularSmall from '../../constants/fonts/RegularSmall'
import SmallButton from '../../components/authentication/buttons/SmallButton'
import UnfilledButton from '../../components/authentication/buttons/UnfilledButton'
import Authentication, {
    handlePressGoogle,
    handlePressApple,
  } from "../../components/authentication/auth/Authentication";
import SmallerRegular from '../../constants/fonts/SmallerRegular'
import { building } from 'lucide-react-native';
import { Mail } from 'lucide-react-native';
import { Key } from 'lucide-react-native';
import { User } from 'lucide-react-native';

//navigation
import { RootStackParamList } from "../../navigation/Nav/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
import { FunctionComponent } from "react";
import { Field, Form, Formik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup'
import { Building } from 'lucide-react-native';
type Props = StackScreenProps<RootStackParamList, "CreateBusinessAccount">;

interface FormValues {
    name: string;
    email: string;
    username: string;
    password: string;
  }

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Business name is Required'),
    email: Yup.string().email("Invalid Email").required('Business email is Required'),
    username: Yup.string().required('Username is Required'),
    password: Yup.string().required('Password is Required'),

})

const CreateBusinessAccount:FunctionComponent<Props> = ({navigation}) => {
    const [isSelected, setSelection] = useState(false);
    const [isFormValid, setFormValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const initialValues: FormValues = {
        name: "",
        email: "",
        username: "",
        password: "",
    };

    const handleSubmit = async(values: FormValues) => {

        if (!isSelected) { 
            setFormValid(false); 
          } else {
            setFormValid(true); 
            try{
                const response = await axios.post("http://192.168.1.4:3000/register/company",{
                    name: values.name,
                    email: values.email,
                    username: values.username,
                    password: values.password
                });
                console.log(values);
                navigation.navigate("OTP", {email: values.email});
                console.log("API Response: ", response.data);
    
                //Request OTP when create account success
                try{
                    const otpResponse = await axios.post("http://192.168.1.4:3000/otp/request", {
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
                    console.error("API error: ", error.message);
                }
             }
          }
    };

    const handleBack = () => {
        navigation.navigate("CreateAccount");
    }

    return (
    <KeyboardAvoidingView keyboardVerticalOffset={0} behavior="padding" style={styles.container}>
        <StatusBar />
        <View>
            {/* Top section */}
            <Logo source={logo} mainText="Create Account" subText="Create a Business Account " />
        

    {/* Bottom section */}
    <View style={{ paddingHorizontal: 10, marginTop: 80 ,alignItems: "center"}}>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ handleChange, handleSubmit, values, errors, handleBlur, touched  }) => (
            <View>
                <View style={{flexDirection: "row", alignItems: "center",justifyContent: "center", backgroundColor: "transparent", borderRadius: 20}} >
                <Field
                    component={InputField}
                    error = {touched.name && errors.name}
                    iconComponent={<Building color={touched.name && errors.name ? "#CC3535" : "#B8B8B8"} size={24} />}
                    name="name"
                    placeholder="Business Name"
                    onChangeText={handleChange("name")}
                    value={values.name}
                    onBlur={handleBlur('name')}
                />
                </View>

                <View style={{marginTop: 8, flexDirection: "row", alignItems: "center", justifyContent: "center",  backgroundColor: "transparent", borderRadius: 20 }} >
                <Field
                    component={InputField}
                    error = {touched.email && errors.email}
                    iconComponent={<Mail color={touched.email && errors.email ? "#CC3535" : "#B8B8B8"} size={24} />}
                    name="email"
                    placeholder="Business Email"
                    onChangeText={handleChange("email")}
                    value={values.email}
                    onBlur={handleBlur('email')}
                />
                </View>

                <View style={{marginTop: 8, flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "transparent", borderRadius: 20}} >
                <Field
                    component={InputField}
                    error = {touched.username && errors.username}
                    iconComponent={<User color={touched.username && errors.username ? "#CC3535" : "#B8B8B8"} size={24} />}
                    name="username"
                    placeholder="Username"
                    onChangeText={handleChange("username")}
                    value={values.username}
                    onBlur={handleBlur('username')}
                />
                </View>

                <View style={{marginTop: 8, flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "transparent", borderRadius: 20}} >
                <Field
                    component={InputField}
                    error = {touched.password && errors.password}
                    iconComponent={<Key color={touched.password && errors.password ? "#CC3535" : "#B8B8B8"} size={24} />}
                    name="password"
                    placeholder="Password"
                    secureTextEntry={true}
                    showPasswordToggle = {true}
                    onChangeText={handleChange("password")}
                    value={values.password}
                    onBlur={handleBlur('password')}
                />
                </View>

                <View style={{marginTop: 0,flexDirection: "row", marginLeft: 8}}>
                  <RegularSmall>
                    {errorMessage ? <Text style={{color: "#CC3535", fontSize: 12}}>{errorMessage}</Text> : null}
                  </RegularSmall>
                </View>

                <View style={{ marginTop: 0, alignItems: 'center',flexDirection: 'row', justifyContent: "center"}}>
                {/*Checkbox */}
                <TouchableOpacity onPress={() => setSelection(!isSelected)}>
                    <View
                      style={{
                        width: 15,
                        height: 15,
                        borderWidth: 1,
                        borderColor: isSelected ? '#FEFEFE' : '#000000',
                        borderRadius: 3,
                        marginRight: 10,
                        backgroundColor: isSelected ? '#2656FF' : 'transparent',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                    {isSelected && (
                      <View style={{ width: 7, height: 4, borderColor: '#FFFFFF', borderTopWidth: 2, borderRightWidth: 2, transform: [{ rotate: '130deg' }] }} />
                    )}                    
                    </View>
                  </TouchableOpacity>

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
                <View>
                    {!isFormValid && <Text style={{fontSize: 10, color: "#CC3535", marginTop:5, marginLeft: 30}}>*Checkbox must be checked</Text>}
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
        <View style={{ marginTop: 15, alignItems: 'center',flexDirection: 'row'}}>
            <RegularNormal>
                <Text style={{ alignItems: 'center'}}>Already have an Account?</Text>
            </RegularNormal>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <View>
                <RegularNormal>
                    <Text style={{ color: '#2656FF' }}>Login</Text>
                </RegularNormal>
                </View>
            </TouchableOpacity>
            </View>
        </View>
        <Authentication
            onPressGoogle={handlePressGoogle}
            onPressApple={handlePressApple}
        />
        <View style={{ justifyContent: "center",marginTop: 12, alignItems: "center", flexDirection: "row", }}>
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

export default CreateBusinessAccount;
