import React, {FunctionComponent} from "react";
import Welcome from "../app/Welcome";
import Login from "../app/Login";
import ForgotPassword from "../app/ForgotPassword";
import CreateAccount from "../app/CreateAccount";
import OTP from "../app/OTP";

//React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


export type RootStackParamList = {
    Welcome: undefined;
    Login: undefined;
    ForgotPassword: undefined;
    CreateAccount: undefined;
    OTP: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="Welcome"
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
            </Stack.Navigator>
        </NavigationContainer>
    )
    
}

export default RootStack;