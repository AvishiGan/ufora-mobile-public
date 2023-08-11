import React, { FunctionComponent } from 'react'
import { TouchableOpacity, View} from 'react-native'
import FriendRequests from '../../components/friends/FriendRequests'
import { ScrollView } from 'react-native-gesture-handler';
import { ChevronLeft } from 'lucide-react-native';
import PageTitleSemibold from '../../constants/fonts/PageTitleSemibold';
import { Search } from 'lucide-react-native';
import { MessagesSquare } from 'lucide-react-native';
import MyFriends from '../../components/friends/MyFriends';

import { RootStackParamList } from "../../navigation/navigator/WelcomeNavigator";
import { StackScreenProps } from "@react-navigation/stack";
type Props = StackScreenProps<RootStackParamList, "MyFriends">;

const imageLink: string =
  "../../../assets/images/myProfile/common/profile-picture.png";

const MyFriendsScreen:FunctionComponent = () => {
  return (
    <ScrollView>
        {/* top part */}
        <View style={{flexDirection: "row", alignItems: "center", marginTop: 50, gap: 150}}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <TouchableOpacity>
                  <ChevronLeft color={"black"}/>
                </TouchableOpacity>
                <PageTitleSemibold>My Friends</PageTitleSemibold>
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
        <View style={{marginTop: 60}}>
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
        <MyFriends
            data={{
            profilePic: require(imageLink),
            profileName: "Pasan Phelps",
            mutualFriends: "140",
            university: "Undergrad at University of Colombo"
            }}
        />
    </View>
    </ScrollView>
    
  )
}

export default MyFriendsScreen