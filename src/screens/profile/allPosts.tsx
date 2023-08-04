/**
 * This file contains all the posts information
 */

import React from "react";
import { View } from "react-native";
import PostCard from "../../components/profile/postCard";
import {
  architecture,
  rugbyField,
  champions,
  office,
} from "../../../assets/images";
import { styles } from "./styles";
import ContentAdditionBar from "../../components/profile/contentAdditionBar";
import ProfileCommonSection from "./commonSection";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfilePostSection = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <ProfileCommonSection />
        <View style={styles.postActionContainer}>
          <ContentAdditionBar title="Add a new post" />
          <View style={styles.allPostsContainer}>
            <PostCard
              postDescription="This is an amazing architectural concept which we can implement in our group project"
              postImage={architecture}
              likedNames="Kasun"
              likedCount={100}
              commentsCount={20}
              seeMore={true}
            />

            <PostCard
              postDescription="Me and my homies at the Bradby finals!!!"
              postImage={rugbyField}
              likedNames="Kasun, Sumith"
              likedCount={10}
              commentsCount={5}
              seeMore={false}
            />

            <PostCard
              postDescription="Recently we participated and became the champions at Realhack 5.0"
              postImage={champions}
              likedNames="You"
              likedCount={50}
              commentsCount={20}
              seeMore={false}
            />

            <PostCard
              postDescription="Interested in kickstarting your global career from Sri Lanka itself?"
              postImage={office}
              likedNames=""
              likedCount={120}
              commentsCount={0}
              seeMore={false}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfilePostSection;