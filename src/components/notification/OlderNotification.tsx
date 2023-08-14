import { Image, Text, View } from "react-native";
import {
  NameSemiboldNormal,
  RegularNormal,
  SmallerRegular,
} from "../../constants";
import { UforaIcon, VerifiedIcon } from "../../../assets/svg";
import { MoreHorizontal } from "lucide-react-native";

interface OlderNotification {
  profilePic?: any; // 'profilePic' prop is optional
  profileName: string;
  tag1?: string;
  tag2?: string;
  date?: string; // 'date' prop is optional
  description?: string;
}

interface UniAnnouncementCardProps {
  data: OlderNotification;
}

/**
 *
 * @param param0 | This is the data which we are passing to the OlderNotification component
 * @returns | This component returns the author bio of the post
 * @description | This component is used in the blog and project post to show the bio of the author
 */
const OlderNotification: React.FC<UniAnnouncementCardProps> = ({ data }) => {
  return (
    <View className="px-2 py-3 my-1 bg-white rounded-xl w-[365] ml-3">
      <View className="flex-row bg-white h-[46] justify-between items-center">
        <View className="flex-row space-x-2 items-center">
          {/* Image */}
          <Image
            className="w-[45] h-[45] rounded-full"
            source={data.profilePic}
          />

          <View>
            {/* Name, Icons*/}
            <View className="flex-row w-[150]">
              <NameSemiboldNormal>{data.profileName}</NameSemiboldNormal>
              <View>
                
              </View>
              <Text numberOfLines={2}>
                <RegularNormal>{data.description}</RegularNormal>
              </Text>
            </View>
          </View>
        </View>

        {/* Date and Moreover */}
        <View>
          {data.date && <SmallerRegular>{data.date}</SmallerRegular>}
          <View className="flex-row justify-end mr-1">
            <MoreHorizontal color="#4F4E4E" size={16} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default OlderNotification;
