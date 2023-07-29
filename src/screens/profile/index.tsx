import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ProfileAboutSection from "../profile/about/index";
import ProfileCommonSection from "./commonSection";

const MyProfile: React.FC = () => {
  return (
    <View>
      <ProfileCommonSection />
      {/* <ProfileAboutSection /> */}
    </View>
  );
};

export default MyProfile;
