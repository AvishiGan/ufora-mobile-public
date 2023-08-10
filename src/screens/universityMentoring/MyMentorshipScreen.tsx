import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { UserProfileTopBar } from "../../components";
import {
  CardHeadingBold,
  NameSemiboldNormal,
  NameSmallSemibold,
  RegularSmall,
  SmallerRegular,
} from "../../constants";
import { UforaIcon, VerifiedIcon } from "../../../assets/svg";
import { MoreHorizontal } from "lucide-react-native";
import UserProfileNameUniMutualCard from "../../components/universityMentoring/UserProfileNameUniMutualCard";

//  COMPONENT DETAILS
const imageLink: string =
  "../../../assets/images/myProfile/common/profile-picture.png";

const MyMentorshipScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <UserProfileTopBar titleBarName="Mentorship" />
      {/* input text */}
      <View style={styles.inputContainer}></View>

      {/* Sub Heading */}
      <View style={styles.subHeading}>
        <CardHeadingBold>My Mentoring</CardHeadingBold>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Button clicked")}
        >
          <Text>
            <RegularSmall>Add Mentoring topic</RegularSmall>
          </Text>
        </TouchableOpacity>
      </View>

      {/* Data Loop Here */}
      <View style={styles.data}>
        <Text>Cryptography</Text>
      </View>
      <View style={styles.data}>
        <Text>Tech Support</Text>
      </View>
      <View style={styles.data}>
        <Text>Assignment Help</Text>
      </View>

      <View style={styles.subHeading}>
        <CardHeadingBold>Mentor Requests</CardHeadingBold>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.innerCardContainer}>
          <View style={styles.row}>
            {/* Image */}
            <Image
              style={styles.image}
              source={require(imageLink)}
            />

            <View>
              {/* Name, Icons*/}
              <View style={styles.row}>
                <NameSemiboldNormal>Samadi Smith</NameSemiboldNormal>
                <VerifiedIcon
                  size={16}
                  fillColor="#2656FF"
                  strokeColor="#fff"
                />
                <UforaIcon size={16} fillColor="#111" strokeColor="#fff" />
              </View>
            </View>
          </View>

          {/*Accept and Deny Buttons */}
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.acceptButton}
              onPress={() => console.log("Button clicked")}
            >
              <Text>
                <RegularSmall>Accept</RegularSmall>
              </Text>
            </TouchableOpacity>
            {/*  */}
            <TouchableOpacity
              style={styles.denyButton}
              onPress={() => console.log("Button clicked")}
            >
              <Text>
                <RegularSmall>Deny</RegularSmall>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* MY MENTEES */}
      <View style={styles.subHeading}>
        <CardHeadingBold>My Mentees</CardHeadingBold>
      </View>

      {/* LOOP HERE */}
      <UserProfileNameUniMutualCard
        data={{
          profilePic: require(imageLink),
          profileName: "Pasan Phelps",
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
        height :40,
        backgroundColor :"#b3f0ff"
    },
    subHeading:{
        flexDirection :"row",
        justifyContent :"space-between",
        alignItems :"center",
        marginVertical :8
    },
    button:{
        borderWidth :StyleSheet.hairlineWidth,
        paddingVertical :8,
        paddingHorizontal :12,
        borderRadius :8,
        marginVertical :8
    },
    data:{
       marginVertical :4 
    },
    cardContainer:{
       paddingHorizontal :8,
       paddingVertical :16,
       marginVertical :4,
       backgroundColor :"#b3f0ff"
   },
   innerCardContainer:{
       flexDirection :"row",
       backgroundColor :"#b3f0ff",
       height :46,
       justifyContent :"space-between",
       alignItems :"center"
   },
   row:{
       flexDirection :"row",
       alignItems :"center",
       marginHorizontal :8
   },
   image:{
       width :40,
       height :40,
       borderRadius :20
   },
   buttonRow:{
       backgroundColor :"#ccffcc",
       flexDirection :"row",
       alignItems :"center",
       justifyContent :"space-between"
   },
   acceptButton:{
       borderWidth :StyleSheet.hairlineWidth,
       paddingVertical :8,
       paddingHorizontal :12,
       borderRadius :8,
       marginHorizontal :8
   },
   denyButton:{
       borderWidth :StyleSheet.hairlineWidth,
       paddingVertical :8,
       paddingHorizontal :12,
       borderRadius :8,
       marginHorizontal :8
   }
});

export default MyMentorshipScreen;
