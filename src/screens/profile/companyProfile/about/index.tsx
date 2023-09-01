import React from "react";
import { ScrollView, View } from "react-native";
import { styles } from "./cards/styles";
import { IntroCard, BasicInfoCard } from "./cards/AllCards";
import { SafeAreaView } from "react-native-safe-area-context";

const cardComponents = [IntroCard, BasicInfoCard];

const CompanyProfileAboutSection: React.FC = () => {
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

export default CompanyProfileAboutSection;
