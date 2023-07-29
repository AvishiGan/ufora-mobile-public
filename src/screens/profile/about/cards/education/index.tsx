import React from "react";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import { styles } from "../styles";
import { educationData } from "./data";
import {
  CardHeadingBold,
  RegularSmall,
  SmallItalic,
} from "../../../../../constants";

const EducationCard: React.FC = () => {
  return (
    <Card style={styles.individualCardContainer}>
      <Card.Content>
        <CardHeadingBold>Education</CardHeadingBold>
      </Card.Content>
      {educationData.map((education, index) => (
        <Card.Content key={index} style={styles.iconAndDetailsContainer}>
          <View>
            <Image
              style={styles.imageContainer}
              source={education.image}
              resizeMode="contain"
            />
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.listItem}>
              <Text style={[styles.listItem, styles.mainDetail]}>
                {education.general}
              </Text>
              <SmallItalic>{education.university}</SmallItalic>
              <RegularSmall>{education.period}</RegularSmall>
            </View>
          </View>
        </Card.Content>
      ))}
    </Card>
  );
};

export default EducationCard;
