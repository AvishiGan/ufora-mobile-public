import { Image, Text, TouchableOpacity, View } from "react-native";
import { ButtonMedium, RegularNormal, RegularSmall, SemiboldBig, SmallerRegular } from "../../constants";
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

const PeopleYouMayKnow: React.FC<UserSuggessionCardProps> = ({ data }) => {
  return (
    <View style={{ backgroundColor: "white", alignItems: "center", paddingHorizontal: 15, borderRadius: 15, marginHorizontal: 4 }}>
    {/* image here */}
    <View style={{ alignItems: "center",padding: 20}}>
      <Image style={{ width: 100, height: 100, borderRadius: 50 }} source={data.profilePicture} />
    </View>

      {/* name and university */}
      <View style={{padding: 1,width: "100%",alignItems: "center", }}>
        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 2}}>
          <Text numberOfLines={1}>
            <SemiboldBig>{data.userName}</SemiboldBig>
          </Text>
          <View style={{flexDirection: "row",width: 16,height: 16,marginRight: 1,}}>
            <VerifiedIcon size={16} fillColor="#2656FF" strokeColor="#fff" />
            <UforaIcon size={16} fillColor="#111" strokeColor="#fff" />
          </View>
        </View>
        {data.universityName && (
          <RegularSmall>{data.universityName}</RegularSmall>
        )}
      </View>

      {/* mutual friends */}
      <View style={{marginTop: 15}}>
      {data.mutualFriends && (
        <RegularNormal fontColor="#87929D">104 Mutual Friends</RegularNormal>
      )}
      </View>
      

      {/* Tags */}
      {data.tag1 && (
        <View style={{flexDirection: "row",alignItems: "center",margin: 1,}}>
          <View style={{borderWidth: 0.5,padding: 2,borderRadius: 2,}}>
            <SmallerRegular>{data.tag1}</SmallerRegular>
          </View>
          <View style={{borderWidth: 0.5,padding: 2,borderRadius: 2,}}>
            <SmallerRegular>{data.tag2}</SmallerRegular>
          </View>
        </View>
      )}

      {/* Buttons */}
      <View style={{marginTop: 15,flexDirection: "row",gap: 6,marginBottom: 20,}}>
        <TouchableOpacity style={{alignItems: "center", justifyContent: "center", backgroundColor: "#2656FF", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 8,width: 100,height: 40,borderColor: "#2656FF",borderWidth: 1,}}>
            <ButtonMedium fontColor="white">Add Friend</ButtonMedium>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: "center", justifyContent: "center", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 8,width: 100,height: 40,borderColor: "#87929D",borderWidth: 1,}}>
            <ButtonMedium fontColor="#87929D">Remove</ButtonMedium>
        </TouchableOpacity>
      
      </View>
    </View>
  );
};

export default PeopleYouMayKnow; 