import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../../navigation/navigator/TabNavigator";
import { RootStackParamList } from "../../navigation/navigator/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "./Header_section";
import Story_section from "./Story_section";
import Post_section from "./Post_section";
import Search_and_Profile_section from "./Search_and_Profile_section";
import Chart_section from "./Chart_section";
import { Rows } from "lucide-react-native";

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
    <SafeAreaView style={styles.container}>
      {/* SECTION : header */}
      <Header />

      <ScrollView>
        {/* SECTION : search and profile */}
        {/* <Search_and_Profile_section /> */}
        <View style={styles.profileAndSearch}>
          {/* profile picture */}
          <TouchableOpacity style={styles.profilePicture} onPress={() => navigation.navigate("UserProfileScreen")}>
            <Image
              source={require("../../../assets/images/myProfile/common/profile-picture.png")}
              style={styles.image}
            />
          </TouchableOpacity>
          {/* input text */}
          <TouchableOpacity style={styles.inputContainer} onPress={() => navigation.navigate("CreatePost")}>
            <TextInput
              editable={false}
              placeholder="Hey Isuru, What's special Today?"
              keyboardType="default"
            />
          </TouchableOpacity>
        </View>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  profileAndSearch: {
    flex: 1,
    flexDirection: "row",
    margin: 4
  }
  ,
  profilePicture: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 9999,
  },
  inputContainer: {
    padding: 12,
    borderRadius: 15,
    borderColor: "black",
    borderWidth: 0.5,
    width: 290,
    marginLeft: 5
  },
});

export default FeedScreen;
