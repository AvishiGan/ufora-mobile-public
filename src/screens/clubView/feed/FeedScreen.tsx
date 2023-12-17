import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../../../navigation/navigator/TabNavigatorClub";
import { RootStackParamList } from "../../../navigation/navigator/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../../Feed/Header_section";
import Post_section from "../../Feed/Post_section";

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
              source={require("../../../../assets/images/profile/myProfile/common/profile-picture.png")}
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
