import React, { FunctionComponent } from "react";
// import Welcome from "../../screens/Authentication/Welcome";
// import Login from "../../screens/Authentication/Login";
// import ForgotPassword from "../../screens/Authentication/ForgotPassword";
// import CreateAccount from "../../screens/Authentication/CreateAccount";
// import OTP from "../../screens/Authentication/OTP";
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
import { COLORS } from "../../constants";
import { HeaderRight, HeaderLeft } from "../../components";
import BlogCentre from "../../screens/blog";

import UserProfile from "../../screens/profile/UserProfile";
import CreatePost from "../../components/profile/createPost/CreatePost";

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  CreateAccount: undefined;
  OTP: undefined;
  ChangePassword: undefined;
  CreateStudentAccount: undefined;
  CreateBusinessAccount: undefined;
  SelectUniversity: undefined;
  UniOTP: { email: string };
  StudentOTP: undefined;
  ForgotPassOTP: undefined;
  Feed: undefined;
  BlogCentre: undefined;
  UserProfile: undefined;
  CreatePost: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        {/* <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OTP"
          component={OTP}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="CreateStudentAccount"
          component={CreateStudentAccount}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="CreateBusinessAccount"
          component={CreateBusinessAccount}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="SelectUniversity"
          component={SelectUniversity}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="UniOTP"
          component={UniOTP}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="StudentOTP"
          component={StudentOTP}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="ForgotPassOTP"
          component={ForgotPassOTP}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen
          name="BlogCentre"
          component={BlogCentre}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#F2F2F2" },
            headerShadowVisible: false,
            headerLeft: () => <HeaderLeft />,
            headerRight: () => <HeaderRight />,
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="CreatePost" component={CreatePost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
