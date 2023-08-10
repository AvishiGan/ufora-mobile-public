/**
 * This file contains all the blogs information
 */

import React from "react";
import { View } from "react-native";
import { BlogCard, ContentAdditionBar } from "../../components";
import { marketing, security, HCI } from "../../../assets/images";
import { styles } from "../../components/profile/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

const ProfileBlogSection = () => {
  return (
    <SafeAreaView>
      <View>
        <ScrollView>
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
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProfileBlogSection;
