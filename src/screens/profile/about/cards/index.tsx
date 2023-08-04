import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import {
  IntroCard,
  BasicInfoCard,
  EducationCard,
  DigitalBadgeCard,
  SkillHexagonCard,
  ClubCard,
  AchievementCard,
  OtherAchievementCard,
} from "./allCards";

const cardComponents = [
  IntroCard,
  BasicInfoCard,
  EducationCard,
  DigitalBadgeCard,
  SkillHexagonCard,
  ClubCard,
  AchievementCard,
  OtherAchievementCard,
];

const AboutCardSection: React.FC = () => {
  return (
    <View style={styles.allCardsContainer}>
      {cardComponents.map((CardComponent, index) => (
        <CardComponent key={index} />
      ))}
    </View>
  );
};

export default AboutCardSection;
