import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
  ProfileAboutSection,
  ProfilePostSection,
  ProfileBlogSection,
  ProfilePortfolioSection,
  ProfileCommonSection,
} from "../src/screens";

export type ProfileStackParamList = {
  ProfileAboutSection: undefined;
  ProfilePostSection: undefined;
  ProfileBlogSection: undefined;
  ProfilePortfolioSection: undefined;
};

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProfileAboutSection">
        <Stack.Screen
          name="ProfileAboutSection"
          component={ProfileAboutSection}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfilePostSection"
          component={ProfilePostSection}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileBlogSection"
          component={ProfileBlogSection}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfilePortfolioSection"
          component={ProfilePortfolioSection}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ProfileStack;
