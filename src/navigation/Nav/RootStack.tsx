import React, {FunctionComponent} from "react";
import Welcome from "../../screens/Authentication/Welcome";
import Login from "../../screens/Authentication/Login";
import ForgotPassword from "../../screens/Authentication/ForgotPassword";
import CreateAccount from "../../screens/Authentication/CreateAccount";
import OTP from "../../screens/Authentication/OTP";
import ChangePassword from "../../screens/Authentication/ChangePassword";
import CreateStudentAccount from "../../screens/Authentication/CreateStudentAccount";
import CreateBusinessAccount from "../../screens/Authentication/CreateBusinessAccount";
import SelectUniversity from "../../screens/Authentication/SelectUniversity";
import UniOTP from "../../screens/Authentication/UniOTP";

//React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


export type RootStackParamList = {
    Welcome: undefined;
    Login: undefined;
    ForgotPassword: undefined;
    CreateAccount: undefined;
    OTP: undefined;
    ChangePassword: undefined;
    CreateStudentAccount: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="Login"
            >
            
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name="Login"
                    component={Login}
                    options={{headerShown: false}}
                />

                <Stack.Screen 
                    name="ForgotPassword"
                    component={ForgotPassword}
                    options={{headerShown: false}}
                />  

                <Stack.Screen 
                    name="CreateAccount"
                    component={CreateAccount}
                    options={{headerShown: false}}
                />  

                <Stack.Screen 
                    name="OTP"
                    component={OTP}
                    options={{headerShown: false}}
                />  

                <Stack.Screen 
                    name="ChangePassword"
                    component={ChangePassword}
                    options={{headerShown: false}}
                /> 

                <Stack.Screen 
                    name="CreateStudentAccount"
                    component={CreateStudentAccount}
                    options={{headerShown: false}}
                /> 

                <Stack.Screen 
                    name="CreateBusinessAccount"
                    component={CreateBusinessAccount}
                    options={{headerShown: false}}
                /> 

                <Stack.Screen 
                    name="SelectUniversity"
                    component={SelectUniversity}
                    options={{headerShown: false}}
                />

                <Stack.Screen 
                    name="UniOTP"
                    component={UniOTP}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
    
}

export default RootStack;