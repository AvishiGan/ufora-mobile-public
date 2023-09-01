/**
 * This code is a common code for creating one single project card which we can use later to create multiple project cards
 */

import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";
import {
  NameSemiboldNormal,
  SmallerMedium,
  SmallerRegular,
} from "../../../constants";
import { Button } from "react-native-paper";

interface ProjectCardData {
  profilePic: any;
  jobTitle: string;
  organizationName: string;
  date: string;
}

const JobCard: React.FC<ProjectCardData> = ({
  profilePic,
  jobTitle,
  organizationName,
  date,
}) => {
  return (
    <View style={styles.singleJobCardContainer}>
      <View style={styles.organizationLogoNameJobContainer}>
        <Image style={styles.organizationLogo} source={profilePic} />
        <View style={styles.organizationNameJobContainer}>
          <NameSemiboldNormal>{jobTitle}</NameSemiboldNormal>
          <SmallerMedium>{organizationName}</SmallerMedium>
        </View>
        <View style={styles.dateApplyButtonContainer}>
          <SmallerRegular>{date}</SmallerRegular>
          <Button style={styles.applyButton}>Apply</Button>
        </View>
      </View>
    </View>
  );
};

export default JobCard;
