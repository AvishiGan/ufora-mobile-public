import React from "react";
import { Text, View } from "react-native";
import { Card, Title } from "react-native-paper";
import { cstyles } from "../cstyles";
// import { cstyles } from "./cstyles";
import { achievementData } from "./data";

const AchievementCard: React.FC = () => {
  return (
    <Card style={cstyles.container}>
      <Card.Content>
        <Title style={cstyles.title}>Achievements</Title>
      </Card.Content>
      {achievementData.map((achievement, index) => (
        <Card.Content key={index}>
          <View style={cstyles.infoContainer}>
            <Text style={[cstyles.listItem, cstyles.boldText]}>
              {achievement.title}
            </Text>
            <Text style={[cstyles.listItem, cstyles.lightText]}>
              {achievement.contest}
            </Text>
          </View>
        </Card.Content>
      ))}
    </Card>
  );
};
export default AchievementCard;
