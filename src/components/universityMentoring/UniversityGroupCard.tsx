import { Image, TouchableOpacity, View } from "react-native";
import { NameSemiboldNormal, RegularSmall } from "../../constants";
import { MoreHorizontal } from "lucide-react-native";

interface UniversityGroupCard {
  profilePic?: any;
  universityName: string;
  isMember: boolean;
}

interface UniversityGroupCardProp {
  data: UniversityGroupCard;
}

const UniversityGroupCard: React.FC<UniversityGroupCardProp> = ({ data }) => {
  return (
    <View className="bg-cyan-400 h-[60] flex-row items-center mx-2 my-1">
      <View className="flex-row items-center flex-1">
        {/* Image */}
        <Image
          className="w-[40] h-[40] rounded-full mr-2"
          source={data.profilePic}
        />
        <NameSemiboldNormal>{data.universityName}</NameSemiboldNormal>
      </View>

      {/* Conditional Rendering */}
      {!data.isMember && (
        <TouchableOpacity
          className="border-0.5 py-1 px-3 rounded-md m-2"
          onPress={() => console.log("Button clicked")}
        >
          <RegularSmall>Request to Join</RegularSmall>
        </TouchableOpacity>
      )}

      <MoreHorizontal color="#4F4E4E" size={16} />
    </View>
  );
};

export default UniversityGroupCard;
