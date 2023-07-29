import React from "react";
import { Text, View, Image } from "react-native";
import { Card} from "react-native-paper";
import { styles } from "../styles";
import { clubData } from "./data";
import { CardHeadingBold, RegularSmall } from "../../../../../constants";

const ClubsAndSocietiesCard: React.FC = () => {
  return (
    <Card style={styles.individualCardContainer}>
      <Card.Content>
        <CardHeadingBold>Clubs and Societies</CardHeadingBold>
      </Card.Content>
      {clubData.map((club, index) => (
        <Card.Content key={index} style={styles.iconAndDetailsContainer}>
          <View>
            <Image
              style={styles.imageContainer}
              source={club.image}
              resizeMode="contain"
            />
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.listItem}>
              <Text style={[styles.mainDetail]}>{club.title}</Text>
              <RegularSmall>{club.period}</RegularSmall>
            </View>
          </View>
        </Card.Content>
      ))}
    </Card>
  );
};

export default ClubsAndSocietiesCard;
