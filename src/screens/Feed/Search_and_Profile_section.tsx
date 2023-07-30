import { View, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";

// dummy data
const imageLink: string = "../../assets/profileLo.jpg";

const Search_and_Profile_section = () => {
  return (
    <View className="flex-row space-x-2">
      {/* profile picture */}
      <TouchableOpacity className=" w-12 h-12 content-center items-center ">
        <Image
          source={require(imageLink)}
          className="h-full w-full rounded-full"
        />
      </TouchableOpacity>
      {/* input text */}
      <TouchableOpacity className="flex-1 p-3 rounded-xl border-black border-0.5">
        <TextInput
          editable={false}
          placeholder="Hey Isuru, What's special Today?"
          keyboardType="default"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Search_and_Profile_section;
