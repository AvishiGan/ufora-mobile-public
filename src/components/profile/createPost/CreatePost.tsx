import React, { useState } from "react";
import { View, TextInput, Alert } from "react-native";
import { styles } from "../styles";
import { TopBar } from "../..";
import { COLORS } from "../../../constants";
import CreatePostHeader from "./Header";
import { profileData } from "../../../screens/profile/data";
import { AddPhotoVideoButton, SharePostButton } from "../buttons";
import { SafeAreaView } from "react-native-safe-area-context";
import Post from "../../../model/PostModel";
import { createPostRequest } from "../../../services/PostService";
import * as DocumentPicker from "expo-document-picker";
import { uploadFile } from "../../../../src/services/imagekit";

const CreatePost = () => {
  const [caption, setCaption] = useState("");
  const [selectedMedia, setSelectedMedia] = useState<string | undefined>(
    undefined
  );

  const handleMediaSelection = async () => {
    try {
      var result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
      });

      uploadFileToImagekit(result);
    } catch (error: any) {
      if (error.type === "cancel") {
        Alert.alert("User cancelled the picker");
      } else {
        throw error;
      }
    }
  };

  async function uploadFileToImagekit(fileData: any) {
    try {
      const uploadedFile = await uploadFile(fileData);
      setSelectedMedia(uploadedFile.url);
    } catch (error) {
      console.log("Error uploading file to imagekit", error);
    }
  }

  const handleSharePostButtonClick = async () => {
    console.log("Button pressed! Caption:", caption);

    try {
      if (!caption) throw new Error("Caption is empty");

      const post: Post = {
        caption,
        content: selectedMedia || "",
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
