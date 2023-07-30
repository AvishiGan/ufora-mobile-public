import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../../../navigation/navigator/TabNavigator";
import { RootStackParamList } from "../../navigation/navigator/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

import Header from "./Header_section";
import Story_section from "./Story_section";
import Post_section from "./Post_section";
import Search_and_Profile_section from "./Search_and_Profile_section";
import Chart_section from "./Chart_section";

// type script navigation protection
export type FeedScreeenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Home">,
  NativeStackNavigationProp<RootStackParamList>
>;

const FeedScreen = () => {
  const navigation = useNavigation<FeedScreeenNavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 mx-4 ">
      {/* SECTION : header */}
      <Header />

      <ScrollView>
        {/* SECTION : search and profile */}
        <Search_and_Profile_section />

        {/* SECTION : chart  */}
        <Chart_section />

        {/* SECTION : stories */}
        <Story_section />

        {/* SECTION : post */}
        <Post_section />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FeedScreen;
