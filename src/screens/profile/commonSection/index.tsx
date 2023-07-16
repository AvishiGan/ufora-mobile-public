import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./styles";
import ProfileButton from "../../../components/profile/buttons/index";

const ProfileCommonSection: React.FC = () => {
  return (
    <View style={styles.profileSection}>
      <Image source={require("./assets/images/profile/ProfilePicture.png")} />
      <Text style={styles.profileName}>Isuru Ranawaka</Text>
      <Text style={styles.profileText}>Undergrad at University of Colombo</Text>
      <View style={styles.horizontalContainer}>
        <Text style={styles.profileText}>145 Friends</Text>
        <Text style={styles.profileText}>35 Posts</Text>
        <Text style={styles.profileText}>5 Blogs</Text>
        <Text style={styles.profileText}>4 Projects</Text>
      </View>
      <View style={styles.horizontalContainer}>
        <ProfileButton onPress={handleButtonPress} title="Edit Profile" />
        <ProfileButton onPress={handleButtonPress} title="Share Profile" />
      </View>
      <View style={styles.horizontalContainer}>
        <ProfileButton onPress={handleButtonPress} title="About" />
        <ProfileButton onPress={handleButtonPress} title="Posts" />
        <ProfileButton onPress={handleButtonPress} title="Blogs" />
        <ProfileButton onPress={handleButtonPress} title="Portfolio" />
      </View>
    </View>
  );
};

/**
 * This function is called when the button is pressed
 */
const handleButtonPress = () => {
  // Code logic to be executed when the button is pressed
  console.log("Button pressed!");
};

export default ProfileCommonSection;
