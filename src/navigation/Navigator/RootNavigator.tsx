import React from "react";
import TabNavigator from "./TabNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeNavigator from "./WelcomeNavigator";
import Friends from "../../screens/friends/Friends";
import MyFriendsScreen from "../../screens/friends/MyFriendsScreen";
import UniversityGroupsScreen from "../../screens/universityMentoring/UniversityGroupsScreen";
import MentorhipScreen from "../../screens/universityMentoring/MentorhipScreen";
import MentorsScreen from "../../screens/universityMentoring/MentorsScreen";
import MyMentorshipScreen from "../../screens/universityMentoring/MyMentorshipScreen";
import UniversityPeopleScreen from "../../screens/universityMentoring/UniversityPeopleScreen";
import UserProfileScreen from "../../screens/profile/myProfile/MyProfile";
import BlogCentre from "../../screens/blog/blogCentreScreen";
import BlogContent from "../../screens/blog/blogContentScreen";
import AddBlog from "../../screens/blog/blogEditorScreen";
import ProjectCentre from "../../screens/project/projectCentreScreen";
import ProjectContent from "../../screens/project/projectContentScreen";
import { HeaderLeft, HeaderRight } from "../../components";

import createClub from "../../screens/clubView/createClub/CreateClub";
import ClubOTP from "../../screens/clubView/createClub/ClubOTP";
import SuccessScreen from "../../screens/clubView/createClub/SuccessScreen";

/**
 * Profile related navigation
 */
import CreatePost from "../../components/profile/createPost/CreatePost";
import TabNavigatorClub from "./TabNavigatorClub";
// import CreateProfile from "../../components/profile/createOrEditProfile/CreateMyProfile";
import CreateProfile from "../../components/profile/createEditProfile/CreateProfile";

import Followers from "../../screens/clubView/clubProfile/Followers";
import Members from "../../screens/clubView/clubProfile/Members";

import ManageMenu from "../../screens/clubView/clubProfile/manageClub/ManageMenu";
import Admins from "../../screens/clubView/clubProfile/manageClub/Admins"
import Officials from "../../screens/clubView/clubProfile/manageClub/Officials"


export type RootStackParamList = {
  Welcome: undefined;
  Main: undefined;
  Login: undefined;
  UniversityGroupsScreen: undefined;
  MentorshipScreen: undefined;
  MentorsScreen: undefined;
  MyMentorshipScreen: undefined;
  UniversityPeopleScreen: undefined;
  Friends: undefined;
  MyFriendsScreen: undefined;
  UserProfileScreen: undefined;
  BlogCentre: undefined;
  AddBlog: undefined;
  BlogContent: undefined;
  ProjectCentre: undefined;
  ProjectContent: undefined;
  createClub: undefined;
  clubOTP: undefined;
  SuccessScreen: undefined;
  ClubView: undefined
  Followers: undefined
  Members: undefined
  ManageMenu: undefined
  Admins:undefined
  Officials: undefined

  /**
   * Profile related navigation
   */
  CreatePost: undefined;
  CreateProfile: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="createClub">
      <RootStack.Screen
        name="CreatePost"
        component={CreatePost}
        options={{ headerShown: false }}
      />

      <RootStack.Screen
        name="Welcome"
        component={WelcomeNavigator}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Friends"
        component={Friends}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="MyFriendsScreen"
        component={MyFriendsScreen}
        options={{ headerShown: false }}
      />

      <RootStack.Group>
        <RootStack.Screen
          name="Main"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </RootStack.Group>

      <RootStack.Screen
        name="UniversityGroupsScreen"
        component={UniversityGroupsScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="MentorshipScreen"
        component={MentorhipScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="MentorsScreen"
        component={MentorsScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="MyMentorshipScreen"
        component={MyMentorshipScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="UniversityPeopleScreen"
        component={UniversityPeopleScreen}
        options={{ headerShown: false }}
      />

      {/* Profile Screen */}
      <RootStack.Screen
        name="UserProfileScreen"
        component={UserProfileScreen}
        options={{ headerShown: false }}
      />

      {/* Blogs */}
      <RootStack.Screen
        name="BlogCentre"
        component={BlogCentre}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "#F2F2F2" },
          headerShadowVisible: false,
          headerLeft: () => (
            <HeaderLeft showTitle={true} headerTitle={"Blog Centre"} /> // Show the "Blog Centre" text
          ),
          headerRight: () => <HeaderRight />,
          headerTitle: "",
        }}
      />

      <RootStack.Screen
        name="AddBlog"
        component={AddBlog}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "#F2F2F2" },
          headerShadowVisible: false,
          headerLeft: () => <HeaderLeft showTitle={false} headerTitle="" />,
          headerRight: () => <HeaderRight />,
          headerTitle: "",
        }}
      />

      <RootStack.Screen
        name="BlogContent"
        component={BlogContent}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "#F2F2F2" },
          headerShadowVisible: false,
          headerLeft: () => <HeaderLeft showTitle={false} headerTitle="" />,
          headerRight: () => <HeaderRight />,
          headerTitle: "",
        }}
      />
      {/* Projects */}
      <RootStack.Screen
        name="ProjectCentre"
        component={ProjectCentre}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "#F2F2F2" },
          headerShadowVisible: false,
          headerLeft: () => (
            <HeaderLeft showTitle={true} headerTitle={"Project Centre"} />
          ),
          headerRight: () => <HeaderRight />,
          headerTitle: "",
        }}
      />

      <RootStack.Screen
        name="ProjectContent"
        component={ProjectContent}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "#F2F2F2" },
          headerShadowVisible: false,
          headerLeft: () => <HeaderLeft showTitle={false} headerTitle="" />,
          headerRight: () => <HeaderRight />,
          headerTitle: "",
        }}
      />

      <RootStack.Screen
        name="CreateProfile"
        component={CreateProfile}
        options={{ headerShown: false }}
      />

      <RootStack.Screen 
        name="createClub"
        component={createClub}
        options={{ headerShown: false }}
      />

      <RootStack.Screen 
        name="clubOTP"
        component={ClubOTP}
        options={{ headerShown: false }}
      />

    <RootStack.Screen 
        name="SuccessScreen"
        component={SuccessScreen}
        options={{ headerShown: false }}
      />

      <RootStack.Group>
        <RootStack.Screen
          name="ClubView"
          component={TabNavigatorClub}
          options={{ headerShown: false }}
        />
      </RootStack.Group>

      <RootStack.Screen 
        name="Followers"
        component={Followers}
        options={{ headerShown: false }}
      />

      <RootStack.Screen 
        name="Members"
        component={Members}
        options={{ headerShown: false }}
      />

    <RootStack.Screen 
        name="ManageMenu"
        component={ManageMenu}
        options={{ headerShown: false }}
      />

    <RootStack.Screen 
        name="Admins"
        component={Admins}
        options={{ headerShown: false }}
      />

    <RootStack.Screen 
        name="Officials"
        component={Officials}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
