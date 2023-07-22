import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { styles } from "./styles";
import { Paragraph } from "react-native-paper";
// import { ProfileHeaderData } from "./data";
import ProfileHeader from "../../../../components/profile/profileHeader";
import { architecture } from "../../../../../assets/images";
import Svg, { Circle } from "react-native-svg";
import { thumbsUpIcon } from "../../../../../assets/svgImages";

const PostCard: React.FC = () => {
  return (
    <View style={styles.allPostsContainer}>
      <View style={styles.singlePostContainer}></View>
      {/* <ProfileHeader /> */}
      <Text style={styles.postDescription}>
        This is an amazing architectural concept which we can implement in our
        group project
        <Text style={styles.seeMore}>... see more</Text>
      </Text>
      <Image style={styles.postImage} source={architecture} />
      <View style={styles.feedbackContainer}>
        <View style={styles.likesCommentsContainer}>
          <View style={styles.likeButtonAndNamesContainer}>
            {/* <thumbsUpIcon /> */}
            {/* Like button comes here */}
            <Text style={styles.likedNames}>Kasun</Text>
            <Text style={styles.andOthers}>& 100 others</Text>
          </View>
          <View style={styles.commentsCountContainer}>
            <Text style={styles.commentsCountText}>50 comments</Text>
          </View>
        </View>
        <View style={styles.likeShareCommentButtonContainer}>
          <View style={styles.eachButtonContainer}>
            {/* Each button comes here */}
            <Text style={styles.eachButtonText}>Like</Text>
          </View>
          <View style={styles.eachButtonContainer}>
            {/* Each button comes here */}
            <Text style={styles.eachButtonText}>Comment</Text>
          </View>
          <View style={styles.eachButtonContainer}>
            {/* Each button comes here */}
            <Text style={styles.eachButtonText}>Share</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostCard;
