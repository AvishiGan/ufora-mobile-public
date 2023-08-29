import React from "react";
import { ScrollView, View } from "react-native";
import { styles } from "../../profile/about/cards/styles";
import {
  IntroCard,
  BasicInfoCard,
  DigitalBadgeCard,
  BoardofOfficials,
  SkillHexagonCard,
  ClubCard,
  AchievementCard,
  OtherAchievementCard,
} from "../../clubView/clubProfile/cards/AllCards";
import { SafeAreaView } from "react-native-safe-area-context";

const cardComponents = [
  IntroCard,
  BasicInfoCard,
  BoardofOfficials,
  DigitalBadgeCard,
  SkillHexagonCard,
  ClubCard,
  AchievementCard,
  OtherAchievementCard,
];

const AboutClub: React.FC = () => {
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

export default AboutClub;
