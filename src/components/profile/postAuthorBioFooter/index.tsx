import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

interface PostAuthorBioFooter {
  profilePic: any;
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
 * @returns | This component returns the bio of author in a blog post
 */
const PostAuthorBioFooter: React.FC<PostAuthorBioFooterProps> = ({ data }) => {
  return (
    <View style={styles.authorBioContainer}>
      {/* Profile pic comes here */}
      <View style={styles.profileNameUniContainer}>
        <View style={styles.profileNameTwoIconsContainer}>
          <Text style={styles.profileName}>{data.profileName}</Text>
          {/* Two icons come here */}
        </View>
        <Text style={styles.uniName}>{data.university}</Text>
      </View>
      {data.date && <Text style={styles.date}>{data.date}</Text>}
    </View>
  );
};

export default PostAuthorBioFooter;
