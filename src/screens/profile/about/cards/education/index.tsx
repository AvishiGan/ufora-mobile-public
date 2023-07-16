import React from "react";
import { Text, View } from "react-native";
import { Card, Title } from "react-native-paper";
import { cstyles } from "../cstyles";
import { educationData } from "./data";

const EducationCard: React.FC = () => {
  return (
    <Card style={cstyles.container}>
      <Card.Content>
        <Title style={cstyles.title}>Education</Title>
      </Card.Content>
      {educationData.map((education, index) => (
        <Card.Content key={index}>
          <View style={cstyles.infoContainer}>
            <Text style={[cstyles.listItem, cstyles.boldText]}>
              {education.general}
            </Text>
            <Text style={[cstyles.listItem, cstyles.italicText]}>
              {education.university}
            </Text>
            <Text style={[cstyles.listItem, cstyles.lightText]}>
              {education.period}
            </Text>
          </View>
        </Card.Content>
      ))}
    </Card>
  );
};

export default EducationCard;
