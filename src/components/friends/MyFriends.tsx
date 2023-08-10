import { View, Image, TouchableOpacity, Text } from "react-native";
import React from "react";
import {
  NameSemiboldNormal,
  RegularSmall,
  SmallerRegular,
} from "../../constants";
import { UforaIcon, VerifiedIcon } from "../../../assets/svg";
import { MoreHorizontal } from "lucide-react-native";


interface UserProfileNameUniMutualCard {
  profilePic?: any; // 'profilePic' prop is optional
  profileName: string;
  university?: string;
  mutualFriends?: string;
}

interface userProfileNameUniMutualProps {
  data: UserProfileNameUniMutualCard;
}

const MyFriends: React.FC<userProfileNameUniMutualProps> = ({
  data,
}) => {
  return (
    <View style={{alignItems: "center", paddingVertical: 3}}>
      <View style={{ alignItems: "center", flexDirection: "row", backgroundColor: "white", borderRadius: 15, paddingVertical: 2, width: 360,}}>
    {/* profile picture */}
    <View style={{padding: 8}}>
      <View style={{ width: 55, height: 55, borderRadius: 50, overflow: "hidden" }}>
        <Image source={data.profilePic} style={{ width: "100%", height: "100%" }} />
      </View>
    </View>

      {/* description */}
      <View style={{flex: 1, paddingHorizontal: 2}}>
        <View style={{flexDirection: "row",alignItems: "center",gap: 2,}}>
          <Text numberOfLines={1}>
            <NameSemiboldNormal>{data.profileName}</NameSemiboldNormal>
          </Text>
          <View style={{flexDirection: "row",alignItems: "center", gap: 1}}>
            <VerifiedIcon size={16} fillColor="#2656FF" strokeColor="#fff" />
            <UforaIcon size={16} fillColor="#111" strokeColor="#fff" />
          </View>
          
        </View>
        <View>
          {data.university && (
            <Text numberOfLines={1}>
              <SmallerRegular>{data.university}</SmallerRegular>
            </Text>
          )}
        </View>

        <View style={{marginTop: 6}}>
          {data.mutualFriends && (
            <Text numberOfLines={1}>
              <RegularSmall fontColor="#87929D">{data.mutualFriends} mutual friends</RegularSmall>
            </Text>
          )}
        </View>
      </View>

      {/* accept reject lastonline icon */}
      <View style={{justifyContent: "center", marginRight:10}}>
        <MoreHorizontal color="#4F4E4E" size={24} />
      </View>
    </View>
    </View>
    
  );
};

export default MyFriends;