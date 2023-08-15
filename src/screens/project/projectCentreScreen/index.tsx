import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { UpperBody, Projects } from "../../../components";

interface ProjectCentreProps {
  navigation: any;
}

const ProjectCentre: React.FC<ProjectCentreProps> = ({ navigation }) => {
  return (
    <SafeAreaView style = {{flex: 1, gap: 25}}>
        <UpperBody navigation={navigation} route={"ProjectCentre"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Projects navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );  
}

export default ProjectCentre;
