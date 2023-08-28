import React, { useState } from "react";
import { View, TextInput, Alert } from "react-native";
import { styles } from "../styles";
import { TopBar } from "../..";
import { COLORS } from "../../../constants";
import CreatePostHeader from "./Header";
import { profileData } from "../../../screens/profile/data";
import { AddPhotoVideoButton, SharePostButton } from "../buttons";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import Post from "../../../model/PostModel";
import { createPostRequest } from "../../../services/PostService";

import getImagekitUrlFromSrc from "../../../../src/services/imagekit";

const CreatePost = () => {
  const [caption, setCaption] = useState("");
  const [selectedMediaURL, setSelectedMediaURL] = useState<string | undefined>(
    undefined
  );

  const handleMediaSelection = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

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

    if (!result.canceled) {
      // console.log(result.assets[0].uri);
      // setSelectedMedia(result.assets[0].uri);
      /**
       * Transform the image URL to ImageKit URL
       */
      const transformedImageUrl = getImagekitUrlFromSrc(
        result.assets[0].uri,
        []
      );
      setSelectedMediaURL(transformedImageUrl);
      Alert.alert("Image Uploaded", "1 item has been uploaded");
    }
  };

  const handleSharePostButtonClick = async () => {
    console.log("Button pressed! Caption:", caption);

    try {
      if (!caption) throw new Error("Caption is empty");

      const post: Post = {
        caption,
        content: selectedMediaURL || "",
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
