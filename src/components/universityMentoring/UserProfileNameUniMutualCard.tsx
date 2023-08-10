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

const UserProfileNameUniMutualCard: React.FC<userProfileNameUniMutualProps> = ({
  data,
}) => {
  return (
    <TouchableOpacity className="mt-2 flex-row bg-white items-center rounded-md px-1 py-2">
      {/* profile picture */}
      <View className=" w-[50] h-[50] content-center items-center ">
        <Image
          source={data.profilePic}
          className="h-full w-full rounded-full"
        />
      </View>

      {/* description */}
      <View className="flex-1 px-2">
        <View className="flex-row space-x-2 items-center ">
          <Text numberOfLines={1}>
            <NameSemiboldNormal>{data.profileName}</NameSemiboldNormal>
          </Text>
          <VerifiedIcon size={16} fillColor="#2656FF" strokeColor="#fff" />
          <UforaIcon size={16} fillColor="#111" strokeColor="#fff" />
        </View>
        {data.university && (
          <Text numberOfLines={1}>
            <SmallerRegular>{data.university}</SmallerRegular>
          </Text>
        )}
        {data.mutualFriends && (
          <Text numberOfLines={1}>
            <RegularSmall>{data.mutualFriends} mutual friends</RegularSmall>
          </Text>
        )}
      </View>

      {/* accept reject lastonline icon */}
      <View className="justify-center">
        <MoreHorizontal color="#4F4E4E" size={24} />
      </View>
    </TouchableOpacity>
  );
};

export default UserProfileNameUniMutualCard;
