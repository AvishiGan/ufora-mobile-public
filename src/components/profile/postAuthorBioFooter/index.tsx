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
 * @returns | This component returns the author bio of the post
 * @description | This component is used in the blog and project post to show the bio of the author
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
