import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { styles } from "../styles";
import PropTypes from "prop-types";
import { TopBar } from "../../../components";
import { COLORS, PageTitleSemibold } from "../../../constants";
import CreatePostHeader from "./header";
import { profileData } from "../../../screens/profile/data";
import { AddPhotoVideoButton, SharePostButton } from "../buttons";
import { SafeAreaView } from "react-native-safe-area-context";

const CreatePost = () => {
  const [postText, setPostText] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {/* Top bar */}
        <TopBar titleBarName="Create Post" />
        {/* Create post header */}
        <CreatePostHeader data={profileData} />
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
          <AddPhotoVideoButton onPress={handleButtonPress} />
          <SharePostButton onPress={handleButtonPress} />
        </View>
      </View>
    </SafeAreaView>
  );
};

CreatePost.propTypes = {
  postImage: PropTypes.any.isRequired,
};

const handleButtonPress = () => {
  console.log("Button pressed!");
};

export default CreatePost;
