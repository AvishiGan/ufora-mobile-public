import React from "react";
import { Text, View } from "react-native";
import { Card, Title } from "react-native-paper";
import { cstyles } from "../cstyles";
import { styles } from "./styles";

const EducationCard: React.FC = () => {
  return (
    <Card style={cstyles.container}>
      <Card.Content>
        <Title style={cstyles.title}>Education</Title>
      </Card.Content>
      <Card.Content>
        <View style={styles.infoContainer}>
          <Text style={[styles.listItem, styles.boldText]}>
            Computer Science at University of Colombo
          </Text>
          <Text style={[styles.listItem, styles.italicText]}>
            University of Colombo School of Computing
          </Text>
          <Text style={[styles.listItem, styles.light]}>2021-Present</Text>
        </View>
      </Card.Content>
      <Card.Content>
        <View style={styles.infoContainer}>
          <Text style={[styles.listItem, styles.boldText]}>
            Student at Royal College, Colombo
          </Text>
          <Text style={[styles.listItem, styles.light]}>2005-2019</Text>
        </View>
      </Card.Content>
    </Card>
  );
};

export default EducationCard;
