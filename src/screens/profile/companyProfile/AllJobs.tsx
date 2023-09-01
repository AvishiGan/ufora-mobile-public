/**
 * This file contains all the posts information
 */

import React from "react";
import { View, ScrollView } from "react-native";
import { JobCard } from "../../../components";
import { wso2Logo } from "../../../../assets/images/profile/companyProfile";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../navigation/navigator/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

// type Props = StackScreenProps<RootStackParamList, "AllPosts">;
type Props = NativeStackNavigationProp<RootStackParamList>;

const CompanyProfilePostSection: React.FC = () => {
  const navigation = useNavigation<Props>();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.allJobsContainer}>
          <JobCard
            profilePic={wso2Logo}
            jobTitle="Software Engineering Intern"
            organizationName="WSO2"
            date="Aug 12, 2023"
          />

          <JobCard
            profilePic={wso2Logo}
            jobTitle="UI/UX Design Intern"
            organizationName="WSO2"
            date="Jul 30, 2023"
          />

          <JobCard
            profilePic={wso2Logo}
            jobTitle="Business Analytics Intern"
            organizationName="WSO2"
            date="Jul 27, 2023"
          />

          <JobCard
            profilePic={wso2Logo}
            jobTitle="Backend Engineering Intern"
            organizationName="WSO2"
            date="Jul 27, 2023"
          />

          <JobCard
            profilePic={wso2Logo}
            jobTitle="Frontend Engineering Intern"
            organizationName="WSO2"
            date="Jul 21, 2023"
          />

          <JobCard
            profilePic={wso2Logo}
            jobTitle="Data Science Intern"
            organizationName="WSO2"
            date="20 days ago"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CompanyProfilePostSection;
