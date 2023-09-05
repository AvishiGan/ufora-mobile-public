import React from "react";
import { Card } from "react-native-paper";
import { styles } from "./styles";
import { CardHeadingBold, NameSemiboldNormal } from "../../../../../constants";
import { companyProfileData } from "../../CompanyProfileData";

const IntroCard: React.FC = () => {
  return (
    <Card style={styles.individualCardContainer}>
      <Card.Content>
        <CardHeadingBold>Intro</CardHeadingBold>
      </Card.Content>
      <Card.Content style={styles.contentWithGap}>
        <NameSemiboldNormal>{companyProfileData.intro}</NameSemiboldNormal>
      </Card.Content>
    </Card>
  );
};

export default IntroCard;
