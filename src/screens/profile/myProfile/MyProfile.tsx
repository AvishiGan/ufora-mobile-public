import React from "react";
import ProfileCommonSection from "./CommonSection";
import { MyProfileMiddleTabNavigator } from "../../../navigation";

const MyProfile: React.FC = () => {
  return (
    <React.Fragment>
      <ProfileCommonSection />
      <MyProfileMiddleTabNavigator />
    </React.Fragment>
  );
};

export default MyProfile;
