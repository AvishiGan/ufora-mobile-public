import React from "react";
import ProfileCommonSection from "./CommonSection";
import { CompanyProfileMiddleTabNavigator } from "../../../navigation";

const CompanyProfile: React.FC = () => {
  return (
    <React.Fragment>
      <ProfileCommonSection />
      <CompanyProfileMiddleTabNavigator />
    </React.Fragment>
  );
};

export default CompanyProfile;
