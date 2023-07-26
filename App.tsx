import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import SafeViewAndroid from "./src/components/SafeViewAndroid";
import { ProfileSlider, UserProfileTopBar } from "./src/components";
import ProfileCommonSection from "./src/screens/profile/commonSection";
import ProfilePortfolioSection from "./src/screens/profile/portfolio";
import ProfileBlogSection from "./src/screens/profile/blogs";
import UserDetailsContainer from "./src/screens/profile/commonSection/userDetailsSection";
import { Button } from "react-native-paper";
import AboutCardSection from "./src/screens/profile/about/cards";
import ProfileAboutSection from "./src/screens/profile/about";
import { User } from "lucide";

export default function App() {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <ScrollView>
        {/* <UserProfileTopBar titleBarName="Profile" /> */}
        {/* <ProfileSlider slideTitles={["About", "Posts", "Friends"]} /> */}
        {/* <ProfileCommonSection /> */}
        {/* <ProfilePortfolioSection /> */}
        {/* <ProfileCommonSection /> */}
        {/* <UserDetailsContainer /> */}
        {/* <ProfileBlogSection /> */}
        {/* <AboutCardSection /> */}
        {/* <ProfileAboutSection /> */}
        {/* <UserProfileTopBar titleBarName="Profile" /> */}
        {/* <UserDetailsContainer /> */}
        {/* <ProfileCommonSection /> */}
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="20" height="20" rx="10" fill="#2656FF" />
          <path
            d="M13.5 8.5L9.375 12.5L7.5 10.6818"
            stroke="#FEFEFE"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </ScrollView>
    </SafeAreaView>
  );
}
