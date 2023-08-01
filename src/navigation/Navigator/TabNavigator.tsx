import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// SCREENS
import FeedScreen from "../../screens/feed/FeedScreen"

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
//   Notification: undefined;
//   Friends: undefined;
//   University: undefined;
//   More: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
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
          } else if (route.name === "More") {
            return (
              <LayoutDashboard
                color={focused ? "#2656FF" : "#B8B8B8"}
                size={24}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={FeedScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
