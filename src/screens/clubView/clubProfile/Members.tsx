import React from 'react'
import { View, Image, TextInput, ScrollView} from 'react-native'
import { TopBar } from '../../../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import FollowersCard from '../../../components/clubsView/clubProfile/Followers/FollowersCard';
import { SearchIcon } from 'lucide-react-native';

const authordata1 = {
    profilePic: require("../../../../assets/images/clubView/pic7.png"),
    profileName: "Herath Perera",
    university: "Undergraduate at University of Colombo",
    showMoreIcon: true
  };
  
  const authordata2 = {
    profilePic: require("../../../../assets/images/clubView/pic6.png"),
    profileName: "Helika Amasha",
    university: "Undergraduate at University of Colombo",
    showMoreIcon: true
  };

  const authordata3 = {
    profilePic: require("../../../../assets/images/myProfile/common/profile-picture.png"),
    profileName: "Helika Amasha",
    university: "Undergraduate at University of Colombo"
  };

  const authordata4 = {
    profilePic: require("../../../../assets/images/clubView/pic1.png"),
    profileName: "Helika Amasha",
    university: "Undergraduate at University of Colombo"
  };

  const authordata5 = {
    profilePic: require("../../../../assets/images/clubView/pic2.png"),
    profileName: "Helika Amasha",
    university: "Undergraduate at University of Colombo"
  };

  const authordata6 = {
    profilePic: require("../../../../assets/images/clubView/pic3.png"),
    profileName: "Helika Amasha",
    university: "Undergraduate at University of Colombo"
  };

  const authordata7 = {
    profilePic: require("../../../../assets/images/clubView/pic4.png"),
    profileName: "Helika Amasha",
    university: "Undergraduate at University of Colombo"
  };

  const authordata8 = {
    profilePic: require("../../../../assets/images/clubView/pic5.png"),
    profileName: "Helika Amasha",
    university: "Undergraduate at University of Colombo"
  };
const Followers = () => {
  return (
    <View style={{ flex: 1 }}>
    <SafeAreaView style={{ position: 'absolute', top: 0, width: '100%' }}>
      <TopBar titleBarName="Members"/>

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
          placeholder="  Find Chats.."
          keyboardType="default"
        />
      </View>
    </SafeAreaView>

    <ScrollView style={{ marginTop: 150 }}> 
      <FollowersCard data={authordata1}></FollowersCard>
      <FollowersCard data={authordata1}></FollowersCard>
      <FollowersCard data={authordata2}></FollowersCard>
      <FollowersCard data={authordata3}></FollowersCard>
      <FollowersCard data={authordata4}></FollowersCard>
      <FollowersCard data={authordata5}></FollowersCard>
      <FollowersCard data={authordata6}></FollowersCard>
      <FollowersCard data={authordata7}></FollowersCard>
      <FollowersCard data={authordata8}></FollowersCard>
      <FollowersCard data={authordata1}></FollowersCard>
      <FollowersCard data={authordata2}></FollowersCard>
    </ScrollView>
  </View>
  )
}

export default Followers