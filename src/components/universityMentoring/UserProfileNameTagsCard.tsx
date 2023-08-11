import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { NameSemiboldNormal, RegularSmall, SmallerRegular } from "../../constants";
import { UforaIcon, VerifiedIcon } from "../../../assets/svg";
import { MoreHorizontal } from "lucide-react-native";

interface UserProfileNameTagsCard {
  profilePic?: any; // 'profilePic' prop is optional
  profileName: string;
  tag1: string;
  tag2: string;
  shouldSendRequest?: boolean;
}

interface userProfileNameTagsProps {
  data: UserProfileNameTagsCard;
}

const UserProfileNameTagsCard : React.FC<userProfileNameTagsProps> = ({data}) => {
  return (
    <View className="px-2 py-2 my-1 bg-white rounded-lg">
      <View className="flex-row h-[46] justify-between items-center">
        <View className="flex-row space-x-2 items-center">
          {/* Image */}
          <Image
            className="w-[40] h-[40] rounded-full"
            source={data.profilePic}
          />

          <View> 
            {/* Name, Icons*/}
            <View className="flex-row">
              <NameSemiboldNormal>{data.profileName}</NameSemiboldNormal>
              <VerifiedIcon size={16} fillColor="#2656FF" strokeColor="#fff" />
              <UforaIcon size={16} fillColor="#111" strokeColor="#fff" />
            </View>

            {/* Tags */}
            <View className="flex-row items-center space-x-1">
              <View className="border-0.5 p-0.5 rounded-sm">
                {}
                <SmallerRegular>{data.tag1}</SmallerRegular>
              </View>
              <View className="border-0.5 p-0.5 rounded-sm">
                <SmallerRegular>{data.tag2}</SmallerRegular>
              </View>
            </View>
          </View>
        </View>

        {/*Button and Moreover */}
        <View className="flex-row items-center ">
          {data.shouldSendRequest && (
            <TouchableOpacity
              className="border-0.5 py-1 px-3 rounded-md m-2"
              onPress={() => console.log("Button clicked")}
            >
              <RegularSmall>Request</RegularSmall>
            </TouchableOpacity>
          )}
          <MoreHorizontal color="#4F4E4E" size={16} />
        </View>
      </View>
    </View>
  );
};

export default UserProfileNameTagsCard;
