import React from "react";
import { View, Image } from "react-native";
import { Card, Title } from "react-native-paper";
import { styles } from "../styles";
import {
  badge1,
  badge2,
  badge3,
  badge4,
  badge5,
  badge6,
  badge7,
  badge8,
} from "../../../../../../assets/images";

const DigitalBadgesCard: React.FC = () => {
  return (
    <Card style={styles.individualCardContainer}>
      <Card.Content>
        <Title style={styles.cardTitle}>Digital Badges</Title>
        <View style={styles.allBadgesContainer}>
          <Image style={styles.singleBadgeContainer} source={badge1} />
          <Image style={styles.singleBadgeContainer} source={badge2} />
          <Image style={styles.singleBadgeContainer} source={badge3} />
          <Image style={styles.singleBadgeContainer} source={badge4} />
          <Image style={styles.singleBadgeContainer} source={badge5} />
          <Image style={styles.singleBadgeContainer} source={badge6} />
          <Image style={styles.singleBadgeContainer} source={badge7} />
          <Image style={styles.singleBadgeContainer} source={badge8} />
        </View>
      </Card.Content>
    </Card>
  );
};

export default DigitalBadgesCard;
