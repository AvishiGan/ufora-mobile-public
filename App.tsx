import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import MyProfile from "./src/screens/profile";
import SafeViewAndroid from "./src/components/SafeViewAndroid";

export default function App() {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <ScrollView>
        <MyProfile />
      </ScrollView>
    </SafeAreaView>
  );
}
