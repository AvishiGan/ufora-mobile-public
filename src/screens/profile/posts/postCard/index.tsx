/**
 * This code is a common code for creating one single post card which we can use later to create multiple post cards
 */

import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import PropTypes from "prop-types";
import { PostHeader } from "../../../../components";
import { authorDataPost } from "./data";
import { CommentIcon, LikeIcon, LikedIcon } from "../../../../../assets/svg";
import PostShareIcon from "../../../../../assets/svg/myProfile/posts/postShareIcon";
import { RegularSmall, SmallerRegular } from "../../../../constants";

interface PostCardData {
  postDescription: string;
  postImage: any;
  likedNames: string;
  likedCount: number;
  commentsCount: number;
}

const PostCard: React.FC<PostCardData> = ({
  postDescription,
  postImage,
  likedNames,
  likedCount,
  commentsCount,
}) => {
  return (
    <View style={styles.singlePostContainer}>
      {/* PostHeader component */}
      <PostHeader data={authorDataPost} />
      <Text style={styles.postDescription}>
        {postDescription}
        <Text style={styles.seeMore}>... see more</Text>
      </Text>
      <Image style={styles.postImage} source={postImage} />
      <View style={styles.feedbackContainer}>
        <View style={styles.likesCommentsContainer}>
          <View style={styles.likeButtonAndNamesContainer}>
            {/* Liked icon */}
            <LikedIcon width={20} height={20} />
            <Text style={styles.likedNames}>{likedNames}</Text>
            <Text style={styles.andOthers}>{`& ${likedCount} others`}</Text>
          </View>
          <View style={styles.commentsCountContainer}>
            <RegularSmall>{`${commentsCount} comments`}</RegularSmall>
          </View>
        </View>
        <View style={styles.likeShareCommentButtonContainer}>
          <View style={styles.eachButtonContainer}>
            {/* Like icon */}
            <LikeIcon width={18} height={18} />
            <SmallerRegular>Like</SmallerRegular>
          </View>
          <View style={styles.eachButtonContainer}>
            {/* Comment icon */}
            <CommentIcon width={18} height={18} />
            <SmallerRegular>Comment</SmallerRegular>
          </View>
          <View style={styles.eachButtonContainer}>
            {/* Share icon */}
            <PostShareIcon width={18} height={18} />
            <SmallerRegular>Share</SmallerRegular>
          </View>
        </View>
      </View>
    </View>
  );
};

/**
 * This is a type checking for the props which we are passing to the PostCard component
 */
PostCard.propTypes = {
  postDescription: PropTypes.string.isRequired,
  postImage: PropTypes.any.isRequired,
  likedNames: PropTypes.string.isRequired,
  likedCount: PropTypes.number.isRequired,
  commentsCount: PropTypes.number.isRequired,
};

export default PostCard;
