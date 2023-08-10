import { View, Image, TouchableOpacity, Text } from "react-native";
import React from "react";
import {
  NameSemiboldNormal,
  RegularSmall,
  SmallerRegular,
} from "../../constants";
import { UforaIcon, VerifiedIcon } from "../../../assets/svg";
import { MoreHorizontal } from "lucide-react-native";
import SmallButton from "../authentication/buttons/SmallButton";

interface UserProfileNameUniMutualCard {
  profilePic?: any; // 'profilePic' prop is optional
  profileName: string;
  university?: string;
  mutualFriends?: string;
  days: string;
}

interface userProfileNameUniMutualProps {
  data: UserProfileNameUniMutualCard;
}

const FriendRequests: React.FC<userProfileNameUniMutualProps> = ({
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

        <View style={{marginTop: 5}}>
          {data.mutualFriends && (
            <Text numberOfLines={1}>
              <RegularSmall fontColor="#87929D">{data.mutualFriends} mutual friends</RegularSmall>
            </Text>
          )}
        </View>
      </View>

      {/* accept reject lastonline icon */}
      <View style={{paddingRight:10}}>
      <View style={{ flex: 1, alignItems: "flex-end",marginTop: 12 }}>
        {data.days && (
            <Text numberOfLines={1} style={{ textAlign: "right" }}>
              <RegularSmall>{data.days} days ago</RegularSmall>
            </Text>
          )}
      </View>
      <View style={{flexDirection: "row", gap: 5, marginBottom: 8}}>
        <TouchableOpacity style={{alignItems: "center", justifyContent: "center", backgroundColor: "#2656FF", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5,width: 65,height: 30,borderColor: "#2656FF",borderWidth: 1,}}>
            <RegularSmall fontColor="white">Accept</RegularSmall>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: "center", justifyContent: "center", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5,width: 65,height: 30,borderColor: "#87929D",borderWidth: 1,}}>
            <RegularSmall fontColor="#87929D">Reject</RegularSmall>
        </TouchableOpacity>
      </View>
      </View>
      
    </View>
    </View>
    
  );
};

export default FriendRequests;