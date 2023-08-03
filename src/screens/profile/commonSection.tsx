import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { profileData } from "./data";
import { TopBar, ProfileSlider, ProfileHeader } from "../../components";

const ProfileCommonSection: React.FC = () => {
  return (
    <View style={styles.topSectionContainer}>
      <TopBar titleBarName={profileData.titleBarName} />
      <ProfileHeader data={profileData} />
      <ProfileSlider slideTitles={profileData.slideTitles} />
    </View>
  );
};

export default ProfileCommonSection;
