import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import PropTypes from "prop-types";
import { TopBar } from "../../../components";
import {
  PageTitleSemibold,
  RegularNormal,
  RegularSmall,
  SmallerRegular,
} from "../../../constants";
import CreatePostHeader from "./header";
import { profileData } from "../../../screens/profile/data";
import { AddPhotoVideoButton } from "../buttons";

interface PostCardData {
  postDescription: string;
  postImage: any;
  likedNames: string;
  likedCount: number;
  commentsCount: number;
  seeMore: boolean;
}

const PostCard: React.FC<PostCardData> = ({
  postDescription,
  postImage,
  likedNames,
  likedCount,
  commentsCount,
  seeMore,
}) => {
  return (
    <View>
      <TopBar titleBarName="Create Post" />
      <CreatePostHeader data={profileData} />
      <PageTitleSemibold>Hey Isuru, What’s special today?</PageTitleSemibold>
      {/* <AddPhotoVideoButton /> */}
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
