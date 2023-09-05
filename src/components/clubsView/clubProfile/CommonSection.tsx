import React from "react";
import { View } from "react-native";
import { styles } from "../../../components/profile/styles";
import { profileData } from "../../../screens/clubView/clubProfile/data";
import { TopBar } from "../../../components";
import ProfileHeaderClubs from "./ProfileHeaderClubs";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileCommonSection: React.FC = () => {
  return (
    <SafeAreaView>
      <View style={styles.topSectionContainer}>
        <TopBar titleBarName={profileData.titleBarName} />
        <ProfileHeaderClubs data={profileData} />
      </View>
    </SafeAreaView>
  );
};

export default ProfileCommonSection;