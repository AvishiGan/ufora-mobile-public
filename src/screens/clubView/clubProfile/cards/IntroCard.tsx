import React from "react";
import { Card } from "react-native-paper";
import { View } from "react-native";
import { styles } from "./styles";
import { CardHeadingBold, NameSemiboldNormal } from "../../../../constants";

const IntroCard: React.FC = () => {
  return (
    <Card style={styles.individualCardContainer}>
      <Card.Content>
        <CardHeadingBold>Intro</CardHeadingBold>
      </Card.Content>
      <Card.Content style={styles.contentWithGap}>
        <NameSemiboldNormal>
          Rotaract club of University of Colombo School of Computing is is a volunteering organization and a part of Rotary International District 3220
          <NameSemiboldNormal>
            ... see more
          </NameSemiboldNormal>
        </NameSemiboldNormal>
      </Card.Content>
    </Card>
  );
};

export default IntroCard;
