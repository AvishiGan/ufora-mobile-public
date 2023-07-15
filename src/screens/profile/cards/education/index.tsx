import React from "react";
import { Text, View } from "react-native";
import { Card, Title } from "react-native-paper";
import { cstyles } from "../cstyles";
import { styles } from "./styles";
import { educationData } from "./educationData";

const EducationCard: React.FC = () => {
  return (
    <Card style={cstyles.container}>
      <Card.Content>
        <Title style={cstyles.title}>Clubs and Societies</Title>
      </Card.Content>
      {educationData.map((education, index) => (
        <Card.Content key={index}>
          <View style={styles.infoContainer}>
            <Text style={[styles.listItem, styles.boldText]}>
              {education.degree}
            </Text>
            <Text style={[styles.listItem, styles.italicText]}>
              {education.university}
            </Text>
            <Text style={[styles.listItem, styles.boldText]}>
              {education.school}
            </Text>
            <Text style={[styles.listItem, styles.light]}>
              {education.period}
            </Text>
          </View>
        </Card.Content>
      ))}
    </Card>
  );
};

export default EducationCard;
