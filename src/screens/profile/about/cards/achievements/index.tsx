import React from "react";
import { Text, View, Image } from "react-native";
import { Card, Title } from "react-native-paper";
import { styles } from "../styles";
import { achievementData } from "./data";

const AchievementCard: React.FC = () => {
  return (
    <Card style={styles.individualCardContainer}>
      <Card.Content>
        <Title style={styles.cardTitle}>Achievements</Title>
      </Card.Content>
      {achievementData.map((achievement, index) => (
        <Card.Content key={index} style={styles.iconAndDetailsContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageContainer}
              source={achievement.image}
              // resizeMode="cover"
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={[styles.listItem, styles.mainDetail]}>
              {achievement.title}
            </Text>
            <Text style={[styles.listItem, styles.lightDetail]}>
              {achievement.contest}
            </Text>
          </View>
        </Card.Content>
      ))}
    </Card>
  );
};

export default AchievementCard;
