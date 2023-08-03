import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from "../../constants";
import { UpperBody, FeaturedArticles } from "../../components";

const BlogCentre = () => {
  return (
    <SafeAreaView style = {{flex: 1, backgroundColor: "#F2F2F2", gap: 25}}>
        <UpperBody />
      <ScrollView>
        <FeaturedArticles />
      </ScrollView>
    </SafeAreaView>
  );  
}

export default BlogCentre;
