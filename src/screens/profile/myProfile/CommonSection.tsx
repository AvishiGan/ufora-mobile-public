import React from "react";
import { View } from "react-native";
import { styles } from "../../../components/profile/styles";
import { myProfileData } from "./MyProfileData";
import { TopBar, ProfileHeader } from "../../../components";
import { SafeAreaView } from "react-native-safe-area-context";

const MyProfileCommonSection: React.FC = () => {
  return (
    <SafeAreaView>
      <View style={styles.topSectionContainer}>
        <TopBar titleBarName={myProfileData.titleBarName} />
        <ProfileHeader data={myProfileData} profileType="user" />
      </View>
    </SafeAreaView>
  );
};

export default MyProfileCommonSection;
