import React, { FunctionComponent, useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView} from 'react-native'
import { CardHeadingBold, NameSmallSemibold, PageTitleSemibold } from '../../constants'
// import { ScrollView} from 'react-native-gesture-handler'
import PeopleYpuMayKnow from '../../components/friends/PeopleYouMayKnow'
import MyFriends from '../../components/friends/MyFriends'
import MyFriendsScreen from '../../screens/friends/MyFriendsScreen'
import FriendRequests from '../../components/friends/FriendRequests'
import { SafeAreaView } from "react-native-safe-area-context";

import { RootStackParamList } from "../../navigation/navigator/WelcomeNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import TopBar from '../../components/profile/TopBar'
type Props = StackScreenProps<RootStackParamList, "Friends">;

const imageLink: string =
  "../../../assets/images/myProfile/common/profile-picture.png";

const authorData = {
    profilePicture: require("../../../assets/images/myProfile/common/pic2.jpg"),
    userName: "Kulith Perera",
    universityName: "University of Colombo",
    mutualFriends: "104 Mutual Friends",
    tag1: "",
    tag2: "",
  };

  const authorData1 = {
    profilePicture: require("../../../assets/images/myProfile/common/pic3.png"),
    userName: "Pasani Phelps",
    universityName: "University of Colombo",
    mutualFriends: "104 Mutual Friends",
    tag1: "",
    tag2: "",
  };

  const authorData2 = {
    profilePicture: require("../../../assets/images/myProfile/common/profile-picture.png"),
    userName: "Shanaka Fernando",
    universityName: "University of Colombo",
    mutualFriends: "104 Mutual Friends",
    tag1: "",
    tag2: "",
  };

const Friends:FunctionComponent<Props> = ({navigation}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {/* top part */}
        <View style={{flexDirection: "row", alignItems: "center", gap: 180}}>
          
            <TopBar titleBarName="Friends" />
        </View>
        {/*friend requests */}
        <View>
          <View style={{flexDirection: "row", gap: 170, alignItems: "center", justifyContent: "center", marginTop: 12}}>
            <CardHeadingBold>Friend Requests</CardHeadingBold>
            <TouchableOpacity onPress={toggleExpand}>
                <NameSmallSemibold fontColor='#2656FF'>{expanded ? "Collapse" : "View All"}</NameSmallSemibold>
            </TouchableOpacity>  
          </View>
            <View style={{marginTop: 10}}>
              {expanded ? (
                <>
                  <FriendRequests
                    data={{
                      profilePic: require("../../../assets/images/myProfile/common/profile-picture.png"),
                      profileName: "Hasith Perera",
                      mutualFriends: "140",
                      university: "Undergrad at University of Colombo",
                      days: "5"

                    }}
                  />
                  <FriendRequests
                    data={{
                      profilePic: require("../../../assets/images/myProfile/common/pic3.png"),
                      profileName: "Sanduni Kiren",
                      mutualFriends: "140",
                      university: "Undergrad at University of Colombo",
                      days: "6"
                    }}
                  />
                  <FriendRequests
                    data={{
                      profilePic: require("../../../assets/images/myProfile/common/pic4.png"),
                      profileName: "Pasan Phelps",
                      mutualFriends: "140",
                      university: "Undergrad at University of Colombo",
                      days: "6"
                    }}
                  />
                  <FriendRequests
                    data={{
                      profilePic: require("../../../assets/images/myProfile/common/pic5.png"),
                      profileName: "Pasan Phelps",
                      mutualFriends: "140",
                      university: "Undergrad at University of Colombo",
                      days: "6"
                    }}
                  />
                  <FriendRequests
                    data={{
                      profilePic: require("../../../assets/images/myProfile/common/pic2.jpg"),
                      profileName: "Pasan Phelps",
                      mutualFriends: "140",
                      university: "Undergrad at University of Colombo",
                      days: "6"
                    }}
                  />
                </>
              ) : (
                <>
                  <FriendRequests
                    data={{
                      profilePic: require("../../../assets/images/myProfile/common/profile-picture.png"),
                      profileName: "Sanduni Kiren",
                      mutualFriends: "140",
                      university: "Undergrad at University of Colombo",
                      days: "2",
                    }}
                  />
                  <FriendRequests
                    data={{
                      profilePic: require("../../../assets/images/myProfile/common/pic3.png"),
                      profileName: "Hasith Perera",
                      mutualFriends: "140",
                      university: "Undergrad at University of Colombo",
                      days: "5",
                    }}
                  />
                  
                </>
              )}
          </View>      
        </View>

        {/*People you may know */}
        <View style={{marginTop: 15, marginLeft: 17}}>
            <CardHeadingBold>People You May Know</CardHeadingBold>
            <ScrollView style={{marginTop: 12,  marginLeft: -6}} horizontal>
                <PeopleYpuMayKnow data = {authorData} />
                <PeopleYpuMayKnow data = {authorData1} />
                <PeopleYpuMayKnow data = {authorData2} />
            </ScrollView>
        </View>

        {/*My friends */}
        <View >
          <View style={{flexDirection: "row", gap: 210, alignItems: "center", justifyContent: "center", marginTop: 20}}>
            <CardHeadingBold>My Friends</CardHeadingBold>
            <TouchableOpacity onPress={() => navigation.navigate("MyFriendsScreen")}>
                <NameSmallSemibold fontColor='#2656FF'>View all</NameSmallSemibold>
            </TouchableOpacity>
          </View>
            
          <View style={{marginTop: 10}}>
            <MyFriends
              data={{
                profilePic: require("../../../assets/images/myProfile/common/pic4.png"),
                profileName: "Hasith Perera",
                mutualFriends: "140",
                university: "Undergrad at University of Colombo"
              }}
            />
            <MyFriends
              data={{
                profilePic: require("../../../assets/images/myProfile/common/pic5.png"),
                profileName: "Sanduni Kiren",
                mutualFriends: "140",
                university: "Undergrad at University of Colombo"
              }}
            />
          </View>  
        </View>
    </ScrollView>
    </SafeAreaView>
    
  )
}

export default Friends