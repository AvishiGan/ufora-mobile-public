import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { UserProfileTopBar } from "../../components";
import { Search } from "lucide-react-native";
import UserProfileNameUniMutualCard from "../../components/universityMentoring/UserProfileNameUniMutualCard";

//  COMPONENT DETAILS
const imageLink: string =
  "../../../assets/images/myProfile/common/profile-picture.png";

const UniversityPeopleScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <UserProfileTopBar titleBarName="University of Colombo" />

      {/* input text */}
      <TouchableOpacity style={styles.inputContainer}>
        <View style={styles.row}>
          <Search color="#4F4E4E" size={24} />
          <TextInput
            editable={false}
            placeholder="Find Mentors"
            keyboardType="default"
          />
        </View>
      </TouchableOpacity>

        {/* Loop Here */}
      <UserProfileNameUniMutualCard
        data={{
          profilePic: require(imageLink),
          profileName: "Pasan Phelps",
          mutualFriends: "140",
          university: "Undergrad at University of Colombo"
        }}
      />
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
        flexDirection :"column",
        paddingVertical :12,
        borderRadius :16,
        borderWidth :StyleSheet.hairlineWidth
    },
    row:{
        flexDirection :"row",
        marginHorizontal :8
    }
});

export default UniversityPeopleScreen;
