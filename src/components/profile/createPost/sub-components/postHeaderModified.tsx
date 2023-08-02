import React from "react";
import { View, Image } from "react-native";
import { styles } from "../../postHeader/styles";
import {
  GlobeIcon,
  MoreIcon,
  SmallDotIcon,
  UforaIcon,
  VerifiedIcon,
  CrossIcon,
} from "../../../../../assets/svg";
import SemiBoldBig from "../../../../constants/fonts/SemiboldBig";

interface PostHeaderData {
  profilePic: any;
  profileName: string;
  university?: string;
  time?: string;
}

interface PostHeaderProps {
  data: PostHeaderData;
}

/**
 * Profile picture, name and public button contains in this component
 */
const PostHeaderModified: React.FC<PostHeaderProps> = ({ data }) => {
  return (
    <View style={styles.postHeaderContainer}>
      <View style={styles.profilePicNameUniTimeContainer}>
        {/* Profile pic */}
        <Image style={styles.profilePic} source={data.profilePic} />
        <View style={styles.profileNameUniTimeContainer}>
          <View style={styles.profileNameTwoIconsContainer}>
            <SemiBoldBig>{data.profileName}</SemiBoldBig>
            <View style={styles.verifiedAndUforaIconContainer}>
              {/* Verified icon */}
              <VerifiedIcon size={16} fillColor="#2656FF" strokeColor="#fff" />
              {/* Ufora icon */}
              <UforaIcon size={16} fillColor="#111111" strokeColor="#FEFEFE" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostHeaderModified;
