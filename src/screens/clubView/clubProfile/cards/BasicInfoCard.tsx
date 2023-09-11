import React from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";
import { styles } from "./styles";
import { basicData } from "./data";
import { CardHeadingBold, RegularNormal } from "../../../../constants";
import { MapPinIcon, PhoneIcon, MailIcon} from "lucide-react-native";

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
                <MapPinIcon width={25} height={25} color="#111111" />
              </View>
              <RegularNormal>{basicData.address}</RegularNormal>
            </View>

            {/* Second singleBasicInfoContainer */}
            <View style={styles.singleBasicInfoContainer}>
              <View>
                <PhoneIcon width={25} height={25} color="#111111" />
              </View>
              <RegularNormal>{basicData.mobileNo}</RegularNormal>
            </View>

            {/* Third singleBasicInfoContainer */}
            <View style={styles.singleBasicInfoContainer}>
              <View>
                <MailIcon width={25} height={25} color="#111111" />
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
