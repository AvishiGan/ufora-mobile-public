import { View, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TopBar } from "../../components";
import UniversityGroupCard from "../../components/universityMentoring/UniversityGroupCard";

// const imageLink: string =
//   "../../../assets/images/myProfile/common/profile-picture.png";

const authorData = {
  profilePic: require("../../../assets/images/university/pic1.png"),
  universityName: "UCSC Official",
  isMember: true,
};

const authorData2 = {
  profilePic: require("../../../assets/images/university/pic1.png"),
  universityName: "UCSC 18",
  isMember: true,
};

const authorData3 = {
  profilePic: require("../../../assets/images/university/pic2.png"),
  universityName: "University of Colombo Official",
  isMember: true,
};

const authorData4 = {
  profilePic: require("../../../assets/images/university/pic3.png"),
  universityName: "UoC Badminton",
  isMember: true,
};

const authorData5 = {
  profilePic: require("../../../assets/images/university/pic4.png"),
  universityName: "UoC Table Tennis",
  isMember: false,
};

const authorData6 = {
  profilePic: require("../../../assets/images/university/pic5.png"),
  universityName: "FMF Official",
  isMember: false,
};
const authorData7 = {
  profilePic: require("../../../assets/images/university/pic5.png"),
  universityName: "FMF 40",
  isMember: false,
};

const authorData8 = {
  profilePic: require("../../../assets/images/university/pic6.png"),
  universityName: "FOA Official",
  isMember: false,
};

const authorData9 = {
  profilePic: require("../../../assets/images/university/pic6.png"),
  universityName: "FOA 30",
  isMember: false,
};

const authorData10 = {
  profilePic: require("../../../assets/images/university/pic7.png"),
  universityName: "FOL Official",
  isMember: false,
};

const authorData11 = {
  profilePic: require("../../../assets/images/university/pic2.png"),
  universityName: "UCSC Official",
  isMember: false,
};

const UniversityGroupsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar */}
      <TopBar titleBarName="University Groups" />

      <View style={styles.inputContainer}></View>

      <ScrollView>
        <UniversityGroupCard data={authorData} />
        <UniversityGroupCard data={authorData2} />
        <UniversityGroupCard data={authorData3} />
        <UniversityGroupCard data={authorData4} />
        <UniversityGroupCard data={authorData5} />
        <UniversityGroupCard data={authorData6} />
        <UniversityGroupCard data={authorData7} />
        <UniversityGroupCard data={authorData8} />
        <UniversityGroupCard data={authorData9} />
        <UniversityGroupCard data={authorData10} />
        <UniversityGroupCard data={authorData11} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container:{
        flex :1,
        marginHorizontal :16
    },
    inputContainer:{
        height :48,
    }
});

export default UniversityGroupsScreen;
