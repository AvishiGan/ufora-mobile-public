import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { UpperBody, BlogArticles } from "../../../components";

interface BlogCentreProps {
  navigation: any;
}

const BlogCentre: React.FC<BlogCentreProps> = ({ navigation }) => {
  return (
    <SafeAreaView style = {{flex: 1, gap: 25}}>
        <UpperBody navigation={navigation} route={"BlogCentre"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <BlogArticles navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );  
}

export default BlogCentre;
