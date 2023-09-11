import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopBar from '../../../../components/profile/TopBar'
import { TextInput, View, Text, ScrollView } from 'react-native'
import { SearchIcon } from 'lucide-react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { RegularNormal } from '../../../../constants'
import { Settings } from 'lucide-react-native'
import FollowersCard from '../../../../components/clubsView/clubProfile/Followers/FollowersCard';
import {
  BoardofOfficials,
} from "../../../clubView/clubProfile/cards/AllCards";
import { styles } from "../../../profile/myProfile/about/cards/styles";

  const cardComponents = [
    BoardofOfficials,
  ];


const Officials = () => {
  return (
    <SafeAreaView>
        <TopBar titleBarName="Board of Officials" />
        <View style={{flexDirection: "row", alignItems: "center",}}>
            <View
                style={{
                flexDirection: "row",
                padding: 10,
                borderRadius: 15,
                borderColor: "black",
                borderWidth: 0.5,
                width: 250,
                alignItems: "center",
                marginLeft: 15,
                marginTop: 10,
                marginBottom: 10,
            }}
        >
                <SearchIcon color={"black"} size={20}></SearchIcon>
                <TextInput
                    editable={true}
                    placeholder="  Search Officials.."
                    keyboardType="default"
                />
            </View>
            <TouchableOpacity>
                <View style={{height: 48, borderRadius: 10, width: 98, alignItems:"center", justifyContent: "center", backgroundColor: "#4F4E4E", flexDirection: "row",marginLeft: 10, gap:5}}>
                    <Settings color={"white"} size={15}></Settings>
                    <RegularNormal fontColor='white'>Manage</RegularNormal>
                </View>
            </TouchableOpacity>
        </View>
        <ScrollView style={{ marginTop: 0 }}> 
            <View style={styles.allCardsContainer}>
          {cardComponents.map((CardComponent, index) => (
            <CardComponent showTitle={false} key={index} />
          ))}
        </View>
        </ScrollView>
        
    </SafeAreaView>
  )
}

export default Officials