import { Image, Text, TouchableOpacity, View } from "react-native";
import { ButtonMedium, SemiBoldBig, SmallerRegular } from "../../constants";
import { UforaIcon, VerifiedIcon } from "../../../assets/svg";

//user suggession card interface
interface UserSuggessionCard {
  profilePicture?: any;
  userName: string;
  universityName?: string;
  mutualFriends?: string;
  tag1?: string;
  tag2?: string;
}

interface UserSuggessionCardProps {
  data: UserSuggessionCard;
}

const UserSuggessionCard: React.FC<UserSuggessionCardProps> = ({ data }) => {
  return (
    <View className="bg-white h-full  w-[200] items-center px-4 rounded-lg py-1 mx-2">
      {/* image here */}
      <View className=" w-28 h-28 content-center items-center ">
        <Image
          source={data.profilePicture}
          className="h-full w-full rounded-full"
        />
      </View>

      {/* name and university */}
      <View className=" p-1 w-100 bg-cyan-200 items-center">
        <View className="flex-row items-center">
          <Text numberOfLines={1}>
            <SemiBoldBig>{data.userName}</SemiBoldBig>
          </Text>
          <View className="flex-row ml-1">
            <VerifiedIcon size={16} fillColor="#2656FF" strokeColor="#fff" />
            <UforaIcon size={16} fillColor="#111" strokeColor="#fff" />
          </View>
        </View>
        {data.universityName && (
          <Text numberOfLines={1}>{data.universityName}</Text>
        )}
      </View>

      {/* mutual friends */}
      {data.mutualFriends && (
        <Text className="text-gray-400 mx-3">104 Mutual Friends</Text>
      )}

      {/* Tags */}
      {data.tag1 && (
        <View className="flex-row items-center space-x-1 m-1">
          <View className="border-0.5 p-0.5 rounded-sm">
            <SmallerRegular>{data.tag1}</SmallerRegular>
          </View>
          <View className="border-0.5 p-0.5 rounded-sm">
            <SmallerRegular>{data.tag2}</SmallerRegular>
          </View>
        </View>
      )}

      {/* Buttons */}
      <View className="mt-1 flex-row space-x-4 my-2">
        <TouchableOpacity className="bg-blue-500 p-2 rounded-md">
          <Text className="text-white px-4">
            <ButtonMedium>Add</ButtonMedium>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-2 rounded-md border-gray-400 border-0.5">
          <Text className="text-gray-400 ">
            <ButtonMedium>Remove</ButtonMedium>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserSuggessionCard;
