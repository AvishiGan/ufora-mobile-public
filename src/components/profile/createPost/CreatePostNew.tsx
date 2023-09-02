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
import { FileData } from "../../../model";
import * as ImagePicker from "expo-image-picker";

const CreatePost = () => {
  const [caption, setCaption] = useState("");
  const [selectedMedia, setSelectedMedia] = useState<FileData | null>(null);

  //   const handleMediaSelection = async () => {
  //     try {
  //       var result = (await DocumentPicker.getDocumentAsync({
  //         type: "*/*",
  //       })) as any;
  //       const mediaFileData = new FileData(result);

  //       if (mediaFileData.uri && mediaFileData.name)
  //         setSelectedMedia(mediaFileData);
  //     } catch (error: any) {
  //       if (error.type === "cancel") {
  //         Alert.alert("User cancelled the picker");
  //       } else {
  //         throw error;
  //       }
  //     }
  //   };

  const handleMediaSelection = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== "granted") {
        console.log("Permission denied");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.8,
      });

      const mediaFileData = new FileData(result);

      // if (!result.canceled) {
      //   console.log(result.assets[0].uri);
      //   setSelectedMedia(result.assets[0].uri);
      // }

      if (mediaFileData.uri && mediaFileData.name)
        setSelectedMedia(mediaFileData);
    } catch (error: any) {
      if (error.type === "cancel") {
        Alert.alert("User cancelled the picker");
      } else {
        throw error;
      }
    }
  };

  const uploadFileToImageKit = async () => {
    if (!selectedMedia) return Promise.reject("No media selected");
    try {
      const uploadedFile = await uploadFile(selectedMedia);
      return Promise.resolve(uploadedFile);
    } catch (error) {
      console.log("Error uploading file to ImageKit", error);
      return Promise.reject(error);
    }
  };

  const handleSharePostButtonClick = async () => {
    console.log("Button pressed! Caption:", caption);

    try {
      if (!caption) throw new Error("Caption is empty");

      const result = await uploadFileToImageKit();

      const post: Post = {
        caption,
        content: "imagekit.url",
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
