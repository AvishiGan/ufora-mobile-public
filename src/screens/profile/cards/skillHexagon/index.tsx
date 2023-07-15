import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, Button, Title, Paragraph } from "react-native-paper";
import { styles } from "./styles";
import { cstyles } from "../cstyles";

const SkillHexagonCard: React.FC = () => {
  return (
    <Card style={cstyles.container}>
      <Card.Content>
        <Title style={cstyles.title}>Skill Hexagon</Title>
      </Card.Content>
    </Card>
  );
};

export default SkillHexagonCard;
