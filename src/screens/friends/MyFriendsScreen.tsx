import React, { FunctionComponent } from "react";
import { TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import FriendRequests from "../../components/friends/FriendRequests";
// import { ScrollView } from 'react-native-gesture-handler';
import { ChevronLeft } from "lucide-react-native";
import PageTitleSemibold from "../../constants/fonts/PageTitleSemibold";
import { Search } from "lucide-react-native";
import { MessagesSquare } from "lucide-react-native";
import MyFriends from "../../components/friends/MyFriends";

import { RootStackParamList } from "../../navigation/navigator/WelcomeNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import { SearchIcon } from "lucide-react-native";
import TopBar from "../../components/profile/TopBar";
type Props = StackScreenProps<RootStackParamList, "MyFriendsScreen">;

const imageLink: string =
  "../../../assets/images/profile/myProfile/common/profile-picture.png";

const MyFriendsScreen: FunctionComponent = () => {
  return (
    <ScrollView>
      {/* top part */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 25,
          gap: 150,
        }}
      >
        <TopBar titleBarName="My Friends" />
      </View>
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          borderRadius: 15,
          borderColor: "black",
          borderWidth: 0.5,
          width: 360,
          alignItems: "center",
          marginLeft: 15,
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <SearchIcon color={"black"} size={20}></SearchIcon>
        <TextInput
          editable={true}
          placeholder="  Find Friends.."
          keyboardType="default"
        />
      </View>
      <View style={{}}>
        <MyFriends
          data={{
            profilePic: require("../../../assets/images/profile/myProfile/common/profile-picture.png"),
            profileName: "Hasini Pereras",
            mutualFriends: "140",
            university: "Undergrad at University of Colombo",
          }}
        />
        <MyFriends
          data={{
            profilePic: require("../../../assets/images/profile/myProfile/common/pic2.jpg"),
            profileName: "Pasandi Withanage",
            mutualFriends: "140",
            university: "Undergrad at University of Colombo",
          }}
        />
        <MyFriends
          data={{
            profilePic: require("../../../assets/images/profile/myProfile/common/pic3.png"),
            profileName: "Dinethi Gopal",
            mutualFriends: "140",
            university: "Undergrad at University of Colombo",
          }}
        />
        <MyFriends
          data={{
            profilePic: require("../../../assets/images/profile/myProfile/common/pic4.png"),
            profileName: "Pasan Phelps",
            mutualFriends: "140",
            university: "Undergrad at University of Colombo",
          }}
        />
        <MyFriends
          data={{
            profilePic: require("../../../assets/images/profile/myProfile/common/pic5.png"),
            profileName: "Chathuni Gimhana",
            mutualFriends: "140",
            university: "Undergrad at University of Colombo",
          }}
        />
        <MyFriends
          data={{
            profilePic: require("../../../assets/images/profile/myProfile/common/profile-picture.png"),
            profileName: "Sasitha Gunapala",
            mutualFriends: "140",
            university: "Undergrad at University of Colombo",
          }}
        />
        <MyFriends
          data={{
            profilePic: require("../../../assets/images/profile/myProfile/common/pic3.png"),
            profileName: "Himara Gayashan",
            mutualFriends: "140",
            university: "Undergrad at University of Colombo",
          }}
        />
        <MyFriends
          data={{
            profilePic: require("../../../assets/images/profile/myProfile/common/pic4.png"),
            profileName: "Hathim Abbas",
            mutualFriends: "140",
            university: "Undergrad at University of Colombo",
          }}
        />
        <MyFriends
          data={{
            profilePic: require("../../../assets/images/profile/myProfile/common/pic2.jpg"),
            profileName: "Johnathon Perera",
            mutualFriends: "140",
            university: "Undergrad at University of Colombo",
          }}
        />
        <MyFriends
          data={{
            profilePic: require("../../../assets/images/profile/myProfile/common/pic3.png"),
            profileName: "Isuru Heshan",
            mutualFriends: "140",
            university: "Undergrad at University of Colombo",
          }}
        />
        <MyFriends
          data={{
            profilePic: require("../../../assets/images/profile/myProfile/common/pic4.png"),
            profileName: "Hemaka Gunawansha",
            mutualFriends: "140",
            university: "Undergrad at University of Colombo",
          }}
        />
      </View>
    </ScrollView>
  );
};

export default MyFriendsScreen;
