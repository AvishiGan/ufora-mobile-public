import React from "react";
import { Text, View } from "react-native";
import { Card, Title } from "react-native-paper";
import { cstyles } from "../cstyles";
import { clubData } from "./data";

const ClubsAndSocietiesCard: React.FC = () => {
  return (
    <Card style={cstyles.container}>
      <Card.Content>
        <Title style={cstyles.title}>Clubs and Societies</Title>
      </Card.Content>
      {clubData.map((club, index) => (
        <Card.Content key={index}>
          <View style={cstyles.infoContainer}>
            <Text style={[cstyles.listItem, cstyles.boldText]}>
              {club.title}
            </Text>
            <Text style={[cstyles.listItem, cstyles.lightText]}>{club.period}</Text>
          </View>
        </Card.Content>
      ))}
    </Card>
  );
};

export default ClubsAndSocietiesCard;
