import React from "react";
import { View, Image } from "react-native";
import { Card } from "react-native-paper";
import { styles } from "../styles";
import { otherAchievementData } from "./data";
import { CardHeadingBold, RegularNormal } from "../../../../../constants";

const OtherAchievementCard: React.FC = () => {
  return (
    <Card style={styles.individualCardContainer}>
      <Card.Content>
        <CardHeadingBold>Other Achievements</CardHeadingBold>
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
            <View style={styles.listItem}>
              <RegularNormal>{otherAchievement.title}</RegularNormal>
              <RegularNormal>{otherAchievement.contest}</RegularNormal>
            </View>
          </View>
        </Card.Content>
      ))}
    </Card>
  );
};
export default OtherAchievementCard;
