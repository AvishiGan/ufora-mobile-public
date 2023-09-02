import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

type TabName = "About" | "Posts" | "Blog" | "Portfolio" | "Jobs";

type ProfileSectionProps = {
  sectionName: string;
  component: React.ComponentType<any>;
};

const Tab = createMaterialTopTabNavigator();

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
    <View>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || route.name;
        const isActive = activeTab === route.name;

        return (
          <TouchableOpacity
            key={index}
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
            <Text>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const ProfileMiddleTabNavigator = ({
  initialTab,
  sections,
}: {
  initialTab: TabName;
  sections: ProfileSectionProps[];
}) => {
  const [activeTab, setActiveTab] = useState<TabName>(initialTab);

  const handleTabPress = (tabName: TabName) => {
    setActiveTab(tabName);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <>
        <Tab.Navigator
          initialRouteName={initialTab}
          tabBar={(props) => (
            <CustomTab
              {...props}
              activeTab={activeTab}
              handleTabPress={handleTabPress}
            />
          )}
        >
          {sections.map((section, index) => (
            <Tab.Screen
              key={index}
              name={section.sectionName}
              component={section.component}
            />
          ))}
        </Tab.Navigator>
      </>
    </SafeAreaView>
  );
};

export default ProfileMiddleTabNavigator;
