import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "./styles";

type ProfileSliderProps = {
  slideTitles: string[];
};

const ProfileSlider: React.FC<ProfileSliderProps> = ({ slideTitles }) => (
  <View style={styles.allSlidesContainer}>
    {slideTitles.map((slideTitle, index) => (
      <View style={styles.individualSlideContainer} key={index}>
        <Text style={styles.individualSlideText}>{slideTitle}</Text>
      </View>
    ))}
  </View>
);

export default ProfileSlider;
