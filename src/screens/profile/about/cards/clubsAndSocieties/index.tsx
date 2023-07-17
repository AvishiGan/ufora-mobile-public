import React from "react";
import { Text, View } from "react-native";
import { Card, Title } from "react-native-paper";
import { styles } from "../styles";
import { clubData } from "./data";

const ClubsAndSocietiesCard: React.FC = () => {
  return (
    <Card style={styles.individualCardContainer}>
      <Card.Content>
        <Title style={styles.cardTitle}>Clubs and Societies</Title>
      </Card.Content>
      {clubData.map((club, index) => (
        <Card.Content key={index}>
          <View style={styles.infoContainer}>
            <Text style={[styles.listItem, styles.boldText]}>{club.title}</Text>
            <Text style={[styles.listItem, styles.lightText]}>
              {club.period}
            </Text>
          </View>
        </Card.Content>
      ))}
    </Card>
  );
};

export default ClubsAndSocietiesCard;
