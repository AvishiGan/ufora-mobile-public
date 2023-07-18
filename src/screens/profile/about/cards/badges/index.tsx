import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, Button, Title, Paragraph } from "react-native-paper";
import { styles } from "../styles";

const DigitalBadgesCard: React.FC = () => {
  return (
    <Card style={styles.container}>
      <Card.Content>
        <Title style={styles.title}>Digital Badges</Title>
      </Card.Content>
    </Card>
  );
};

export default DigitalBadgesCard;
