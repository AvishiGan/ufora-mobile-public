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
import AchievementCard from "./src/screens/profile/about/cards/achievements";

export default function App() {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <ScrollView>
        {/* <ProfileSlider slideTitles={["About", "Posts", "Friends"]} />
      <ProfileCommonSection /> */}
        {/* <ProfilePortfolioSection /> */}
        {/* <UserDetailsContainer /> */}
        <AchievementCard />
      </ScrollView>
    </SafeAreaView>
  );
}
