import React, {FunctionComponent} from "react";
// import Welcome from "../../screens/Authentication/Welcome";
// import Login from "../../screens/Authentication/Login";
// import ForgotPassword from "../../screens/Authentication/ForgotPassword";
// import CreateAccount from "../../screens/Authentication/CreateAccount";
// import OTP from "../../screens/Authentication/OTP";

//React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BlogCentre  from "../../screens/blog";
import { COLORS } from "../../constants";
import { HeaderRight, HeaderLeft } from "../../components";


export type RootStackParamList = {
    Welcome: undefined;
    // Login: undefined;
    // ForgotPassword: undefined;
    // CreateAccount: undefined;
    // OTP: undefined;
    BlogCentre: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="Welcome"
            >
                {/* <Stack.Screen
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
                /> */}

                <Stack.Screen 
                    name="BlogCentre"
                    component={BlogCentre}
                    options={{headerShown: true,
                    headerStyle: {backgroundColor: '#F2F2F2'},
                    headerShadowVisible: false,
                    headerLeft: () => (
                      <HeaderLeft />
                    ),
                    headerRight: () => (
                      <HeaderRight />
                    ),
                    headerTitle: ""
                    }}
                />  
            </Stack.Navigator>
        </NavigationContainer>
    )
    
}

export default RootStack;