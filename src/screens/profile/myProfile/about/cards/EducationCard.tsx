import React from "react";
import { View, Image } from "react-native";
import { Card } from "react-native-paper";
import { styles } from "./styles";
import { educationData } from "./data";
import {
  CardHeadingBold,
  RegularNormal,
  RegularSmall,
  SmallItalic,
} from "../../../../../constants";

const EducationCard: React.FC = () => {
  return (
    <Card style={styles.individualCardContainer}>
      <Card.Content>
        <CardHeadingBold>Education</CardHeadingBold>
      </Card.Content>
      <Card.Content style={styles.contentWithGap}>
        {educationData.map((education, index) => (
          <Card.Content key={index} style={styles.iconAndDetailsContainer}>
            <View>
              <Image
                style={styles.imageContainer}
                source={education.image}
                resizeMode="contain"
              />
            </View>
            <View style={styles.detailsContainer}>
              <RegularNormal>{education.general}</RegularNormal>
              {education.university ? (
                <SmallItalic>{education.university}</SmallItalic>
              ) : null}
              <RegularSmall>{education.period}</RegularSmall>
            </View>
          </Card.Content>
        ))}
      </Card.Content>
    </Card>
  );
};

export default EducationCard;
