import React from "react";
import { ScrollView, View } from "react-native";
import { styles } from "../../profile/myProfile/about/cards/styles";
import {
  IntroCard,
  BasicInfoCard,
  BoardofOfficials,
} from "../../clubView/clubProfile/cards/AllCards";
import { SafeAreaView } from "react-native-safe-area-context";

const cardComponents = [
  IntroCard,
  BasicInfoCard,
  BoardofOfficials,
];

const AboutClub: React.FC = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.allCardsContainer}>
          {cardComponents.map((CardComponent, index) => (
            <CardComponent showTitle={true} key={index} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutClub;
