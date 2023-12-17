/**
 * This file contains all the blogs information
 */

import React from "react";
import { View } from "react-native";
import { ProfileCommonSection } from "./profile";
import { SafeAreaView } from "react-native-safe-area-context";
import TopTabNavigator from "../navigation/navigator/TopTabNavigator/UserProfileTabs";

const UserProfile = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <ProfileCommonSection />
        <TopTabNavigator />
      </View>
    </SafeAreaView>
  );
};

export default UserProfile;
