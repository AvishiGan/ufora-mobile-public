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
    const [isSelected, setSelection] = useState(false);

const initialValues: FormValues = {
    name: "",
    email: "",
    username: "",
    password: "",
    };

    const handleSubmit = async(values: FormValues) => {
        try{
            const response = await axios.post("http://192.168.1.5:3000/register/company",{
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
                const otpResponse = await axios.post("http://192.168.1.5:3000/otp/request", {
                    email: values.email,
                });

                console.log("OTP Request Response: ", otpResponse.data);
            } catch (otpError){
                console.error("OTP Request Error: ", otpError);
            }

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
    <View style={{ paddingHorizontal: 10, marginTop: 40 ,alignItems: "center"}}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ handleChange, handleSubmit, values }) => (
            <View>
                <View style={{flexDirection: "row", alignItems: "center",justifyContent: "center", backgroundColor: "transparent", borderRadius: 20, padding: 2}} >
                <Field
                    component={InputField}
                    imageSource={require("../../../assets/icons/building.png")}
                    name="name"
                    placeholder="Business Name"
                    onChangeText={handleChange("name")}
                    value={values.name}
                />
                </View>

                <View style={{marginTop: 10, flexDirection: "row", alignItems: "center", justifyContent: "center",  backgroundColor: "transparent", borderRadius: 20, padding: 2, }} >
                <Field
                    component={InputField}
                    imageSource={require("../../../assets/icons/mail.png")}
                    name="email"
                    placeholder="Business Email"
                    onChangeText={handleChange("email")}
                    value={values.email}
                />
                </View>

                <View style={{marginTop: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "transparent", borderRadius: 20, padding: 2, }} >
                <Field
                    component={InputField}
                    imageSource={require("../../../assets/icons/user.png")}
                    name="username"
                    placeholder="Username"
                    onChangeText={handleChange("username")}
                    value={values.username}
                />
                </View>

                <View style={{marginTop: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "transparent", borderRadius: 20, padding: 2, }} >
                <Field
                    component={InputField}
                    imageSource={require("../../../assets/icons/password.png")}
                    name="password"
                    placeholder="Password"
                    secureTextEntry={true}
                    showPasswordToggle = {true}
                    onChangeText={handleChange("password")}
                    value={values.password}
                />
                </View>

                <View style={{ marginTop: 10, alignItems: 'center',flexDirection: 'row', justifyContent: "center"}}>

                {/* Custom Checkbox */}
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
        <View style={{ justifyContent: "center",marginTop: 8, alignItems: "center", flexDirection: "row", }}>
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
