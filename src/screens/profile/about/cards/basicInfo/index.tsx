import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, Button, Title, Paragraph } from "react-native-paper";
import { styles } from "../styles";
import { basicData } from "./data";
import { CakeIcon, MailIcon, PhoneIcon } from "../../../../../../assets/svg";

const BasicInfoCard: React.FC = () => {
  return (
    <Card style={styles.individualCardContainer}>
      <Card.Content>
        <Title style={styles.cardTitle}>Basic Info</Title>
      </Card.Content>
      {basicData.map((basicInfo, index) => (
        <Card.Content key={index}>
          <View style={styles.singleBasicInfoContainer}>
            <View style={styles.basicInfoIconContainer}>
              <CakeIcon width={31} height={30} color="#111111" />
              <Text style={[styles.listItem, styles.basicInfoText]}>
                {basicInfo.birthday}
              </Text>
            </View>
          </View>
          <View style={styles.singleBasicInfoContainer}>
            <View style={styles.basicInfoIconContainer}>
              <PhoneIcon width={31} height={30} color="#111111" />
              <Text style={[styles.listItem, styles.basicInfoText]}>
                {basicInfo.mobileNo}
              </Text>
            </View>
          </View>
          <View style={styles.singleBasicInfoContainer}>
            <View style={styles.basicInfoIconContainer}>
              <MailIcon width={31} height={30} color="#111111" />
              <Text style={[styles.listItem, styles.basicInfoText]}>
                {basicInfo.email}
              </Text>
            </View>
          </View>
        </Card.Content>
      ))}
    </Card>
  );
};

export default BasicInfoCard;
