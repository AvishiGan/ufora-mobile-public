import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { TopBar } from "../../components";
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
  "../../../assets/images/profile/myProfile/common/profile-picture.png";

const MyMentorshipScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBar titleBarName="Mentorship" />
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
              source={require("../../../assets/images/profile/myProfile/common/pic3.png")}
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

      <View style={styles.cardContainer}>
        <View style={styles.innerCardContainer}>
          <View style={styles.row}>
            {/* Image */}
            <Image
              style={styles.image}
              source={require("../../../assets/images/profile/myProfile/common/pic4.png")}
            />

            <View>
              {/* Name, Icons*/}
              <View style={styles.row}>
                <NameSemiboldNormal>Hanifa Kuzaka</NameSemiboldNormal>
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

      <View style={styles.cardContainer}>
        <View style={styles.innerCardContainer}>
          <View style={styles.row}>
            {/* Image */}
            <Image
              style={styles.image}
              source={require("../../../assets/images/profile/myProfile/common/pic5.png")}
            />

            <View>
              {/* Name, Icons*/}
              <View style={styles.row}>
                <NameSemiboldNormal>Kaithlyn Grero</NameSemiboldNormal>
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
          profilePic: require("../../../assets/images/profile/myProfile/common/profile-picture.png"),
          profileName: "Ravien Harith",
        }}
      />
      <UserProfileNameUniMutualCard
        data={{
          profilePic: require("../../../assets/images/profile/myProfile/common/pic2.jpg"),
          profileName: "Sheila Perera",
        }}
      />
      <UserProfileNameUniMutualCard
        data={{
          profilePic: require("../../../assets/images/profile/myProfile/common/pic3.png"),
          profileName: "Kaveen Heshaka",
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
        height :40,
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
       paddingVertical :10,
       marginVertical :4,
       backgroundColor :"white",
       borderRadius: 10
   },
   innerCardContainer:{
       flexDirection :"row",
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
