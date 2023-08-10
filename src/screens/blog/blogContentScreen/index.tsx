import React from "react";
import { Text, SafeAreaView, ScrollView } from "react-native";

const BlogContent = () => {
  return (
    <SafeAreaView style = {{flex: 1, gap: 25}}>
      <ScrollView>
        <Text>Hello</Text>
      </ScrollView>
    </SafeAreaView>
  );  
}

export default BlogContent;