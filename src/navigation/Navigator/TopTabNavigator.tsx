import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  ProfileAboutSection,
  ProfileBlogSection,
  ProfilePortfolioSection,
  ProfilePostSection,
} from "../../screens";

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="ProfileAboutSection">
      <Tab.Screen name="About" component={ProfileAboutSection} />
      <Tab.Screen name="Posts" component={ProfilePostSection} />
      <Tab.Screen name="Blog" component={ProfileBlogSection} />
      <Tab.Screen name="Portfolio" component={ProfilePortfolioSection} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
