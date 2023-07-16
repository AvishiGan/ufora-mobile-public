import React from "react";
import { Text, View } from "react-native";
import { Card, Title } from "react-native-paper";
import { cstyles } from "../cstyles";
import { otherAchievementData } from "./data";

const otherAchievementCard: React.FC = () => {
  return (
    <Card style={cstyles.container}>
      <Card.Content>
        <Title style={cstyles.title}>Other Achievements</Title>
      </Card.Content>
      {otherAchievementData.map((otherAchievement, index) => (
        <Card.Content key={index}>
          <View style={cstyles.infoContainer}>
            <Text style={[cstyles.listItem, cstyles.boldText]}>
              {otherAchievement.title}
            </Text>
            <Text style={[cstyles.listItem, cstyles.lightText]}>
              {otherAchievement.contest}
            </Text>
          </View>
        </Card.Content>
      ))}
    </Card>
  );
};
export default otherAchievementCard;
