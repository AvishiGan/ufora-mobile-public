import React from "react";
import { Text } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import { styles } from "../styles";
import { CardHeadingBold } from "../../../../../constants";

const IntroCard: React.FC = () => {
  return (
    <Card style={styles.individualCardContainer}>
      <Card.Content>
        <CardHeadingBold>Intro</CardHeadingBold>
      </Card.Content>
      <Card.Content>
        <Paragraph style={styles.introText}>
          Hey I am Isuru, an undergrad at UCSC. I love designing and creating
          websites and posters
          <Text style={styles.seeMore}>... see more</Text>
        </Paragraph>
      </Card.Content>
    </Card>
  );
};

export default IntroCard;
