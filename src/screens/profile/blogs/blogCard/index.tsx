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

interface BlogCardProps {
  data: BlogCardData;
}

const BlogCard: React.FC<BlogCardProps> = ({ data }) => {
  return (
    <View style={styles.singleBlogContainer}>
      <Image style={styles.blogImage} source={data.blogImage} />
      <View style={styles.blogContentContainer}>
        <View style={styles.blogArticleContainer}>
          <Text style={styles.blogTitle}>{data.blogTitle}</Text>
          <Paragraph style={styles.blogDescription}>
            {data.blogDescription}
          </Paragraph>
          <View style={styles.dateTimeContainer}>
            <Text style={styles.dateTime}>{data.date}</Text>
            {/* Dot icon comes here */}
            <Text style={styles.dateTime}>{data.time}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BlogCard;
