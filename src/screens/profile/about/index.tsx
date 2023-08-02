import React from "react";
import { View } from "react-native";
import AboutCardSection from "./cards";
import { ProfileSlider } from "../../../components";
import ProfileCommonSection from "../commonSection";

const ProfileAboutSection: React.FC = () => {
  return (
    <View>
      {/* <ProfileCommonSection /> */}
      <AboutCardSection />
    </View>
  );
};

export default ProfileAboutSection;
