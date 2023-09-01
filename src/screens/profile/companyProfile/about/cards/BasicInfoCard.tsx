import React from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";
import { styles } from "./styles";
import { basicData } from "./data";
import { CakeIcon, MailIcon, PhoneIcon } from "../../../../../../assets/svg";
import { CardHeadingBold, RegularNormal } from "../../../../../constants";

const BasicInfoCard: React.FC = () => {
  return (
    <Card style={styles.individualCardContainer}>
      <Card.Content>
        <CardHeadingBold>Basic Info</CardHeadingBold>
      </Card.Content>
      <Card.Content style={styles.contentWithGap}>
        {basicData.map((basicData, index) => (
          <View key={index}>
            {/* First singleBasicInfoContainer */}
            <View style={styles.singleBasicInfoContainer}>
              <View>
                <CakeIcon width={31} height={30} color="#111111" />
              </View>
              <RegularNormal>{basicData.birthday}</RegularNormal>
            </View>

            {/* Second singleBasicInfoContainer */}
            <View style={styles.singleBasicInfoContainer}>
              <View>
                <PhoneIcon width={31} height={30} color="#111111" />
              </View>
              <RegularNormal>{basicData.mobileNo}</RegularNormal>
            </View>

            {/* Third singleBasicInfoContainer */}
            <View style={styles.singleBasicInfoContainer}>
              <View>
                <MailIcon width={31} height={30} color="#111111" />
              </View>
              <RegularNormal>{basicData.email}</RegularNormal>
            </View>
          </View>
        ))}
      </Card.Content>
    </Card>
  );
};

export default BasicInfoCard;
