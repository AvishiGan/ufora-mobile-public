import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { profileData } from "./data";
import { UserProfileTopBar, ProfileSlider } from "../../../components";
import UserDetailsContainer from "../commonSection/userDetailsSection/index";

const ProfileCommonSection: React.FC = () => {
  return (
    <View style={styles.topSectionContainer}>
      {/* <UserProfileTopBar titleBarName={profileData.titleBarName} /> */}
      <UserDetailsContainer />
      <ProfileSlider slideTitles={profileData.slideTitles} />
    </View>
  );
};

export default ProfileCommonSection;
