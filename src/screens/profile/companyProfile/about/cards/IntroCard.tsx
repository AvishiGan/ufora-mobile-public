import React from "react";
import { Card } from "react-native-paper";
import { View } from "react-native";
import { styles } from "./styles";
import { CardHeadingBold, NameSemiboldNormal } from "../../../../../constants";

const IntroCard: React.FC = () => {
  return (
    <Card style={styles.individualCardContainer}>
      <Card.Content>
        <CardHeadingBold>Intro</CardHeadingBold>
      </Card.Content>
      <Card.Content style={styles.contentWithGap}>
        <NameSemiboldNormal>
          Hey I am Isuru, an undergrad at UCSC. I love designing and creating
          websites and posters
          {/* <NameSemiboldNormal style={styles.seeMore}>
            ... see more
          </NameSemiboldNormal> */}
        </NameSemiboldNormal>
      </Card.Content>
    </Card>
  );
};

export default IntroCard;
