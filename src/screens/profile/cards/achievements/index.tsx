import React from "react";
import { Text, View } from "react-native";
import { Card, Title } from "react-native-paper";
import { cstyles } from "../cstyles";
import { styles } from "./styles";
import { achievementData } from "./data";

const AchievementCard: React.FC = () => {
  return (
    <Card style={cstyles.container}>
      <Card.Content>
        <Title style={cstyles.title}>Achievements</Title>
      </Card.Content>
      {achievementData.map((achievement, index) => (
        <Card.Content key={index}>
          <View style={styles.infoContainer}>
            <Text style={[styles.listItem, styles.boldText]}>
              {achievement.title}
            </Text>
            <Text style={[styles.listItem, styles.light]}>
              {achievement.contest}
            </Text>
          </View>
        </Card.Content>
      ))}
    </Card>
  );
};
export default AchievementCard;
