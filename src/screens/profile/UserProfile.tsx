import React from "react";
import MiddleTabNavigator from "../../navigation/navigator/middleTabNavigator/MiddleTabNavigator";
import ProfileCommonSection from "./CommonSection";
import { ScrollView } from "react-native-gesture-handler";

const UserProfile: React.FC = () => {
  return (
    <React.Fragment>
        <ProfileCommonSection />
        <MiddleTabNavigator />
    </React.Fragment>
  );
};

export default UserProfile;
