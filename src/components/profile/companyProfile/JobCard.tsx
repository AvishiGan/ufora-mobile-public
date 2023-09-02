import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import {
  COLORS,
  NameSemiboldNormal,
  RegularSmall,
  SmallerMedium,
  SmallerRegular,
} from "../../../constants";

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
          <TouchableOpacity style={styles.applyButton}>
            <RegularSmall fontColor={COLORS.brandWhite}>Apply</RegularSmall>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default JobCard;
