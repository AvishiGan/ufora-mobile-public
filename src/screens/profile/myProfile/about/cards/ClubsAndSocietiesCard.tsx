import React from "react";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import { styles } from "./styles";
import { clubData } from "./data";
import {
  CardHeadingBold,
  RegularNormal,
  RegularSmall,
} from "../../../../../constants";

const ClubsAndSocietiesCard: React.FC = () => {
  return (
    <Card style={styles.individualCardContainer}>
      <Card.Content>
        <CardHeadingBold>Clubs and Societies</CardHeadingBold>
      </Card.Content>
      <Card.Content style={styles.contentWithGap}>
        {clubData.map((club, index) => (
          <Card.Content key={index} style={styles.iconAndDetailsContainer}>
            <View>
              <Image
                style={styles.imageContainer}
                source={club.image}
                resizeMode="contain"
              />
            </View>
            <View style={styles.detailsContainer}>
              <RegularNormal>{club.title}</RegularNormal>
              <RegularSmall>{club.period}</RegularSmall>
            </View>
          </Card.Content>
        ))}
      </Card.Content>
    </Card>
  );
};

export default ClubsAndSocietiesCard;
