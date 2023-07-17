import React from "react";
import { Text, View } from "react-native";
import { Card, Title } from "react-native-paper";
import { styles } from "../styles";
// import { styles } from "./styles";
import { achievementData } from "./data";

const AchievementCard: React.FC = () => {
  return (
    <Card style={styles.individualCardContainer}>
      <Card.Content>
        <Title style={styles.cardTitle}>Achievements</Title>
      </Card.Content>
      {achievementData.map((achievement, index) => (
        <Card.Content key={index}>
          <View style={styles.infoContainer}>
            <Text style={[styles.listItem, styles.boldText]}>
              {achievement.title}
            </Text>
            <Text style={[styles.listItem, styles.lightText]}>
              {achievement.contest}
            </Text>
          </View>
        </Card.Content>
      ))}
    </Card>
  );
};
export default AchievementCard;
