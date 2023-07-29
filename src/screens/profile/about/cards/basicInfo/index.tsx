import React from "react";
import { Text, View, Image } from "react-native";
import { Card, Title } from "react-native-paper";
import { styles } from "../styles";
import { basicData } from "./data";
import { CakeIcon, MailIcon, PhoneIcon } from "../../../../../../assets/svg";

const AchievementCard: React.FC = () => {
  return (
    <Card style={styles.individualCardContainer}>
      <Card.Content>
        <Title style={styles.cardTitle}>Basic Info</Title>
      </Card.Content>
      {basicData.map((basicData, index) => (
        <View key={index}>
          {/* First singleBasicInfoContainer */}
          <View style={styles.singleBasicInfoContainer}>
            <View>
              <CakeIcon width={31} height={30} color="#111111" />
            </View>
            <Text style={[styles.listItem, styles.mainDetail]}>
              {basicData.birthday}
            </Text>
          </View>

          {/* Second singleBasicInfoContainer */}
          <View style={styles.singleBasicInfoContainer}>
            <View>
              <PhoneIcon width={31} height={30} color="#111111" />
            </View>
            <Text style={[styles.listItem, styles.mainDetail]}>
              {basicData.mobileNo}
            </Text>
          </View>

          {/* Third singleBasicInfoContainer */}
          <View style={styles.singleBasicInfoContainer}>
            <View>
              <MailIcon width={31} height={30} color="#111111" />
            </View>
            <Text style={[styles.listItem, styles.mainDetail]}>
              {basicData.email}
            </Text>
          </View>
        </View>
      ))}
    </Card>
  );
};

export default AchievementCard;
