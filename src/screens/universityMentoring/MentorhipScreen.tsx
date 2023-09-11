import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TopBar } from "../../components";
import { ButtonMedium, CardHeadingBold } from "../../constants";
import UserProfileNameTagsCard from "../../components/universityMentoring/UserProfileNameTagsCard";
import UserSuggessionCard from "../../components/universityMentoring/UserSuggessionCard";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/navigator/RootNavigator";
import { useNavigation } from "@react-navigation/native";

//  COMPONENT DETAILS
const imageLink: string =
  "../../../assets/images/profile/myProfile/common/profile-picture.png";

export type UniversityScreenProps =
  NativeStackNavigationProp<RootStackParamList>;

// Example data for the author bio
const authorData2 = {
  profilePic: require("../../../assets/images/profile/myProfile/common/profile-picture.png"),
  profileName: "Hasith Perera",
  tag1: "DSA",
  tag2: "TechSupport",
  shouldSendRequest: false,
};

const authorData3 = {
  profilePic: require("../../../assets/images/profile/myProfile/common/pic2.jpg"),
  profileName: "Ravishi Silva",
  tag1: "HCI",
  tag2: "Machine Learning",
  shouldSendRequest: false,
};

const authorData4 = {
  profilePic: require("../../../assets/images/profile/myProfile/common/pic3.png"),
  profileName: "Sandul Gimhana",
  tag1: "Management",
  tag2: "MERN Stack",
  shouldSendRequest: false,
};

const authorData6 = {
  profilePicture: require("../../../assets/images/profile/myProfile/common/pic4.png"),
  userName: "Shanaka Fernando",
  universityName: "",
  mutualFriends: "",
  tag1: "DSA",
  tag2: "Tech Support",
};

const authorData7 = {
  profilePicture: require("../../../assets/images/profile/myProfile/common/pic5.png"),
  userName: "Shanaka Fernando",
  universityName: "",
  mutualFriends: "",
  tag1: "DSA",
  tag2: "Tech Support",
};

const authorData8 = {
  profilePicture: require("../../../assets/images/profile/myProfile/common/pic3.png"),
  userName: "Shanaka Fernando",
  universityName: "",
  mutualFriends: "",
  tag1: "DSA",
  tag2: "Tech Support",
};

const MentorhipScreen = () => {
  const navigation = useNavigation<UniversityScreenProps>();

  return (
    <SafeAreaView style={styles.container}>
      <TopBar titleBarName="Mentorship" />
      <View style={styles.slider}>
        <TouchableOpacity onPress={() => navigation.navigate("MentorsScreen")}>
          <ButtonMedium>Mentoring me</ButtonMedium>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("MyMentorshipScreen")}>
          <ButtonMedium>My Mentoring</ButtonMedium>
        </TouchableOpacity>
      </View>

      {/* Sub Heading */}
      <View style={styles.subHeading}>
        <CardHeadingBold>My Mentors</CardHeadingBold>
      </View>

      <UserProfileNameTagsCard data={authorData2} />
      <UserProfileNameTagsCard data={authorData3} />
      <UserProfileNameTagsCard data={authorData4} />


      <TouchableOpacity
        onPress={() => navigation.navigate("MentorsScreen")}
        style={styles.findMentors}
      >
        <Text>Find Mentors</Text>
      </TouchableOpacity>

      <View style={styles.subHeading}>
        <CardHeadingBold>Mentor Suggestions</CardHeadingBold>
      </View>

      <ScrollView style={styles.scrollView} horizontal>
        <UserSuggessionCard data={authorData6} />
        <UserSuggessionCard data={authorData7} />
        <UserSuggessionCard data={authorData8} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  slider: {
    flexDirection: "row",
    height: 40,
    gap: 120,
    marginTop: 20,
    marginLeft: 10
  },
  subHeading: {
    marginVertical: 8,
  },
  findMentors: {
    height: 40,
    marginTop: 20,
    marginLeft: 10
  },
  scrollView: {
    flexDirection: "row",
    paddingVertical: 8,
    height: 50
  },
});

export default MentorhipScreen;
