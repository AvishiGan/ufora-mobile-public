import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { UpperBody, FeaturedArticles } from "../../../components";

interface BlogCentreProps {
  navigation: any;
}

const BlogCentre: React.FC<BlogCentreProps> = ({ navigation }) => {
  return (
    <SafeAreaView style = {{flex: 1, gap: 25}}>
        <UpperBody navigation={navigation} />
      <ScrollView>
        <FeaturedArticles navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );  
}

export default BlogCentre;
