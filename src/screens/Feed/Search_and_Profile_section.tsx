import { View, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

// dummy data
// const imageLink: string = "?";

const Search_and_Profile_section = () => {
  return (
    <View style={styles.container}>
      {/* profile picture */}
      <TouchableOpacity style={styles.profilePicture}>
        <Image
          source={require("../../../assets/images/myProfile/common/profile-picture.png")}
          style={styles.image}
        />
      </TouchableOpacity>
      {/* input text */}
      <TouchableOpacity style={styles.inputContainer}>
        <TextInput
          editable={false}
          placeholder="Hey Isuru, What's special Today?"
          keyboardType="default"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 100,
    gap: 5
  },
  profilePicture: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 9999,
  },
  inputContainer: {
    flex: 1,
    padding: 12,
    borderRadius: 15,
    borderColor: "black",
    borderWidth: 0.5,
    width: 300
  },
});

export default Search_and_Profile_section;
