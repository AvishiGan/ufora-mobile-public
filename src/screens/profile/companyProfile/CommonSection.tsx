import React from "react";
import { View } from "react-native";
import { styles } from "../../../components/profile/styles";
import { companyProfileData } from "./CompanyProfileData";
import { TopBar, ProfileHeader } from "../../../components";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileCommonSection: React.FC = () => {
  return (
    <SafeAreaView>
      <View style={styles.topSectionContainer}>
        <TopBar titleBarName={companyProfileData.titleBarName} />
        <ProfileHeader data={companyProfileData} profileType="company" />
      </View>
    </SafeAreaView>
  );
};

export default ProfileCommonSection;
