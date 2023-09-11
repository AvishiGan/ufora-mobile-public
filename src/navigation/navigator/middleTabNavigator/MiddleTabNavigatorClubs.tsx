import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { tabBarStyles, customTabBarStyles } from "./styles";
import {
  ProfileAboutSection,
  ProfilePostSection,
  ProfileBlogSection,
} from "../../../screens";
import ClubProfilePostsSection from "../../../screens/clubView/clubProfile/AllClubPosts";
import AboutClub from "../../../screens/clubView/clubProfile/AboutClub";
import AllClubEvents from "../../../screens/clubView/clubProfile/AllClubEvents";

const Tab = createMaterialTopTabNavigator();

type TabName = "Posts" | "About" | "Events";

/**
 * Interface that defines the expected props for the CustomTab component
 */
type CustomTabProps = {
  state: any;
  descriptors: any;
  navigation: any;
  activeTab: TabName;
  handleTabPress: (tabName: TabName) => void;
};

const CustomTab: React.FC<CustomTabProps> = ({
  state,
  descriptors,
  navigation,
  activeTab,
  handleTabPress,
}) => {
  return (
    <View style={customTabBarStyles.tabBar}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || route.name;

        const isActive = activeTab === route.name;

        return (
          <TouchableOpacity
            key={index}
            style={[
              customTabBarStyles.tabItem,
              isActive
                ? customTabBarStyles.activeTabItem
                : customTabBarStyles.inactiveTabItem,
            ]}
            onPress={() => {
              handleTabPress(route.name);
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
              });
              if (!isActive && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            }}
          >
            <Text
              style={
                isActive
                  ? customTabBarStyles.activeText
                  : customTabBarStyles.inactiveText
              }
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const MiddleTabNavigatorClubs = () => {
  const [activeTab, setActiveTab] = useState<TabName>("Posts");

  const handleTabPress = (tabName: TabName) => {
    setActiveTab(tabName);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <>
        <Tab.Navigator
          initialRouteName="Posts"
          tabBar={(props) => (
            <CustomTab
              {...props}
              activeTab={activeTab}
              handleTabPress={handleTabPress}
            />
          )}
        >
          <Tab.Screen name="Posts" component={ClubProfilePostsSection} />
          <Tab.Screen name="About" component={AboutClub} />
          <Tab.Screen name="Events" component={AllClubEvents} />
          
        </Tab.Navigator>
      </>
    </SafeAreaView>
  );
};

export default MiddleTabNavigatorClubs;
