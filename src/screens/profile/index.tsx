import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./commonSection/styles";
import ProfileButton from "../../components/profile/buttons/index";
import CommonSection from "./commonSection";

const ProfileSection: React.FC = () => {
  return (
    <View style={styles.profileSection}>
      <CommonSection />
    </View>
  );
};

export default ProfileSection;
