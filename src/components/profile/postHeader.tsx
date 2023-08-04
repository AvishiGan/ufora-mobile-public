import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";
import {
  GlobeIcon,
  MoreIcon,
  SmallDotIcon,
  UforaIcon,
  VerifiedIcon,
  CrossIcon,
} from "../../../assets/svg";
import SemiBoldBig from "../../constants/fonts/SemiboldBig";
import { RegularSmall, SmallerMedium } from "../../constants";

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
 *
 * @param param0 | This is the data which we are passing to the PostHeader component
 * @returns | This component returns the header of the post
 */
const PostHeader: React.FC<PostHeaderProps> = ({ data }) => {
  return (
    <View style={styles.postHeaderContainer}>
      <View style={styles.profilePicNameUniTimeContainer}>
        {/* Profile pic */}
        <Image style={styles.profilePicPostHeader} source={data.profilePic} />
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
          <RegularSmall>{data.university}</RegularSmall>
          <View style={styles.timeAndGlobeIconContainer}>
            <SmallerMedium>{data.time}</SmallerMedium>
            {/* Dot icon */}
            <SmallDotIcon width={3} height={2} color="#87929D" />
            {/* Globe icon */}
            <GlobeIcon width={11} height={10} color="#87929D" />
          </View>
        </View>
      </View>
      <View style={styles.moreAndCrossIconContainer}>
        {/* More icon */}
        <MoreIcon width={25} height={24} color="black" />
        {/* Cross icon */}
        <CrossIcon size={24} />
      </View>
    </View>
  );
};

export default PostHeader;
