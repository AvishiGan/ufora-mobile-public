import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import IntroCard from "./src/screens/profile/cards/intro/index";
import BasicInfoCard from "./src/screens/profile/cards/basicInfo/index";
import EducationCard from "./src/screens/profile/cards/education/index";
import DigitalBadgeCard from "./src/screens/profile/cards/badges/index";
import SkillHexagonCard from "./src/screens/profile/cards/skillHexagon/index";
import ClubCard from "./src/screens/profile/cards/clubsAndSocieties/index";
import AchievementCard from "./src/screens/profile/cards/achievements/index";
import OtherAchievementCard from "./src/screens/profile/cards/otherAchievements/index";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <IntroCard />
      <BasicInfoCard />
      <EducationCard />
      <DigitalBadgeCard />
      <SkillHexagonCard />
      <ClubCard />
      <AchievementCard />
      <OtherAchievementCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});