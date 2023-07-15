import React from "react";
import { Text, View } from "react-native";
import { Card, Title } from "react-native-paper";
import { cstyles } from "../cstyles";
import { styles } from "./styles";

const ClubsAndSocietiesCard: React.FC = () => {
  return (
    <Card style={cstyles.container}>
      <Card.Content>
        <Title style={cstyles.title}>Clubs and Societies</Title>
      </Card.Content>
      <Card.Content>
        <View style={styles.infoContainer}>
          <Text style={[styles.listItem, styles.boldText]}>
            PR Director at Rotaract Club of UCSC
          </Text>
          <Text style={[styles.listItem, styles.light]}>2023-Present</Text>
        </View>
      </Card.Content>
      <Card.Content>
        <View style={styles.infoContainer}>
          <Text style={[styles.listItem, styles.boldText]}>
            Web team lead at IEEE Student Branch of UCSC
          </Text>
          <Text style={[styles.listItem, styles.light]}>2023-Present</Text>
        </View>
      </Card.Content>
      <Card.Content>
        <View style={styles.infoContainer}>
          <Text style={[styles.listItem, styles.boldText]}>
            Member of Gavel Club of UOC
          </Text>
          <Text style={[styles.listItem, styles.light]}>2022-2023</Text>
        </View>
      </Card.Content>
      <Card.Content>
        <View style={styles.infoContainer}>
          <Text style={[styles.listItem, styles.boldText]}>
            General Member of Rotaract Club of UCSC
          </Text>
          <Text style={[styles.listItem, styles.light]}>2022-2023</Text>
        </View>
      </Card.Content>
      <Card.Content>
        <View style={styles.infoContainer}>
          <Text style={[styles.listItem, styles.boldText]}>
            Web team member at IEEE Student Branch of UCSC
          </Text>
          <Text style={[styles.listItem, styles.light]}>2022-2023</Text>
        </View>
      </Card.Content>
    </Card>
  );
};

export default ClubsAndSocietiesCard;
