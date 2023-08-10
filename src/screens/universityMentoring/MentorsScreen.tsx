import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserProfileTopBar } from "../../components";
import { TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { Search } from "lucide-react-native";
import UserProfileNameTagsCard from "../../components/universityMentoring/UserProfileNameTagsCard";

//  COMPONENT DETAILS
const imageLink: string =
  "../../../assets/images/myProfile/common/profile-picture.png";

const MentorsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <UserProfileTopBar titleBarName="Mentors" />
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

      {/* Mentors */}
      <UserProfileNameTagsCard
        data={{
          profilePic: require(imageLink),
          profileName: "Ravishi Silva",
          tag1: "DSA",
          tag2: "Tech Support",
          shouldSendRequest: false,
        }}
      />

      <UserProfileNameTagsCard
        data={{
          profilePic: require(imageLink),
          profileName: "Hasith Perera",
          tag1: "DSA",
          tag2: "Tech Support",
          shouldSendRequest: true,
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

export default MentorsScreen;
