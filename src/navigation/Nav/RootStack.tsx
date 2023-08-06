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
import ForgotPassOTP from "../../screens/Authentication/ForgotPassOTP";

//React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Feed from "../../screens/Authentication/Feed";
import StudentOTP from "../../screens/Authentication/StudentOTP";

export type RootStackParamList = {
    Welcome: undefined;
    Login: undefined;
    ForgotPassword: undefined;
    CreateAccount: undefined;
    OTP: {email:string};
    ChangePassword: undefined;
    CreateStudentAccount: undefined;
    CreateBusinessAccount: undefined;
    SelectUniversity: {username:string};
    UniOTP: {email:string};
    StudentOTP: {username:string, email:string};
    ForgotPassOTP: {email:string};
    Feed: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown: false}}/>  
                <Stack.Screen name="CreateAccount" component={CreateAccount} options={{headerShown: false}}/>  
                <Stack.Screen name="OTP" component={OTP} options={{headerShown: false}}/>  
                <Stack.Screen name="ChangePassword" component={ChangePassword} options={{headerShown: false}}/> 
                <Stack.Screen name="CreateStudentAccount" component={CreateStudentAccount} options={{headerShown: false}}/> 
                <Stack.Screen name="CreateBusinessAccount" component={CreateBusinessAccount} options={{headerShown: false}}/> 
                <Stack.Screen name="SelectUniversity" component={SelectUniversity} options={{headerShown: false}}/>
                <Stack.Screen name="UniOTP" component={UniOTP} options={{headerShown: false}}/>
                <Stack.Screen name="StudentOTP" component={StudentOTP} options={{headerShown: false}}/>
                <Stack.Screen name="ForgotPassOTP" component={ForgotPassOTP} options={{headerShown: false}}/>
                <Stack.Screen name="Feed" component={Feed}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
    
}

export default RootStack;