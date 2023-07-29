import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { UforaIcon, VerifiedIcon } from "../../../../assets/svg";

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
          <Text style={styles.profileName}>{data.profileName}</Text>
          {/* Two icons */}
          <VerifiedIcon size={12} fillColor="#2656FF" strokeColor="#fff" />
          <UforaIcon size={12} fillColor="#111" strokeColor="#fff" />
        </View>
        <Text style={styles.uniName}>{data.university}</Text>
      </View>
      {data.date && <Text style={styles.date}>{data.date}</Text>}
    </View>
  );
};

export default PostAuthorBioFooter;
