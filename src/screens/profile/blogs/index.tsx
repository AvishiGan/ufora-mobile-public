/**
 * This file contains all the posts information
 */

import React from "react";
import { View, StyleSheet } from "react-native";
import BlogCard from "../../profile/blogs/blogCard/index";
import { marketing, security, HCI, office } from "../../../../assets/images";
import { styles } from "./styles";

const ProfileBlogSection = () => {
  return (
    <View style={styles.blogActionContainer}>
      {/* Add a new post bar comes here */}
      {/* <View style={styles.allPostsContainer}> */}
      <BlogCard
        blogImage={marketing}
        blogTitle="Digital Marketing"
        blogDescription="Unleash your business's potential with strategic digital marketing tactics..."
        date="Jun 25th, 2023"
        time="7 mins read"
      />

      <BlogCard
        blogImage={security}
        blogTitle="Cyber Security"
        blogDescription="Protect your digital assets with robust cybersecurity measures and strategies..."
        date="Jun 10th, 2023"
        time="5 mins read"
      />

      <BlogCard
        blogImage={HCI}
        blogTitle="Human Computer Interaction"
        blogDescription="Unlocking human potential through seamless and intuitive Human-Computer Interaction (HCI)..."
        date="Jun 1st, 2023"
        time="7 mins read"
      />

      {/* <BlogCard
        blogDescription="Interested in kickstarting your global career from Sri Lanka itself?"
        blogImage={office}
        blogTitle=""
        date={120}
        time={0}
      /> */}
      {/* </View> */}
    </View>
  );
};

export default ProfileBlogSection;
