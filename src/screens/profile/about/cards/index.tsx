import React from "react";
import { View } from "react-native";
import { cardComponents } from "./data";
import { styles } from "./styles";

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
