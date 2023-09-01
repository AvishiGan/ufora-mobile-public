/**
 * This file contains all the posts information
 */

import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { PostCard, ContentAdditionBar, CreatePost } from "../../../components";
import {
  rotaractVisiting,
  hiking,
  staff,
  office,
} from "../../../../assets/images/profile/companyProfile";
import { styles } from "../../../components/profile/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../navigation/navigator/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

// type Props = StackScreenProps<RootStackParamList, "AllPosts">;
type Props = NativeStackNavigationProp<RootStackParamList>;

const CompanyProfilePostSection: React.FC = () => {
  const navigation = useNavigation<Props>();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.postActionContainer}>
          {/* <ContentAdditionBar
            title="Add a new post"
            onPress={() => navigation.navigate("CreatePost")}
          /> */}

          <TouchableOpacity onPress={() => navigation.navigate("CreatePost")}>
            <Text>Add a new post</Text>
          </TouchableOpacity>

          <View style={styles.allPostsContainer}>
            <PostCard
              postDescription="The Rotaract Fellowship visit has been successfully concluded"
              postImage={rotaractVisiting}
              likedNames="Kasun"
              likedCount={100}
              commentsCount={20}
              seeMore={true}
              profileType="company"
            />

            <PostCard
              postDescription="Hiking for life"
              postImage={hiking}
              likedNames="Kasun, Sumith"
              likedCount={10}
              commentsCount={5}
              seeMore={false}
              profileType="company"
            />

            <PostCard
              postDescription="Our developers working successfully on revamping our website"
              postImage={staff}
              likedNames="You"
              likedCount={50}
              commentsCount={20}
              seeMore={true}
              profileType="company"
            />

            <PostCard
              postDescription="Meetings have never been more fun"
              postImage={office}
              likedNames=""
              likedCount={120}
              commentsCount={0}
              seeMore={true}
              profileType="company"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CompanyProfilePostSection;
