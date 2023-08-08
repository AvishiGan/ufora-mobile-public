import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MiddleTabNavigator from "../../navigation/navigator/middleTabNavigator/MiddleTabNavigator";
import ProfileCommonSection from "./CommonSection";

const UserProfile: React.FC = () => {
  return (
    <React.Fragment>
      <ProfileCommonSection />
      <MiddleTabNavigator />
    </React.Fragment>
  );
};

export default UserProfile;
