/**
 * This file contains all the posts information
 */

import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { PostCard, ContentAdditionBar, CreatePost } from "../../../components";
import {
  architecture,
  rugbyField,
  champions,
  office,
} from "../../../../assets/images/profile/myProfile";
import { styles } from "../../../components/profile/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../navigation/navigator/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

// type Props = StackScreenProps<RootStackParamList, "AllPosts">;
type Props = NativeStackNavigationProp<RootStackParamList>;

const MyProfilePostSection: React.FC = () => {
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
              postDescription="This is an amazing architectural concept which we can implement in our group project"
              postImage={architecture}
              likedNames="Kasun"
              likedCount={100}
              commentsCount={20}
              seeMore={true}
              profileType="user"
            />

            <PostCard
              postDescription="Me and my homies at the Bradby finals!!!"
              postImage={rugbyField}
              likedNames="Kasun, Sumith"
              likedCount={10}
              commentsCount={5}
              seeMore={false}
              profileType="user"
            />

            <PostCard
              postDescription="Recently we participated and became the champions at Realhack 5.0"
              postImage={champions}
              likedNames="You"
              likedCount={50}
              commentsCount={20}
              seeMore={false}
              profileType="user"
            />

            <PostCard
              postDescription="Interested in kickstarting your global career from Sri Lanka itself?"
              postImage={office}
              likedNames=""
              likedCount={120}
              commentsCount={0}
              seeMore={false}
              profileType="user"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyProfilePostSection;
