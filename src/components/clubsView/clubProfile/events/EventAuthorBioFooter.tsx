import React from "react";
import { View, Image } from "react-native";
import { styles } from "../../../../components/profile/styles";
import { UforaIcon, VerifiedIcon } from "../../../../../assets/svg";
import { NameSmallSemibold, SmallerRegular } from "../../../../constants";
import ManageButton from "../../../profile/buttons/profileHeader/ManageButton";

interface EventAuthorBioFooter {
  profilePic?: any; // 'profilePic' prop is optional
  profileName: string;
  date?: string; // 'date' prop is optional
}

interface EventAuthorBioFooterProps {
  data: EventAuthorBioFooter;
}

/**
 *
 * @param param0 | This is the data which we are passing to the EventAuthorBioFooter component
 * @returns | This component returns the author bio of the post
 * @description | This component is used in the blog and project post to show the bio of the author
 */
const EventAuthorBioFooter: React.FC<EventAuthorBioFooterProps> = ({ data }) => {
  return (
    <View style={styles.authorBioContainer}>
      {/* Profile pic */}
      <Image style={styles.profilePicBioFooter} source={data.profilePic} />
      <View style={styles.profileNameUniContainer}>
        <View style={styles.profileNameTwoIconsContainer}>
           
            <NameSmallSemibold>{data.profileName}</NameSmallSemibold>
          {/* Two icons */}
          <VerifiedIcon size={12} fillColor="#2656FF" strokeColor="#fff" />
          <View style={{flexDirection: "row", marginLeft: 80}}>
          <ManageButton onPress={handleButtonPress}/>
          
            </View>
          
        </View>
        
      </View>
      {data.date && <SmallerRegular>{data.date}</SmallerRegular>}
    </View>
  );
};
const handleButtonPress = () => {
    console.log("Button pressed!");
  };

export default EventAuthorBioFooter;
