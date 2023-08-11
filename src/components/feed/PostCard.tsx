import { View, Text, Image } from "react-native";
import React from "react";

//icons
// import { Icon } from "@rneui/base";
import { MessageCircle, Share2, ThumbsUp } from "lucide-react-native";

// dummy data
const imageLink: string = "../../../assets/images/myProfile/common/pic2.jpg";
const imageUOC: string = "../../../assets/images/feedPosts/post1.jpg";

const PostCard = () => {
  return (
    <View className="my-4 h-[537] bg-white rounded-md">
      <View className="flex-row h-[60]  items-center">
        {/* profile picture */}
        <View className=" w-12 h-12 content-center items-center ">
          <Image
            source={require(imageLink)}
            className="h-full w-full rounded-full"
          />
        </View>

        {/* description */}
        <View className="flex-1 h-12  leading-3 px-2">
          <Text numberOfLines={1} style={{ fontWeight: "bold" }}>
            Pasan Phelps
          </Text>
          <Text numberOfLines={1} style={{ lineHeight: 14 }}>
            Undergrad at University of Colombo School of Computing
          </Text>
          <Text numberOfLines={1} style={{ lineHeight: 14 }}>
            2 hours ago
          </Text>
        </View>

        {/* moreever icon */}
        {/* <View className="h-12  w-6">
          <Icon name="more-horizontal" type="feather" color="#4F4E4E" />
        </View> */}
      </View>

      {/* post image with caption*/}
      <View className="w-full h-[340] mb-6">
        <Text className="h-6">
          Hello There, Profile Picture for next decade :){" "}
        </Text>
        <Image source={require(imageUOC)} className="h-full w-full" />
      </View>

      {/* post likes comments */}
      <View className="h-[40]  flex-row px-1">
        {/* like button */}
        <View className="p-1 h-12  w-9">
          <ThumbsUp color="#4F4E4E" size={24} />
        </View>
        {/* liked people's name */}
        <View className="flex-1 h-[40]  flex-row items-center">
          <Text numberOfLines={1}>Pasan Phelps & 10 Others</Text>
        </View>

        {/* comments */}
        <View className="h-[40] w-[100]  flex-row items-center">
          <Text numberOfLines={1}>1000 Comments</Text>
        </View>
      </View>

      {/* like comment share */}
      <View className="h-[72]  flex-row justify-evenly items-center ">
        {/* like */}
        <View className="items-center">
          <View className="p-1 h-10  w-9">
            <ThumbsUp color="#4F4E4E" size={24} />
          </View>
          <Text>Like</Text>
        </View>

        {/* comments */}
        <View className="items-center">
          <View className="p-1 h-10  w-9">
            <MessageCircle color="#4F4E4E" size={24}/>
          </View>
          <Text>Comment</Text>
        </View>

        {/* share icon */}
        <View className="items-center">
          <View className="p-1 h-10 w-9">
            <Share2 color="#4F4E4E" size={24}/>
          </View>
          <Text>Share</Text>
        </View>
      </View>
    </View>
  );
};

export default PostCard;
