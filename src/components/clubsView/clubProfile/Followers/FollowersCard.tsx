import { Image, Text, View } from "react-native";
import {
  NameSemiboldNormal,
  RegularNormal,
  SmallerRegular,
} from "../../../../constants";
import { UforaIcon, VerifiedIcon } from "../../../../../assets/svg";
import { MoreHorizontal } from "lucide-react-native";

interface FollowersCard {
  profilePic?: any; // 'profilePic' prop is optional
  profileName: string;
  university: string;
  
}

interface UniAnnouncementCardProps {
  data: FollowersCard;
  showMoreIcon?: boolean;
}

/**
 *
 * @param param0 | This is the data which we are passing to the FollowersCard component
 * @returns | This component returns the author bio of the post
 * @description | This component is used in the blog and project post to show the bio of the author
 */
const FollowersCard: React.FC<UniAnnouncementCardProps> = ({ data, showMoreIcon }) => {
  return (
    <View className="px-2 py-3 my-1 bg-white rounded-xl w-[365] ml-3">
      <View className="flex-row bg-white h-[46] justify-between items-center">
        <View className="flex-row space-x-2 items-center">
          {/* Image */}
          <Image
            className="w-[45] h-[45] rounded-full"
            source={data.profilePic}
          />
          {showMoreIcon && <MoreHorizontal size={20} color="#000" />}

          <View className="text-start w-[250]">
            {/* Profile Name */}
            <Text>
              <NameSemiboldNormal>{data.profileName}</NameSemiboldNormal>
              <VerifiedIcon size={15} fillColor="#2656FF" strokeColor="#FEFEFE"/>
              <UforaIcon size={15} fillColor="#111111" strokeColor="#FEFEFE" />
            </Text>
            <Text numberOfLines={1}>
                <SmallerRegular>{data.university}</SmallerRegular>
              </Text>
              
          </View>
          
        </View>
        
        </View>
      </View>

  );
};

export default FollowersCard;
