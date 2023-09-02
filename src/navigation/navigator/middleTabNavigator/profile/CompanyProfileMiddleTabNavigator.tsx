import React from "react";
import {
  CompanyProfileAboutSection,
  CompanyProfileJobSection,
  CompanyProfilePostSection,
} from "../../../../screens/profile/companyProfile";
import ProfileMiddleTabNavigator from "./ProfileMiddleTabNavigator";

const CompanyProfileMiddleTabNavigator: React.FC = () => {
  return (
    <React.Fragment>
      <ProfileMiddleTabNavigator
        initialTab="Posts"
        sections={[
          { sectionName: "Posts", component: CompanyProfilePostSection },
          { sectionName: "About", component: CompanyProfileAboutSection },
          { sectionName: "Jobs", component: CompanyProfileJobSection },
        ]}
      />
    </React.Fragment>
  );
};

export default CompanyProfileMiddleTabNavigator;
