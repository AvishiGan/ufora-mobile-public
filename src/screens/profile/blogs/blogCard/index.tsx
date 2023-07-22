/**
 * This code is a common code for creating one single blog card which we can use later to create multiple blog cards
 */

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { styles } from "./styles";
import PropTypes from "prop-types";
import { Paragraph } from "react-native-paper";

interface BlogCardData {
  blogImage: any;
  blogTitle: string;
  blogDescription: string;
  date: string;
  time: string;
}

const BlogCard: React.FC<BlogCardData> = ({
  blogImage,
  blogTitle,
  blogDescription,
  date,
  time,
}) => {
  return (
    <View style={styles.singleBlogContainer}>
      {/* Blog image comes here */}
      {/* <Image style={styles.postImage} source={postImage} /> */}
      <View style={styles.blogContentContainer}>
        <View style={styles.blogArticleContainer}>
          <Text style={styles.blogTitle}>{blogTitle}</Text>
          <Paragraph style={styles.blogDescription}>
            {blogDescription}
          </Paragraph>
          <View style={styles.dateTimeContainer}>
            <Text style={styles.dateTime}>{date}</Text>
            {/* Dot icon comes here */}
            <Text style={styles.dateTime}>{time}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

/**
 * This is a type checking for the props which we are passing to the BlogCard component
 */
BlogCard.propTypes = {
  blogImage: PropTypes.any.isRequired,
  blogTitle: PropTypes.string.isRequired,
  blogDescription: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default BlogCard;
