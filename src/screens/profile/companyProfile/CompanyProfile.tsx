import React from "react";
import MiddleTabNavigator from "../../../navigation/navigator/middleTabNavigator/MiddleTabNavigator";
import ProfileCommonSection from "./CommonSection";

const CompanyProfile: React.FC = () => {
  return (
    <React.Fragment>
      <ProfileCommonSection />
      <MiddleTabNavigator />
    </React.Fragment>
  );
};

export default CompanyProfile;
