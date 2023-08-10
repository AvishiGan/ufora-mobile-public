import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserProfileTopBar } from "../../components";
import {
  CardHeadingBold,
} from "../../constants";
import UserProfileNameTagsCard from "../../components/universityMentoring/UserProfileNameTagsCard";
import UserSuggessionCard from "../../components/universityMentoring/UserSuggessionCard";

//  COMPONENT DETAILS
const imageLink: string =
  "../../../assets/images/myProfile/common/profile-picture.png";

// Example data for the author bio
const authorData2 = {
  profilePic: require(imageLink),
  profileName: "Shanaka Fernando",
  tag1: "DSA",
  tag2: "TechSupport",
  shouldSendRequest: false,
};

const authorData6 = {
  profilePicture: require(imageLink),
  userName: "Shanaka Fernando",
  universityName: "",
  mutualFriends: "",
  tag1: "DSA",
  tag2: "Tech Support",
};

const MentorhipScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <UserProfileTopBar titleBarName="Mentorship" />
      <View style={styles.slider}>
        <Text>slider</Text>
      </View>

      {/* Sub Heading */}
      <View style={styles.subHeading}>
        <CardHeadingBold>My Mentors</CardHeadingBold>
      </View>

      <UserProfileNameTagsCard data={authorData2} />
      <UserProfileNameTagsCard data={authorData2} />

      <View style={styles.findMentors}>
        <Text>Find Mentors</Text>
      </View>

      <View style={styles.subHeading}>
        <CardHeadingBold>Mentor Suggestions</CardHeadingBold>
      </View>

      <ScrollView style={styles.scrollView} horizontal>
        <UserSuggessionCard data={authorData6} />
        <UserSuggessionCard data={authorData6} />
        <UserSuggessionCard data={authorData6} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor :"#fed7d7",
        flex :1,
        marginHorizontal :16
    },
    slider:{
        backgroundColor :"#b3f0ff",
        height :40
    },
    subHeading:{
        marginVertical :8
    },
    findMentors:{
        backgroundColor :"#b3f0ff",
        height :40
    },
    scrollView:{
        flexDirection :"row",
        paddingVertical :8,
        backgroundColor :"#9ae6b4"
    }
});

export default MentorhipScreen;
