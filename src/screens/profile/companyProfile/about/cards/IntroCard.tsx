import React from "react";
import { Card } from "react-native-paper";
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
          WSO2 is an open-source technology provider founded in 2005. It
          delivers software and cloud solutions that provide foundational
          technologies... see more
          {/* <NameSemiboldNormal style={styles.seeMore}>
            ... see more
          </NameSemiboldNormal> */}
        </NameSemiboldNormal>
      </Card.Content>
    </Card>
  );
};

export default IntroCard;
