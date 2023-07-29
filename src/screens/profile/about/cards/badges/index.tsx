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

const badgeImages = [
  badge1,
  badge2,
  badge3,
  badge4,
  badge5,
  badge6,
  badge7,
  badge8,
];

const DigitalBadgesCard: React.FC = () => {
  return (
    <Card style={styles.individualCardContainer}>
      <Card.Content>
        <Title style={styles.cardTitle}>Digital Badges</Title>
        <View style={styles.allBadgesContainer}>
          {badgeImages.map((badge, index) => (
            <Image
              key={index}
              style={styles.singleBadgeContainer}
              source={badge}
              resizeMode="contain"
            />
          ))}
        </View>
      </Card.Content>
    </Card>
  );
};

export default DigitalBadgesCard;
