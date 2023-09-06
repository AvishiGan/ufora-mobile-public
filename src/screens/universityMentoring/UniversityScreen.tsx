import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { TopBar } from "../../components/";

import {
  CardHeadingBold,
  SemiboldBig,
  SubHeadingSemibold,
} from "../../constants";
import { VerifiedIcon } from "../../../assets/svg";
import NameSmallSemibold from "../../constants/fonts/NameSemiboldNormal";
import { PersonStanding } from "lucide-react-native";
import { Sprout } from "lucide-react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/navigator/RootNavigator";
import UniAnnouncementCard from "../../components/universityMentoring/UniAnnouncementCard";

const imageLink: string =
  "../../../assets/images/profile/myProfile/common/profile-picture.png";

// University screen navitagation prop
export type UniversityScreenProps =
  NativeStackNavigationProp<RootStackParamList>;

// Example data for the author bio
const authorData = {
  profilePic: require(imageLink),
  profileName: "John Doe",
  tag1: "Student Representative",
  tag2: "UOC Science Faculty",
  date: "2023/10/23",
  description:
    "There won't be lectures this Thursday as there is an exihibition at the university of colombo.",
};

const UniversityScreen = () => {
  const navigation = useNavigation<UniversityScreenProps>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <TopBar titleBarName="My University" />

        {/* University Logo, Name, People, Blogs, Projects */}
        <View style={styles.universityContainer}>
          <View style={styles.universityDetails}>
            {/* image */}
            <View style={styles.imageContainer}>
              <Image
                source={require(imageLink)}
                style={styles.image}
              />
            </View>
            <View style={styles.row}>
              <SubHeadingSemibold>University of Colombo</SubHeadingSemibold>
              <VerifiedIcon size={20} fillColor="#2656FF" strokeColor="#fff" />
            </View>
          </View>
          {/* data */}
          <View style={styles.dataContainer}>
            <Text>
              <SemiboldBig>2500</SemiboldBig> People
            </Text>
            <Text>
              <SemiboldBig>200</SemiboldBig> Blogs
            </Text>
            <Text>
              <SemiboldBig>10</SemiboldBig> Projects
            </Text>
          </View>
        </View>

        {/* Sub Heading */}
        <View style={styles.subHeading}>
          <CardHeadingBold>Announcement</CardHeadingBold>
          <NameSmallSemibold>view all</NameSmallSemibold>
        </View>

        {/* Announcement details ********LOOP HERE */}
        <UniAnnouncementCard data={authorData} />
        <UniAnnouncementCard data={authorData} />
        <UniAnnouncementCard data={authorData} />
        <UniAnnouncementCard data={authorData} />
        <UniAnnouncementCard data={authorData} />
        <UniAnnouncementCard data={authorData} />



      </ScrollView>

      {/* All Groups and Mentorship Buttons */}
      <View style={styles.buttonRow}>
        {/* All groups */}
        <TouchableOpacity
          onPress={() => navigation.navigate("UniversityGroupsScreen")}
          style={styles.allGroupsButton}
        >
          {/* left button */}
          <View style={styles.row}>
            <PersonStanding color="#4F4E4E" size={24} />
            <SemiboldBig>All Groups</SemiboldBig>
          </View>
        </TouchableOpacity>
        {/* right button */}
        <TouchableOpacity
          onPress={() => navigation.navigate("MentorshipScreen")}
          style={styles.mentorshipButton}
        >
          <View style={styles.row}>
            <Sprout color="#4F4E4E" size={24} />
            <SemiboldBig>Mentorship</SemiboldBig>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container:{
       marginHorizontal :16,
      //  backgroundColor :"#fed7d7",
       flex :1
   },
   scrollView:{
       flex :1
   },
   universityContainer:{
      //  backgroundColor :"#b3f0ff",
       height :172,
       justifyContent :"center"
   },
   universityDetails:{
      //  backgroundColor :"#b3f0ff",
       height :96,
       alignItems :"center"
   },
   imageContainer:{
       width :60,
       height :60,
       justifyContent :"center",
       alignItems :"center"
   },
   image:{
       height :"100%",
       width :"100%",
       borderRadius :30
   },
   row:{
       flexDirection :"row",
       alignItems :"center"
   },
   dataContainer:{
      //  backgroundColor :"#b3f0ff",
       height :21,
       flexDirection :"row",
       justifyContent :"space-between",
       alignItems :"center"
   },
   subHeading:{
       flexDirection :"row",
       justifyContent :"space-between",
       alignItems :"center",
       marginVertical :8
   },
   buttonRow:{
      //  backgroundColor :"#63b3ed",
       height :70,
       flexDirection :"row"
   },
   allGroupsButton:{
      //  backgroundColor :"#9ae6b4",
       height :70,
       flex :1,
       justifyContent :"center",
       alignItems :"center"
   },
   mentorshipButton:{
      //  backgroundColor :"#90cdf4",
       height :70,
       flex :1,
       justifyContent :"center",
       alignItems :"center"
   }
});

export default UniversityScreen;
