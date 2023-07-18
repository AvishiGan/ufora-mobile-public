import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AboutCardSection from "./cards";
import ProfileCommonSection from "../commonSection";

const ProfileAboutSection: React.FC = () => {
  return (
    <View>
      <ProfileCommonSection />
      <AboutCardSection />
    </View>
  );
};

export default ProfileAboutSection;
