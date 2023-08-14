import React, { FunctionComponent } from "react";
import Welcome from "../../screens/Authentication/Welcome";
import Login from "../../screens/Authentication/Login";
import ForgotPassword from "../../screens/Authentication/ForgotPassword";
import CreateAccount from "../../screens/Authentication/CreateAccount";
import OTP from "../../screens/Authentication/OTP";
// import ChangePassword from "../../screens/Authentication/ChangePassword";
// import CreateStudentAccount from "../../screens/Authentication/CreateStudentAccount";
// import CreateBusinessAccount from "../../screens/Authentication/CreateBusinessAccount";
// import SelectUniversity from "../../screens/Authentication/SelectUniversity";
// import UniOTP from "../../screens/Authentication/UniOTP";
// import ForgotPassOTP from "../../screens/Authentication/ForgotPassOTP";
import Friends from "../../screens/friends/Friends";
import MyFriends from "../../screens/friends/MyFriends";
import { HeaderRight, HeaderLeft } from "../../components";
import BlogCentre from "../../screens/blog/blogCentreScreen";
import AddBlog from "../../screens/blog/blogEditorScreen";
import BlogContent from "../../screens/blog/blogContentScreen";
import ProjectCentre from "../../screens/project/projectCentreScreen";
import ProjectContent from "../../screens/project/projectContentScreen";
import UserMenu from "../../screens/UserMenu";

//React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Feed from "../../screens/Authentication/Feed";
import StudentOTP from "../../screens/Authentication/StudentOTP";
// import FeedScreen from "../../screens/Feed/FeedScreen";
// import TabNavigator from "./TabNavigator";

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
  Friends: undefined;
  MyFriends: undefined;
  FeedScreen: undefined;
  Main: undefined;
  BlogCentre: undefined;
  AddBlog: undefined;
  BlogContent: undefined;
  ProjectCentre: undefined;
  ProjectContent: undefined;
  UserMenu:  undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const WelcomeNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="UserMenu">
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
      /> */}
      {/* <Stack.Screen
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
      /> */}
      {/* <Stack.Screen
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
       <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Feed" component={Feed} /> */}
      {/* <Stack.Screen
        name="Friends"
        component={Friends}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyFriends"
        component={MyFriends}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FeedScreen"
        component={FeedScreen}
        options={{ headerShown: false }}
      /> */}

      <Stack.Screen 
        name="UserMenu" 
        component={UserMenu} 
        options={{headerShown: true,
        headerStyle: {backgroundColor: '#F2F2F2'},
        headerShadowVisible: false,
        headerLeft: () => (
        <HeaderLeft showTitle={false} headerTitle="Menu" />
        ),
        headerRight: () => (
        <HeaderRight />
        ),
        headerTitle: ""
        }}
      /> 

      <Stack.Screen 
        name="BlogCentre"
        component={BlogCentre}
        options={{headerShown: true,
        headerStyle: {backgroundColor: '#F2F2F2'},
        headerShadowVisible: false,
        headerLeft: () => (
        <HeaderLeft showTitle={true} headerTitle={"Blog Centre"} /> // Show the "Blog Centre" text
        ),
        headerRight: () => (
        <HeaderRight />
        ),
        headerTitle: ""
        }}
      />

      <Stack.Screen 
        name="AddBlog" 
        component={AddBlog} 
        options={{headerShown: true,
        headerStyle: {backgroundColor: '#F2F2F2'},
        headerShadowVisible: false,
        headerLeft: () => (
        <HeaderLeft showTitle={false} headerTitle="" />
        ),
        headerRight: () => (
        <HeaderRight />
        ),
        headerTitle: ""
        }}
      /> 

      <Stack.Screen 
        name="BlogContent"
        component={BlogContent}
        options={{headerShown: true,
        headerStyle: {backgroundColor: '#F2F2F2'},
        headerShadowVisible: false,
        headerLeft: () => (
        <HeaderLeft showTitle={false} headerTitle="" />
        ),
        headerRight: () => (
        <HeaderRight />
        ),
        headerTitle: ""
        }}
      />

      <Stack.Screen 
        name="ProjectCentre"
        component={ProjectCentre}
        options={{headerShown: true,
        headerStyle: {backgroundColor: '#F2F2F2'},
        headerShadowVisible: false,
        headerLeft: () => (
        <HeaderLeft showTitle={true} headerTitle={"Project Centre"} />
        ),
        headerRight: () => (
        <HeaderRight />
        ),
        headerTitle: ""
        }}
      />

      <Stack.Screen 
        name="ProjectContent"
        component={ProjectContent}
        options={{headerShown: true,
        headerStyle: {backgroundColor: '#F2F2F2'},
        headerShadowVisible: false,
        headerLeft: () => (
        <HeaderLeft showTitle={false} headerTitle="" />
        ),
        headerRight: () => (
        <HeaderRight />
        ),
        headerTitle: ""
        }}
      /> 

    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default WelcomeNavigator;
