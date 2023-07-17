import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, Button, Title, Paragraph } from "react-native-paper";
import { styles } from "../styles";

const DigitalBadgesCard: React.FC = () => {
  return (
    <Card style={styles.individualCardContainer}>
      <Card.Content>
        <Title style={styles.cardTitle}>Digital Badges</Title>
      </Card.Content>
    </Card>
  );
};

export default DigitalBadgesCard;
