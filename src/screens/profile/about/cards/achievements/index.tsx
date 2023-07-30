import React from "react";
import { View, Image } from "react-native";
import { Card } from "react-native-paper";
import { styles } from "../styles";
import { achievementData } from "./data";
import { CardHeadingBold, RegularNormal } from "../../../../../constants";

const AchievementCard: React.FC = () => {
  return (
    <Card style={styles.individualCardContainer}>
      <Card.Content>
        <CardHeadingBold>Achievements</CardHeadingBold>
      </Card.Content>
      <Card.Content style={styles.contentWithGap}>
        {achievementData.map((achievement, index) => (
          <Card.Content key={index} style={styles.iconAndDetailsContainer}>
            <View>
              <Image
                style={styles.imageContainer}
                source={achievement.image}
                resizeMode="contain"
              />
            </View>
            <View style={styles.detailsContainer}>
              <RegularNormal>{achievement.title}</RegularNormal>
              <RegularNormal>{achievement.contest}</RegularNormal>
            </View>
          </Card.Content>
        ))}
      </Card.Content>
    </Card>
  );
};

export default AchievementCard;
