/**
 * This file contains all the blogs information
 */

import React from "react";
import { View } from "react-native";
import BlogCard from "../../../components/profile/blogCard/index";
import { marketing, security, HCI } from "../../../../assets/images";
import { styles } from "./styles";
import ContentAdditionBar from "../../../components/profile/contentAdditionBar";
import ProfileCommonSection from "../commonSection";

const ProfileBlogSection = () => {
  return (
    <View>
      <ProfileCommonSection />
      <View style={styles.blogActionContainer}>
        <ContentAdditionBar title="Add a new blog article" />
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
      </View>
    </View>
  );
};

export default ProfileBlogSection;
