import React from "react";
import { Text, View, Image } from "react-native";
import { Card, Title } from "react-native-paper";
import { styles } from "../styles";
import { otherAchievementData } from "./data";

const OtherAchievementCard: React.FC = () => {
  return (
    <Card style={styles.individualCardContainer}>
      <Card.Content>
        <Title style={styles.cardTitle}>Other Achievements</Title>
      </Card.Content>
      {otherAchievementData.map((otherAchievement, index) => (
        <Card.Content key={index} style={styles.iconAndDetailsContainer}>
          <View>
            <Image
              style={styles.imageContainer}
              source={otherAchievement.image}
              resizeMode="contain"
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={[styles.listItem, styles.mainDetail]}>
              {otherAchievement.title}
            </Text>
            <Text style={[styles.listItem, styles.lightDetail]}>
              {otherAchievement.contest}
            </Text>
          </View>
        </Card.Content>
      ))}
    </Card>
  );
};
export default OtherAchievementCard;
