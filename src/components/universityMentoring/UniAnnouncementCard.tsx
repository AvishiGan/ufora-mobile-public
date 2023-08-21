import { Image, Text, View } from "react-native";
import {
  NameSemiboldNormal,
  RegularNormal,
  SmallerRegular,
} from "../../constants";
import { UforaIcon, VerifiedIcon } from "../../../assets/svg";
import { MoreHorizontal } from "lucide-react-native";

interface UniAnnouncementCard {
  profilePic?: any; // 'profilePic' prop is optional
  profileName: string;
  tag1: string;
  tag2: string;
  date?: string; // 'date' prop is optional
  description?: string;
}

interface UniAnnouncementCardProps {
  data: UniAnnouncementCard;
}

/**
 *
 * @param param0 | This is the data which we are passing to the UniAnnouncementCard component
 * @returns | This component returns the author bio of the post
 * @description | This component is used in the blog and project post to show the bio of the author
 */
const UniAnnouncementCard: React.FC<UniAnnouncementCardProps> = ({ data }) => {
  return (
    <View className="px-2 py-4 my-1 mx-3 w-[360] bg-white rounded-lg">
      <View className="flex-row bg-white h-[46] justify-between items-center">
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
                <SmallerRegular>{data.tag1}</SmallerRegular>
              </View>
              <View className="border-0.5 p-0.5 rounded-sm">
                <SmallerRegular>{data.tag2}</SmallerRegular>
              </View>
            </View>
          </View>
        </View>

        {/* Date and Moreover */}
        <View>
          {data.date && <SmallerRegular>{data.date}</SmallerRegular>}
          <View className="flex-row justify-end">
            <MoreHorizontal color="#4F4E4E" size={16} />
          </View>
        </View>
      </View>

      <View className="mt-2">
        <Text numberOfLines={2}>
          <RegularNormal>{data.description}</RegularNormal>
        </Text>
      </View>
    </View>
  );
};

export default UniAnnouncementCard;
