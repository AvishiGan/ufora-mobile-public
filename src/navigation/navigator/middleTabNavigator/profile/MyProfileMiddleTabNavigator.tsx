import React from "react";
import {
  MyProfileAboutSection,
  MyProfilePostSection,
  MyProfileBlogSection,
  MyProfilePortfolioSection,
} from "../../../../screens/profile/myProfile";
import ProfileMiddleTabNavigator from "./ProfileMiddleTabNavigator";

const MyProfileMiddleTabNavigator: React.FC = () => {
  return (
    <React.Fragment>
      <ProfileMiddleTabNavigator
        initialTab="About"
        sections={[
          { sectionName: "About", component: MyProfileAboutSection },
          { sectionName: "Posts", component: MyProfilePostSection },
          { sectionName: "Blog", component: MyProfileBlogSection },
          { sectionName: "Portfolio", component: MyProfilePortfolioSection },
        ]}
      />
    </React.Fragment>
  );
};

export default MyProfileMiddleTabNavigator;
