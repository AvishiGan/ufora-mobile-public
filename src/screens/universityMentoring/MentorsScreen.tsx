import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TopBar } from "../../components";
import { TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { Search } from "lucide-react-native";
import UserProfileNameTagsCard from "../../components/universityMentoring/UserProfileNameTagsCard";

//  COMPONENT DETAILS
const imageLink: string =
  "../../../assets/images/profile/myProfile/common/profile-picture.png";

const MentorsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBar titleBarName="Mentors" />
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
          profilePic: require( "../../../assets/images/profile/myProfile/common/profile-picture.png"),
          profileName: "Hasith Perera",
          tag1: "DSA",
          tag2: "Tech Support",
          shouldSendRequest: false,
        }}
      />

      <UserProfileNameTagsCard
        data={{
          profilePic: require( "../../../assets/images/profile/myProfile/common/pic2.jpg"),
          profileName: "Ravishi Silva",
          tag1: "HCI",
          tag2: "Machin Learning",
          shouldSendRequest: false,
        }}
      />

      <UserProfileNameTagsCard
        data={{
          profilePic: require( "../../../assets/images/profile/myProfile/common/pic3.png"),
          profileName: "Sandul Gimhana",
          tag1: "Management",
          tag2: "MERN Stack",
          shouldSendRequest: false,
        }}
      />

      <UserProfileNameTagsCard
        data={{
          profilePic: require( "../../../assets/images/profile/myProfile/common/pic4.png"),
          profileName: "Harsha Bandu",
          tag1: "DSA",
          tag2: "Tech Support",
          shouldSendRequest: true,
        }}
      />

      <UserProfileNameTagsCard
        data={{
          profilePic: require( "../../../assets/images/profile/myProfile/common/pic5.png"),
          profileName: "Shashini Silva",
          tag1: "DSA",
          tag2: "Tech Support",
          shouldSendRequest: true,
        }}
      />

      <UserProfileNameTagsCard
        data={{
          profilePic: require( "../../../assets/images/profile/myProfile/common/pic5.png"),
          profileName: "Kithmi Silva",
          tag1: "DSA",
          tag2: "Tech Support",
          shouldSendRequest: true,
        }}
      />

      <UserProfileNameTagsCard
        data={{
          profilePic: require( "../../../assets/images/profile/myProfile/common/pic2.jpg"),
          profileName: "Pasani Gimhana",
          tag1: "DSA",
          tag2: "Tech Support",
          shouldSendRequest: true,
        }}
      />

      <UserProfileNameTagsCard
        data={{
          profilePic: require( "../../../assets/images/profile/myProfile/common/profile-picture.png"),
          profileName: "Sarah Kariyawasam",
          tag1: "DSA",
          tag2: "Tech Support",
          shouldSendRequest: true,
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
        flex :1,
        marginHorizontal :16
    },
    inputContainer:{
        flexDirection :"column",
        paddingVertical :12,
        borderRadius :16,
        borderWidth :StyleSheet.hairlineWidth,
        marginBottom: 15,
        marginTop: 20

    },
    row:{
        flexDirection :"row",
        marginHorizontal :8,

    }
});

export default MentorsScreen;
