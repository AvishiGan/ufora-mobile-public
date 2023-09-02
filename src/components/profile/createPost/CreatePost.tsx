import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS } from "../../../constants";
import { FileData, Post } from "../../../model";
import { createPostRequest } from "../../../services/PostService";
import { uploadMediaToImageKit } from "../../../services/imagekit";
import { selectMediaFromDevice } from "../../../util/fileUtils";

import { TopBar } from "../..";
import { profileData } from "../../../screens/profile/data";
import { AddPhotoVideoButton, SharePostButton } from "../buttons";
import { styles } from "../styles";
import CreatePostHeader from "./Header";

const CreatePost = () => {
  const [caption, setCaption] = useState("");
  const [selectedMedia, setSelectedMedia] = useState<FileData | null>(null);

  const handleMediaSelection = async () => {
    try {
      const fileData = await selectMediaFromDevice(1);
      if (fileData.length) setSelectedMedia(fileData[0]);
    } catch (error) {
      console.log("Error selecting media", error);
    }
  };

  const uploadFileToImageKit = async (): Promise<string> => {
    if (!selectedMedia) return Promise.reject("No media selected");
    try {
      const imageKitResponse = await uploadMediaToImageKit(selectedMedia);
      return Promise.resolve(imageKitResponse.url);
    } catch (error) {
      console.log("Error uploading file to ImageKit", error);
      return Promise.reject(error);
    }
  };

  const handleSharePostButtonClick = async () => {
    console.log("Button pressed! Caption:", caption);

    try {
      if (!caption) throw new Error("Caption is empty");

      const imageUrl = await uploadFileToImageKit();

      const post: Post = {
        caption,
        content: imageUrl,
        access_level: "public",
      };
      await createPostRequest(post);
      alert("Created post");
    } catch (error) {
      alert("Failed to create post" + error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Top bar */}
      <TopBar titleBarName="Create Post" />
      {/* Create post header */}
      <CreatePostHeader data={profileData} />
      {/* Input field */}
      <TextInput
        onChangeText={(val) => setCaption(val)} // Update the caption state
        value={caption} // Bind the value of the input field to the caption state
        placeholder={`Hey ${profileData.firstName}, What’s special today?`}
        placeholderTextColor={COLORS.placeHolder}
        style={[styles.inputField]}
        multiline={true}
      />
      {/* Buttons */}
      <View style={styles.twoButtonsContainer}>
        <AddPhotoVideoButton onPress={handleMediaSelection} />
        <SharePostButton onPress={handleSharePostButtonClick} />
      </View>
    </SafeAreaView>
  );
};

export default CreatePost;
