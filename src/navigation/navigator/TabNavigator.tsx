import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import FeedScreen from "../screens/Feed/FeedScreen";
import NotificationScreen from "../screens/NotificationScreen";
import FriendsScreen from "../screens/FriendsScreen";
import MyUniversity from "../screens/MyUniversity";
import MoreScreen from "../screens/MoreScreen";

// hooks and icons
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/base";
import {
  Home,
  Users,
  GraduationCap,
  Bell,
  LayoutDashboard,
} from "lucide-react-native";

// type checking
export type TabStackParamList = {
  Home: undefined;
  Notification: undefined;
  Friends: undefined;
  University: undefined;
  More: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#2656FF",
        tabBarInactiveTintColor: "#B8B8B8",
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return <Home color={focused ? "#2656FF" : "#B8B8B8"} size={24} />;
          } else if (route.name === "Notification") {
            return <Users color={focused ? "#2656FF" : "#B8B8B8"} size={24} />;
          } else if (route.name === "Friends") {
            return (
              <GraduationCap
                color={focused ? "#2656FF" : "#B8B8B8"}
                size={24}
              />
            );
          } else if (route.name === "University") {
            return <Bell color={focused ? "#2656FF" : "#B8B8B8"} size={24} />;
          }else if (route.name === "More") {
            return <LayoutDashboard color={focused ? "#2656FF" : "#B8B8B8"} size={24} />;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={FeedScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Friends" component={FriendsScreen} />
      <Tab.Screen name="University" component={MyUniversity} />
      <Tab.Screen name="More" component={MoreScreen} />

    </Tab.Navigator>
  );
};

export default TabNavigator;