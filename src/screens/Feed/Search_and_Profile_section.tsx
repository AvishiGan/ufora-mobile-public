import { View, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

// dummy data
const imageLink: string = "../../assets/profileLo.jpg";

const Search_and_Profile_section = () => {
  return (
    <View style={styles.container}>
      {/* profile picture */}
      <TouchableOpacity style={styles.profilePicture}>
        <Image
          source={require(imageLink)}
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
    justifyContent: "space-between",
    width: 48,
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
    borderRadius: 9999,
    borderColor: "black",
    borderWidth: 0.5,
  },
});

export default Search_and_Profile_section;
