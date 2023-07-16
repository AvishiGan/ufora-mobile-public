import React from "react";
import { Text, View } from "react-native";
import { Card, Title } from "react-native-paper";
import { styles } from "../styles";
import { otherAchievementData } from "./data";

const otherAchievementCard: React.FC = () => {
  return (
    <Card style={styles.container}>
      <Card.Content>
        <Title style={styles.title}>Other Achievements</Title>
      </Card.Content>
      {otherAchievementData.map((otherAchievement, index) => (
        <Card.Content key={index}>
          <View style={styles.infoContainer}>
            <Text style={[styles.listItem, styles.boldText]}>
              {otherAchievement.title}
            </Text>
            <Text style={[styles.listItem, styles.lightText]}>
              {otherAchievement.contest}
            </Text>
          </View>
        </Card.Content>
      ))}
    </Card>
  );
};
export default otherAchievementCard;
