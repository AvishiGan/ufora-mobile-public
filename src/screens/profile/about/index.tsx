import React from "react";
import { View } from "react-native";
import AboutCardSection from "./cards";
import { ProfileSlider } from "../../../components";
import ProfileCommonSection from "../commonSection";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileAboutSection: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <ProfileCommonSection />
        <AboutCardSection />
      </View>
    </SafeAreaView>
  );
};

export default ProfileAboutSection;
