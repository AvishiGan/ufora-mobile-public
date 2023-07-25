import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";

// dummy data
const imageLink: string = "../../assets/profileLo.jpg";

const Story_section = () => {
  return (
    <View className="h-[100]  flex-row items-center py-1">
      <ScrollView horizontal className="">
        <TouchableOpacity className="items-center w-16 mx-1">
          <View className=" w-16 h-16 content-center items-center ">
            <Image
              source={require(imageLink)}
              className="h-full w-full rounded-full"
            />
          </View>
          <Text numberOfLines={1}>Pasan</Text>
        </TouchableOpacity>

        <TouchableOpacity className="items-center w-16 mx-1">
          <View className=" w-16 h-16 content-center items-center ">
            <Image
              source={require(imageLink)}
              className="h-full w-full rounded-full"
            />
          </View>
          <Text numberOfLines={1}>Pasan</Text>
        </TouchableOpacity>


      </ScrollView>
    </View>
  );
};

export default Story_section;
