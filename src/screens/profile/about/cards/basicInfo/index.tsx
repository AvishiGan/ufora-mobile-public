import React from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";
import { styles } from "../styles";
import { basicData } from "./data";
import { CakeIcon, MailIcon, PhoneIcon } from "../../../../../../assets/svg";
import { CardHeadingBold, RegularNormal } from "../../../../../constants";

const BasicInfoCard: React.FC = () => {
  return (
    <Card style={styles.individualCardContainer}>
      <Card.Content>
        <CardHeadingBold>Basic Info</CardHeadingBold>
      </Card.Content>
      {basicData.map((basicData, index) => (
        <View key={index}>
          {/* First singleBasicInfoContainer */}
          <View style={styles.singleBasicInfoContainer}>
            <View>
              <CakeIcon width={31} height={30} color="#111111" />
            </View>
            <View style={styles.listItem}>
              <RegularNormal>{basicData.birthday}</RegularNormal>
            </View>
          </View>

          {/* Second singleBasicInfoContainer */}
          <View style={styles.singleBasicInfoContainer}>
            <View>
              <PhoneIcon width={31} height={30} color="#111111" />
            </View>
            <View style={styles.listItem}>
              <RegularNormal>{basicData.mobileNo}</RegularNormal>
            </View>
          </View>

          {/* Third singleBasicInfoContainer */}
          <View style={styles.singleBasicInfoContainer}>
            <View>
              <MailIcon width={31} height={30} color="#111111" />
            </View>
            <View style={styles.listItem}>
              <RegularNormal>{basicData.email}</RegularNormal>
            </View>
          </View>
        </View>
      ))}
    </Card>
  );
};

export default BasicInfoCard;
