import React from "react";
import { View, StyleSheet, Platform, KeyboardAvoidingView, SafeAreaView, ScrollView } from "react-native";
import { RichEditor, RichToolbar } from "react-native-pell-rich-editor";

const AddBlog = () => {
  const richText = React.useRef(null); // Initialize with null instead of undefined

  const handleEditorInitialized = () => {
    // You can set initial content here (optional)
    // richText.current?.setContentHTML('<p>Hello, this is the initial content!</p>');
  };

  const handleAddImage = () => {
    // Implement adding an image from your device or a URL
    // Example:
    // richText.current?.insertImage('https://example.com/image.jpg', 'alt text');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <RichEditor
            ref={richText}
            style={styles.editor}
            initialContentHTML=""
            editorInitializedCallback={handleEditorInitialized}
          />
        </ScrollView>
        <RichToolbar
          style={styles.toolbar}
          getEditor={() => richText.current}
          onPressAddImage={handleAddImage}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
  },
  scrollContainer: {
    padding: 10,
  },
  editor: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    minHeight: 200,
    padding: 10,
  },
  toolbar: {
    backgroundColor: "#FFF"
  }
});

export default AddBlog;
