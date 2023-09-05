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
  organization?: string;
  time?: string;
}

interface PostHeaderProps {
  data: PostHeaderData;
  profileType: "user" | "company" | "club";
}

/**
 *
 * @param param0 | This is the data which we are passing to the PostHeader component
 * @returns | This component returns the header of the post
 */
const PostHeader: React.FC<PostHeaderProps> = ({ data, profileType }) => {
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
              {profileType === "user" && (
                <UforaIcon
                  size={16}
                  fillColor="#111111"
                  strokeColor="#FEFEFE"
                />
              )}
            </View>
          </View>
          <RegularSmall>{data.organization}</RegularSmall>
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
        <MoreIcon width={22} height={22} color="black" />
        {/* Cross icon */}
        <CrossIcon size={22} />
      </View>
    </View>
  );
};

export default PostHeader;
