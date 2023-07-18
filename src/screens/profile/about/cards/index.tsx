import React from "react";
import { View } from "react-native";
import { cardComponents } from "./data";

const AboutCardSection: React.FC = () => {
  return (
    <View>
      {cardComponents.map((CardComponent, index) => (
        <CardComponent key={index} />
      ))}
    </View>
  );
};

export default AboutCardSection;
