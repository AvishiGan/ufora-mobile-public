import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, Button, Title, Paragraph } from "react-native-paper";
import { cstyles } from "../cstyles";

const IntroCard: React.FC = () => {
  return (
    <Card style={cstyles.container}>
      <Card.Content>
        <Title style={cstyles.title}>Intro</Title>
      </Card.Content>
      <Card.Content>
        <Paragraph style={cstyles.normalText}>
          Hey I am Isuru, an undergrad at UCSC. I love designing and creating
          websites and posters
          <Text style={cstyles.seeMore}>... see more</Text>
        </Paragraph>
      </Card.Content>
    </Card>
  );
};

export default IntroCard;
