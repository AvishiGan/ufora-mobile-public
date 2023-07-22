import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import MyProfile from "./src/screens/profile";
import SafeViewAndroid from "./src/components/SafeViewAndroid";
import LucideCake from "./assets/LucideCake.svg";
import PostCard from "./src/screens/profile/posts";
// import ProfileHeader from "./src/components/profile/profileHeader/index1";
import ProfileHeader from "./src/components/profile/profileHeader/index";

export default function App() {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <ScrollView>
        {/* <LucideCake width={85} height={30} style={{ color: "#ccc" }} /> */}
        {/* <PostCard /> */}
        {/* <MyProfile /> */}
        {/* <ProfileHeader /> */}
      </ScrollView>
    </SafeAreaView>
  );
}
