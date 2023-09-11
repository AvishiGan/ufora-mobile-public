import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopBar from '../../../components/profile/TopBar'
import SemiboldBig  from '../../../constants/fonts/SemiboldBig'
import OlderNotification from '../../../components/notification/OlderNotification'

const authordata1 = {
  profilePic: require("../../../../assets/images/profile/myProfile/common/profile-picture.png"),
  profileName: "Herath Perera",
  date: "Today",
  description:
  "and 100 others liked your post",
};

const authordata2 = {
  profilePic: require("../../../../assets/images/profile/myProfile/common/profile-picture.png"),
  profileName: "Helika Amasha",
  date: "Today",
  description:
  "and 100 others liked your post",
};

const authordata3 = {
  profilePic: require("../../../../assets/images/profile/myProfile/common/profile-picture.png"),
  profileName: "Helika Amasha",
  date: "Today",
  description:
    "and 100 others liked your post",
};

const Notifications = () => {
  return (
    <SafeAreaView>
      <TopBar titleBarName="Notifications" />
      <View style={{marginTop: 20, marginLeft: 15}}>
        <SemiboldBig>New</SemiboldBig>
      </View>
      <View>
        <OlderNotification data={authordata1}></OlderNotification>
        <OlderNotification data={authordata2}></OlderNotification>
      </View>
      
      <View style={{marginTop: 10, marginLeft: 15}}>
        <SemiboldBig>Older</SemiboldBig>
      </View>
      <View>
        <OlderNotification data={authordata3}></OlderNotification>
        <OlderNotification data={authordata1}></OlderNotification>

      </View>
    </SafeAreaView>
  )
}

export default Notifications