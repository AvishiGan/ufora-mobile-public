import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// SCREENS
import FeedScreen from "../../screens/Feed/FeedScreen";
import MyUniversity from "../../screens/universityMentoring/UniversityScreen";
import Friends from "../../screens/friends/Friends";
import NotificationScreen from "../../screens/notification/NotificationScreen";
import { HeaderLeft, HeaderRight } from "../../components";
import MoreScreen from "../../screens/UserMenu/index";

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
  University: undefined;
  Friends: undefined;
  Notification: undefined;
  More: undefined;
  blogCenterScreen: undefined;
  UserMenu: undefined;
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
          } else if (route.name === "University") {
            return (
              <GraduationCap
                color={focused ? "#2656FF" : "#B8B8B8"}
                size={24}
              />
            );
          } else if (route.name === "Friends") {
            return <Users color={focused ? "#2656FF" : "#B8B8B8"} size={24} />;
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
        name="University"
        component={MyUniversity}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Friends"
        component={Friends}
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
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "#F2F2F2" },
          headerShadowVisible: false,
          headerLeft: () => <HeaderLeft showTitle={false} headerTitle="Menu" />,
          headerRight: () => <HeaderRight />,
          headerTitle: "",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;