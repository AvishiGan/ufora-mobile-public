import React from "react";
import { View, Image } from "react-native";
import { Card } from "react-native-paper";
import { styles } from "./styles";
import { MailIcon, PhoneIcon } from "../../../../../../assets/svg";
import { CardHeadingBold, RegularNormal } from "../../../../../constants";
import { MapPin } from "lucide-react-native";
import { companyProfileData } from "../../CompanyProfileData";

const BasicInfoCard: React.FC = () => {
  return (
    <Card style={styles.individualCardContainer}>
      <Card.Content>
        <CardHeadingBold>Basic Info</CardHeadingBold>
      </Card.Content>
      <Card.Content style={styles.contentWithGap}>
        {/* Use the keys from the interface to access properties */}
        <View>
          {/* First singleBasicInfoContainer */}
          <View style={styles.singleBasicInfoContainer}>
            <View>
              <MapPin size={24} color="#111111" />
            </View>
            <RegularNormal>{companyProfileData.address}</RegularNormal>
          </View>

          {/* Second singleBasicInfoContainer */}
          <View style={styles.singleBasicInfoContainer}>
            <View>
              <PhoneIcon width={31} height={30} color="#111111" />
            </View>
            <RegularNormal>{companyProfileData.mobileNo}</RegularNormal>
          </View>

          {/* Third singleBasicInfoContainer */}
          <View style={styles.singleBasicInfoContainer}>
            <View>
              <MailIcon width={31} height={30} color="#111111" />
            </View>
            <RegularNormal>{companyProfileData.email}</RegularNormal>
          </View>

          {/* Location map image */}
          <Image
            style={styles.imageContainer}
            source={companyProfileData.location}
          />
        </View>
      </Card.Content>
    </Card>
  );
};

export default BasicInfoCard;
