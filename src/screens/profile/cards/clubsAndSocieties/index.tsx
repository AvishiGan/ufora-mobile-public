import React from "react";
import { Text, View } from "react-native";
import { Card, Title } from "react-native-paper";
import { cstyles } from "../cstyles";
import { styles } from "./styles";
import { clubData } from "./clubData";

const ClubsAndSocietiesCard: React.FC = () => {
  return (
    <Card style={cstyles.container}>
      <Card.Content>
        <Title style={cstyles.title}>Clubs and Societies</Title>
      </Card.Content>
      {clubData.map((club, index) => (
        <Card.Content key={index}>
          <View style={styles.infoContainer}>
            <Text style={[styles.listItem, styles.boldText]}>{club.title}</Text>
            <Text style={[styles.listItem, styles.light]}>{club.period}</Text>
          </View>
        </Card.Content>
      ))}
    </Card>
  );
};

export default ClubsAndSocietiesCard;
