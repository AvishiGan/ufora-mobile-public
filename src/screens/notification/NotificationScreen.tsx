import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopBar from '../../components/profile/TopBar'
import SemiboldBig  from '.././../constants/fonts/SemiboldBig'
import FriendRequests from '../../components/friends/FriendRequests'
import UniAnnouncementCard from '../../components/universityMentoring/UniAnnouncementCard'
import OlderNotification from '../../components/notification/OlderNotification'

const authordata1 = {
  profilePic: require("../../../assets/images/profile/myProfile/common/profile-picture.png"),
  profileName: "Herath Perera",
  tag1: "Student Representative",
  tag2: "UCSC 18",
  date: "4 minutes ago",
  description:
    "There won't be lectures this Thursday as there is an exihibition at the university of colombo.",
};

const authordata2 = {
  profilePic: require("../../../assets/images/profile/myProfile/common/profile-picture.png"),
  profileName: "Helika Amasha",
  tag1: "Secretory",
  tag2: "IEEE Student Branch of UCSC",
  date: "5 minutes ago",
  description:
    "Remember you guys have a task to submit the PR posters tonight",
};

const authordata3 = {
  profilePic: require("../../../assets/images/profile/myProfile/common/profile-picture.png"),
  profileName: "Helika Amasha",
  date: "Today",
  description:
    "and 100 others liked your post",
};

const NotificationScreen = () => {
  return (
    <SafeAreaView>
      <TopBar titleBarName="Notifications" />
      <View style={{marginTop: 20, marginLeft: 15}}>
        <SemiboldBig>New</SemiboldBig>
      </View>
      <View>
      <FriendRequests
        data={{
          profilePic: require("../../../assets/images/profile/myProfile/common/profile-picture.png"),
          profileName: "Hasith Perera",
          mutualFriends: "140",
          university: "Undergrad at University of Colombo",
          days: "5"

        }}
      />
      <FriendRequests
        data={{
          profilePic: require("../../../assets/images/profile/myProfile/common/profile-picture.png"),
          profileName: "Sanduni Kiren",
          mutualFriends: "110",
          university: "Undergrad at University of Colombo",
          days: "3"

        }}
      />
      <UniAnnouncementCard data={authordata1} />
      <UniAnnouncementCard data={authordata2} />
      </View>
      <View style={{marginTop: 10, marginLeft: 15}}>
        <SemiboldBig>Older</SemiboldBig>
      </View>
      <View>
        <OlderNotification data={authordata3}></OlderNotification>
        <OlderNotification data={authordata3}></OlderNotification>

      </View>
    </SafeAreaView>
  )
}

export default NotificationScreen