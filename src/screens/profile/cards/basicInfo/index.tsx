import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, Button, Title, Paragraph } from "react-native-paper";
import { cstyles } from "../cstyles";
import { styles } from "./styles";
import { basicData } from "./data";

const BasicInfoCard: React.FC = () => {
  return (
    <Card style={cstyles.container}>
      <Card.Content>
        <Title style={cstyles.title}>Basic Info</Title>
      </Card.Content>
      {basicData.map((basicInfo, index) => (
        <Card.Content key={index}>
          <View style={styles.infoContainer}>
            <Text style={styles.listItem}>{basicInfo.birthday}</Text>
            <Text style={styles.listItem}>{basicInfo.mobileNo}</Text>
            <Text style={styles.listItem}>{basicInfo.email}</Text>
          </View>
        </Card.Content>
      ))}
    </Card>
  );
};

export default BasicInfoCard;
