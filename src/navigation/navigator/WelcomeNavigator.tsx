import React, { FunctionComponent } from "react";
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
import Friends from "../../screens/friends/Friends";
import MyFriendsScreen from "../../screens/friends/MyFriendsScreen";

//React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Feed from "../../screens/Authentication/Feed";
import StudentOTP from "../../screens/Authentication/StudentOTP";
import { COLORS } from "../../constants";
import { HeaderRight, HeaderLeft } from "../../components";
// import BlogCentre from "../../screens/blog";
import FeedScreen from "../../screens/Feed/FeedScreen";
// import TabNavigator from "./TabNavigator";

// Profile related navigation
import CreatePost from "../../components/profile/createPost/CreatePost";
import AllPosts from "../../screens/profile/AllPosts";

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  CreateAccount: undefined;
  OTP: { email: string };
  ChangePassword: undefined;
  CreateStudentAccount: undefined;
  CreateBusinessAccount: undefined;
  SelectUniversity: { username: string };
  UniOTP: { email: string };
  StudentOTP: { username: string; email: string };
  ForgotPassOTP: { email: string };
  Feed: undefined;
  BlogCentre: undefined;
  Friends: undefined;
  MyFriendsScreen: undefined;
  FeedScreen: undefined;
  Main: undefined;
  AllPosts: undefined;
  CreatePost: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const WelcomeNavigator = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
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
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateStudentAccount"
        component={CreateStudentAccount}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateBusinessAccount"
        component={CreateBusinessAccount}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SelectUniversity"
        component={SelectUniversity}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UniOTP"
        component={UniOTP}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StudentOTP"
        component={StudentOTP}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassOTP"
        component={ForgotPassOTP}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen name="Feed" component={Feed} />
      {/* <Stack.Screen 
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
                />  */}
      <Stack.Screen
        name="Friends"
        component={Friends}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyFriendsScreen"
        component={MyFriendsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FeedScreen"
        component={FeedScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreatePost"
        component={CreatePost}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AllPosts"
        component={AllPosts}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default WelcomeNavigator;
