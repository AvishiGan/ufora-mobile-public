import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "./styles";
import { ProfileHeaderData } from "./data";

const ProfileHeader: React.FC = () => {
  return (
    <>
      {ProfileHeaderData.map((PHData, index) => (
        <View style={styles.userDetailsContainer} key={index}>
          <View style={styles.profilepicNameUniContainer}>
            <View style={styles.nameUniContainer}></View>
            <View style={styles.profileNameAndTwoIconsContainer}></View>
            <Text style={styles.profileName}>{PHData.profileName}</Text>
            <Text style={styles.uniName}>{PHData.university}</Text>
            <View style={styles.timeAndGlobeIconContainer}></View>
            <Text style={styles.time}>{PHData.time}</Text>
          </View>
        </View>
      ))}
    </>
  );
};

export default ProfileHeader;
