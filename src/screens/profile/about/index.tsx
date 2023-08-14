import React from "react";
import { ScrollView, View } from "react-native";
import { styles } from "./cards/styles";
import {
  IntroCard,
  BasicInfoCard,
  EducationCard,
  DigitalBadgeCard,
  SkillHexagonCard,
  ClubCard,
  AchievementCard,
  OtherAchievementCard,
} from "./cards/AllCards";
import { SafeAreaView } from "react-native-safe-area-context";

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

const ProfileAboutSection: React.FC = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.allCardsContainer}>
          {cardComponents.map((CardComponent, index) => (
            <CardComponent key={index} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileAboutSection;
