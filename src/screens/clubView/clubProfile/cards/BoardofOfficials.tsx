import React from "react";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import { styles } from "./styles";
import { clubData } from "./data";
import {
  CardHeadingBold,
  RegularNormal,
  RegularSmall,
} from "../../../../constants";
import { UforaIcon, VerifiedIcon } from "../../../../../assets";

const BoardofOfficials: React.FC = () => {
  return (
    <Card style={styles.individualCardContainer}>
      <Card.Content>
        <CardHeadingBold>Board of Officials</CardHeadingBold>
      </Card.Content>
      <Card.Content style={styles.contentWithGap}>
        {clubData.map((club, index) => (
          <Card.Content key={index} style={styles.iconAndDetailsContainer}>
            <View>
              <Image
                style={styles.imageContainer}
                source={club.image}
                resizeMode="contain"
              />
            </View>
            <View style={styles.detailsContainer}>
              <View style={{flexDirection: "row"}}>
                  <RegularNormal>{club.name}</RegularNormal>
                  <View style={{flexDirection: "row", marginLeft: 5, gap: 3}}>
                  {/* Verified icon */}
                  <VerifiedIcon
                    size={18}
                    fillColor="#2656FF"
                    strokeColor="#FEFEFE"
                  />
                  <UforaIcon
                    size={18}
                    fillColor="#111111"
                    strokeColor="#FEFEFE"
                  />
                  
                  {/* <UforaIcon size={21} fillColor="#111111" strokeColor="#FEFEFE" /> */}
                </View>
              </View>
              
              <RegularSmall>{club.position}</RegularSmall>
            </View>
          </Card.Content>
        ))}
      </Card.Content>
    </Card>
  );
};

export default BoardofOfficials;
