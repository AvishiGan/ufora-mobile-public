import React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import SemiBoldBig from '../../../../constants/fonts/SemiboldBig'
import { Sprout } from 'lucide-react-native'
import { PersonStanding } from 'lucide-react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/navigator/RootNavigator";
import { SafeAreaView } from 'react-native-safe-area-context'
import TopBar from '../../../../components/profile/TopBar'
import { CardHeadingBold, NameSmallSemibold } from '../../../../constants'
import FriendRequests from '../../../../components/friends/FriendRequests'

// export type UniversityScreenProps =
//   NativeStackNavigationProp<RootStackParamList>;

const ManageMenu = () => {
     // const navigation = useNavigation<UniversityScreenProps>();  
    return (
   <SafeAreaView>
     <TopBar titleBarName="Manage Club" />
    <View style={{padding: 15}}>
    <View style={styles.buttonRow}>
        {/* All groups */}
        <TouchableOpacity
        //   onPress={() => navigation.navigate("UniversityGroupsScreen")}
          style={styles.allGroupsButton}
        >
          {/* left button */}
          <View style={styles.row}>
            <PersonStanding color="#4F4E4E" size={24} />
            <SemiBoldBig>Admin</SemiBoldBig>
          </View>
        </TouchableOpacity>
        {/* right button */}
        <TouchableOpacity
        //   onPress={() => navigation.navigate("MentorshipScreen")}
          style={styles.allGroupsButton}
        >
          <View style={styles.row}>
            <Sprout color="#4F4E4E" size={24} />
            <SemiBoldBig>Officials</SemiBoldBig>
          </View>
        </TouchableOpacity>
      </View>
      <View>
      <View style={{marginTop: 15}}>
        <TouchableOpacity
        //   onPress={() => navigation.navigate("MentorshipScreen")}
          style={styles.mentorshipButton}
        >
            <PersonStanding color="#4F4E4E" size={24} />
            <SemiBoldBig>Members</SemiBoldBig>
        </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: 10, flexDirection :"row", alignItems: "center",gap:120}}>
        <CardHeadingBold>Membership Requests</CardHeadingBold>
        <NameSmallSemibold>view all</NameSmallSemibold>
      </View>
      <View style={{marginTop: 20}}>
      <FriendRequests
        data={{
          profilePic: require("../../../../../assets/images/myProfile/common/profile-picture.png"),
          profileName: "Hasith Perera",
          mutualFriends: "140",
          university: "Undergrad at University of Colombo",
          days: "5"
        }}
      />
      <FriendRequests
        data={{
          profilePic: require("../../../../../assets/images/myProfile/common/profile-picture.png"),
          profileName: "Hasith Perera",
          mutualFriends: "140",
          university: "Undergrad at University of Colombo",
          days: "5"
        }}
      />
      </View>
      

    </View>
    
     
   </SafeAreaView>
    
  )
}
const styles = StyleSheet.create({
   
    row:{
        flexDirection :"row",
        alignItems :"center",
        gap:10
    },
    buttonRow:{
        // backgroundColor :"white",
        height :70,
        flexDirection :"row",
        gap:15
    },
    allGroupsButton:{
        backgroundColor :"white",
        height :70,
        flex :1,
        justifyContent :"center",
        alignItems :"center",
        borderRadius: 15
    },
    mentorshipButton:{
        backgroundColor :"white",
        height :70,
        justifyContent :"center",
        alignItems :"center",
        borderRadius: 15,
        flexDirection :"row",
    }
 });
export default ManageMenu