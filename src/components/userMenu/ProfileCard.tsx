import React from "react";
import { View, TouchableOpacity, Image, Text, Dimensions } from "react-native";
import { COLORS } from "../../constants";
import { NameSemiboldNormal, NameSmallSemibold } from "../../constants/fonts";
import { UforaIcon, VerifiedIcon } from "../../../assets/svg";
import menuStyles from "../../screens/UserMenu/userMenuStyles.styles";

interface ProfileCardData {
    personName: string;
    personProfilePic: any; 
}

interface ProfileCardProps {
    data: ProfileCardData;
    navigation: any;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ data, navigation }) => {

    const handlePress=() => {
        try {
            navigation.navigate("ClubView");
        } catch  {
          
        }
      };

    const screenWidth = Dimensions.get('window').width;
    const cardWidth = screenWidth-26;

    return (
        <TouchableOpacity style={{...menuStyles.profileCard, width: cardWidth }} onPress={handlePress}>
            <View style={menuStyles.personDetails}>
                <Image 
                source={data.personProfilePic}
                style={menuStyles.profilePicture}
                />
                <View style={{...menuStyles.personName, width: cardWidth-194}}>
                    <NameSemiboldNormal><Text style={{color: COLORS.brandBlack,}}>{data.personName}</Text></NameSemiboldNormal>
                    <View style={{gap:5, flexDirection: "row", alignItems: "center"}}>
                        <VerifiedIcon size={16} fillColor={COLORS.brandBlue} strokeColor={COLORS.brandWhite} />
                        <UforaIcon size={16} fillColor={COLORS.brandBlack} strokeColor={COLORS.brandWhite} />
                    </View>
                </View>
            </View>
            <View style={{display: "flex", alignItems: "center"}}><NameSmallSemibold><Text style={{color: COLORS.brandBlue, textAlign: "center"}}>Logged In</Text></NameSmallSemibold></View>
        </TouchableOpacity>
    );
}

export default ProfileCard;