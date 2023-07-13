import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, Button, Title, Paragraph } from "react-native-paper";
import { styles } from "./styles";

const BasicInfoCard: React.FC = () => {
  return (
    <Card style={styles.container}>
      <Card.Content>
        <Title>Basic Info</Title>
      </Card.Content>
      <Card.Content>
        <View>
          <Text style={styles.listItem}>28 June 2022</Text>
          <Text style={styles.listItem}>+94 77 123 4567</Text>
          <Text style={styles.listItem}>isurur@gmail.com</Text>
        </View>
      </Card.Content>
    </Card>
  );
};

export default BasicInfoCard;
