import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, Button, Title, Paragraph } from "react-native-paper";
import { styles } from "../styles";

const SkillHexagonCard: React.FC = () => {
  return (
    <Card style={styles.container}>
      <Card.Content>
        <Title style={styles.title}>Skill Hexagon</Title>
      </Card.Content>
    </Card>
  );
};

export default SkillHexagonCard;
