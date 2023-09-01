import React from "react";
import { View } from "react-native";
import { styles } from "../../../components/profile/styles";
import { profileData } from "./CompanyProfileData";
import { TopBar, ProfileHeader } from "../../../components";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileCommonSection: React.FC = () => {
  return (
    <SafeAreaView>
      <View style={styles.topSectionContainer}>
        <TopBar titleBarName={profileData.titleBarName} />
        <ProfileHeader data={profileData} profileType="company" />
      </View>
    </SafeAreaView>
  );
};

export default ProfileCommonSection;
