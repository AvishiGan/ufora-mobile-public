import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

interface BlogPostBioFooter {
  profilePic: any;
  profileName: string;
  university: string;
}

interface BlogPostBioFooterProps {
  data: BlogPostBioFooter;
}

/**
 *
 * @param param0 | This is the data which we are passing to the BlogPostBioFooter component
 * @returns | This component returns the bio of author in a blog post
 */
const BlogPostBioFooter: React.FC<BlogPostBioFooterProps> = ({ data }) => {
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
    </View>
  );
};

export default BlogPostBioFooter;
