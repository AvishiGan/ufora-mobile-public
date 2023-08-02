import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { profileData } from "./data";
import {
  UserProfileTopBar,
  ProfileSlider,
  ProfileHeader,
} from "../../components";

const ProfileCommonSection: React.FC = () => {
  return (
    <View style={styles.topSectionContainer}>
      <UserProfileTopBar titleBarName={profileData.titleBarName} />
      <ProfileHeader data={profileData} />
      <ProfileSlider slideTitles={profileData.slideTitles} />
    </View>
  );
};

export default ProfileCommonSection;
