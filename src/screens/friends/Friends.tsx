import React, { FunctionComponent, useState } from 'react'
import { View, Text } from 'react-native'
import { CardHeadingBold, NameSmallSemibold, PageTitleSemibold } from '../../constants'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { ChevronLeft } from 'lucide-react-native'
import { Search } from 'lucide-react-native'
import { MessagesSquare } from 'lucide-react-native'
import PeopleYpuMayKnow from '../../components/friends/PeopleYouMayKnow'
import MyFriends from '../../components/friends/MyFriends'
import FriendRequests from '../../components/friends/FriendRequests'

import { RootStackParamList } from "../../navigation/navigator/WelcomeNavigator";
import { StackScreenProps } from "@react-navigation/stack";
type Props = StackScreenProps<RootStackParamList, "Friends">;

const imageLink: string =
  "../../../assets/images/myProfile/common/profile-picture.png";

const authorData = {
    profilePicture: require(imageLink),
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
    <ScrollView>
        {/* top part */}
        <View style={{flexDirection: "row", alignItems: "center", marginTop: 50, gap: 180}}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <TouchableOpacity>
                  <ChevronLeft color={"black"}/>
                </TouchableOpacity>
                <PageTitleSemibold>Friends</PageTitleSemibold>
            </View>
            <View style={{flexDirection: "row", alignItems: "center", gap: 18}}>
            <TouchableOpacity>
             <Search color={"black"} size={24}/>
            </TouchableOpacity> 
            <TouchableOpacity>
             <MessagesSquare color={"black"} size={24}/>
            </TouchableOpacity>
                
            </View> 
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
                      profilePic: require(imageLink),
                      profileName: "Pasan Phelps",
                      mutualFriends: "140",
                      university: "Undergrad at University of Colombo",
                      days: "5"

                    }}
                  />
                  <FriendRequests
                    data={{
                      profilePic: require(imageLink),
                      profileName: "Pasan Phelps",
                      mutualFriends: "140",
                      university: "Undergrad at University of Colombo",
                      days: "6"
                    }}
                  />
                  <FriendRequests
                    data={{
                      profilePic: require(imageLink),
                      profileName: "Pasan Phelps",
                      mutualFriends: "140",
                      university: "Undergrad at University of Colombo",
                      days: "6"
                    }}
                  />
                  <FriendRequests
                    data={{
                      profilePic: require(imageLink),
                      profileName: "Pasan Phelps",
                      mutualFriends: "140",
                      university: "Undergrad at University of Colombo",
                      days: "6"
                    }}
                  />
                  <FriendRequests
                    data={{
                      profilePic: require(imageLink),
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
                      profilePic: require(imageLink),
                      profileName: "Pasan Phelps",
                      mutualFriends: "140",
                      university: "Undergrad at University of Colombo",
                      days: "2",
                    }}
                  />
                  <FriendRequests
                    data={{
                      profilePic: require(imageLink),
                      profileName: "Pasan Phelps",
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
                <PeopleYpuMayKnow data = {authorData} />
                <PeopleYpuMayKnow data = {authorData} />
            </ScrollView>
        </View>

        {/*My friends */}
        <View >
          <View style={{flexDirection: "row", gap: 210, alignItems: "center", justifyContent: "center", marginTop: 20}}>
            <CardHeadingBold>My Friends</CardHeadingBold>
            <TouchableOpacity onPress={() => navigation.navigate("MyFriends")}>
                <NameSmallSemibold fontColor='#2656FF'>View all</NameSmallSemibold>
            </TouchableOpacity>
          </View>
            
          <View style={{marginTop: 10}}>
            <MyFriends
              data={{
                profilePic: require(imageLink),
                profileName: "Pasan Phelps",
                mutualFriends: "140",
                university: "Undergrad at University of Colombo"
              }}
            />
            <MyFriends
              data={{
                profilePic: require(imageLink),
                profileName: "Pasan Phelps",
                mutualFriends: "140",
                university: "Undergrad at University of Colombo"
              }}
            />
          </View>  
        </View>
    </ScrollView>
  )
}

export default Friends