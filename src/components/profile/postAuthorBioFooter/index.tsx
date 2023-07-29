import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";
import { UforaIcon, VerifiedIcon } from "../../../../assets/svg";
import { NameSmallSemibold, SmallerRegular } from "../../../constants";

interface PostAuthorBioFooter {
  profilePic?: any; // 'profilePic' prop is optional
  profileName: string;
  university: string;
  date?: string; // 'date' prop is optional
}

interface PostAuthorBioFooterProps {
  data: PostAuthorBioFooter;
}

/**
 *
 * @param param0 | This is the data which we are passing to the PostAuthorBioFooter component
 * @returns | This component returns the author bio of the post
 * @description | This component is used in the blog and project post to show the bio of the author
 */
const PostAuthorBioFooter: React.FC<PostAuthorBioFooterProps> = ({ data }) => {
  return (
    <View style={styles.authorBioContainer}>
      {/* Profile pic */}
      <Image style={styles.profilePic} source={data.profilePic} />
      <View style={styles.profileNameUniContainer}>
        <View style={styles.profileNameTwoIconsContainer}>
          <NameSmallSemibold>{data.profileName}</NameSmallSemibold>
          {/* Two icons */}
          <VerifiedIcon size={12} fillColor="#2656FF" strokeColor="#fff" />
          <UforaIcon size={12} fillColor="#111" strokeColor="#fff" />
        </View>
        <SmallerRegular>{data.university}</SmallerRegular>
      </View>
      {data.date && <SmallerRegular>{data.date}</SmallerRegular>}
    </View>
  );
};

export default PostAuthorBioFooter;
