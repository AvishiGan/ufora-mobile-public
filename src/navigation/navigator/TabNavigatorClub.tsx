import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// SCREENS
import FeedScreen from "../../screens/clubView/feed/FeedScreen";
import AllClubs from "../../screens/clubView/allClubs/AllClubs";
import ClubProfile from "../../screens/clubView/clubProfile/ClubProfile";
import NotificationScreen from "../../screens/clubView/notifications/Notifications";
import { HeaderLeft, HeaderRight } from "../../components";
import MoreScreen from "../../screens/clubView/menu/Menu"

import {
  Home,
  CalendarRange,
  Shapes,
  Bell,
  LayoutDashboard,
} from "lucide-react-native";

// type checking
export type TabStackParamList = {
  Home: undefined;
  AllClubs: undefined;
  ClubProfile: undefined;
  Notification: undefined;
  More: undefined;
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
          } else if (route.name === "AllClubs") {
            return (
              <CalendarRange
                color={focused ? "#2656FF" : "#B8B8B8"}
                size={24}
              />
            );
          } else if (route.name === "ClubProfile") {
            return <Shapes color={focused ? "#2656FF" : "#B8B8B8"} size={24} />;
          } else if (route.name === "Notification") {
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
      <Tab.Screen
        name="Home"
        component={FeedScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="AllClubs"
        component={AllClubs}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ClubProfile"
        component={ClubProfile}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
