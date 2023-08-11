import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { styles } from "../styles";
import PropTypes from "prop-types";
import { TopBar } from "../..";
import { COLORS } from "../../../constants";
import CreatePostHeader from "./Header";
import { profileData } from "../../../screens/profile/data";
import { AddPhotoVideoButton, SharePostButton } from "../buttons";
import { SafeAreaView } from "react-native-safe-area-context";
import DropdownPost from "../DropdownPost";

const CreatePost = () => {
  const [postText, setPostText] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {/* Top bar */}
        <TopBar titleBarName="Create Post" />
        <View style={styles.headerAccessLevelContainer} />
        {/* Create post header */}
        <CreatePostHeader data={profileData} />
        <DropdownPost
          iconType="users"
          value="Friends"
          onChangeText={handleDropdownChange}
        />
      </View>
      {/* Input field */}
      <TextInput
        value={postText}
        onChangeText={setPostText}
        placeholder={`Hey ${profileData.firstName}, What’s special today?`}
        placeholderTextColor={COLORS.placeHolder}
        style={[styles.inputField]}
        multiline={true} // Enable multiline
      />
      {/* Buttons */}
      <View style={styles.twoButtonsContainer}>
        <AddPhotoVideoButton onPress={handleMediaSelection} />
        <SharePostButton onPress={handleButtonPress} />
      </View>
    </SafeAreaView>
  );
};

const handleDropdownChange = () => {
  console.log("Dropdown changed!");
};

CreatePost.propTypes = {
  postImage: PropTypes.any.isRequired,
};

const handleMediaSelection = async () => {
  console.log("Button pressed!");
};

const handleButtonPress = () => {
  console.log("Button pressed!");
};

export default CreatePost;
