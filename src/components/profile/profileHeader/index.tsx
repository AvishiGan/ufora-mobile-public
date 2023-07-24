import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { styles } from "./styles";

interface ProfileHeaderData {
  profileName: string;
  uniName: string;
  time: string;
  // profilePic: string;
}

interface ProfileHeaderProps {
  data: ProfileHeaderData;
}

/**
 * 
 * @param param0 | This is the data which we are passing to the ProfileHeader component
 * @returns | This component returns the header of the user profile
 */
const ProfileHeader: React.FC<ProfileHeaderProps> = ({ data }) => {
  return (
    <View style={styles.userDetailsContainer}>
      <View style={styles.profilePicNameUniContainer}>
        {/* profile pic comes here */}
        <View style={styles.nameUniContainer}>
          <View style={styles.profileNameAndTwoIconsContainer}>
            <Text style={styles.profileName}>{data.profileName}</Text>
            <View style={styles.verifiedAndUforaIconContainer}>
              {/* Two icons come here */}
            </View>
          </View>
          <Text style={styles.uniName}>{data.uniName}</Text>
          <View style={styles.timeAndGlobeIconContainer}>
            <Text style={styles.time}>{data.time}</Text>
            {/* Dot icon comes here */}
            {/* Globe icon comes here */}
          </View>
        </View>
      </View>
      {/* More icon comes here */}
    </View>
  );
};

export default ProfileHeader;
