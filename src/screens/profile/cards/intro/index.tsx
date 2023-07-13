import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, Button, Title, Paragraph } from "react-native-paper";
import { styles } from "../styles";

const IntroCard: React.FC = () => {
  return (
    <Card style={styles.container}>
      <Card.Content>
        <Title>Intro</Title>
      </Card.Content>
      <Card.Content>
        <Paragraph>
          Hey I am Isuru, an undergrad at UCSC. I love designing and creating
          websites and posters... see more
        </Paragraph>
      </Card.Content>
    </Card>
  );
};

export default IntroCard;
