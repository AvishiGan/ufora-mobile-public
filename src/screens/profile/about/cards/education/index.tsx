import React from "react";
import { Text, View, Image } from "react-native";
import { Card, Title } from "react-native-paper";
import { styles } from "../styles";
import { educationData } from "./data";

const EducationCard: React.FC = () => {
  return (
    <Card style={styles.individualCardContainer}>
      <Card.Content>
        <Title style={styles.cardTitle}>Education</Title>
      </Card.Content>
      {educationData.map((education, index) => (
        <Card.Content key={index} style={styles.iconAndDetailsContainer}>
          <View>
            <Image
              style={styles.imageContainer}
              source={education.image}
              resizeMode="contain"
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={[styles.listItem, styles.mainDetail]}>
              {education.general}
            </Text>
            <Text style={[styles.listItem, styles.italicDetail]}>
              {education.university}
            </Text>
            <Text style={[styles.listItem, styles.lightDetail]}>
              {education.period}
            </Text>
          </View>
        </Card.Content>
      ))}
    </Card>
  );
};

export default EducationCard;
