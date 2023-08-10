import { View, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TopBar } from "../../components";
import UniversityGroupCard from "../../components/universityMentoring/UniversityGroupCard";

const imageLink: string =
  "../../../assets/images/myProfile/common/profile-picture.png";

const authorData = {
  profilePic: require(imageLink),
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
        <UniversityGroupCard data={authorData} />
        <UniversityGroupCard data={authorData} />
        <UniversityGroupCard data={authorData} />
        <UniversityGroupCard data={authorData} />
        <UniversityGroupCard data={authorData} />
        <UniversityGroupCard data={authorData} />
        <UniversityGroupCard data={authorData} />
        <UniversityGroupCard data={authorData} />
        <UniversityGroupCard data={authorData} />
        <UniversityGroupCard data={authorData} />
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
    inputContainer:{
        height :48,
        backgroundColor :"#b3f0ff"
    }
});

export default UniversityGroupsScreen;
