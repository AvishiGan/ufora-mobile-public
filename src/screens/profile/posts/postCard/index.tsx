import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { styles } from "./styles";
import { Paragraph } from "react-native-paper";
// import { ProfileHeaderData } from "./data";
import ProfileHeader from "../../../../components/profile/profileHeader";
import { architecture, thumbsUpIcon } from "../../../../../assets/images";
// import { thumbsUpIcon } from "../../../../../assets/svgImages";

const PostCard: React.FC = () => {
  return (
    <View style={styles.allPostsContainer}>
      <View style={styles.singlePostContainer}></View>
      {/* <ProfileHeader /> */}
      <Paragraph style={styles.postDescription}>
        This is an amazing architectural concept which we can implement in our
        group project
        <Text style={styles.seeMore}>... see more</Text>
      </Paragraph>
      <Image style={styles.postImage} source={architecture} />
      <View style={styles.feedbackContainer}>
        <View style={styles.likesCommentsContainer}>
          <View style={styles.likeButtonAndNamesContainer}>
            <Image style={styles.likeButton} source={thumbsUpIcon} />
            {/* <thumbsUpIcon /> */}
            {/* Like button comes here */}
            <Text style={styles.likedNames}>Kasun, Sumith</Text>
            <Text style={styles.andOthers}> & 10 others</Text>
            <Text style={styles.likedCount}>10 Likes</Text>
            <View style={styles.likeShareCommentButtonContainer}>
              <View style={styles.eachButtonContainer}></View>
              {/* Each button comes here */}
              <Text style={styles.eachButtonText}>Like</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostCard;
