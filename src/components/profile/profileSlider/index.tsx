import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "./styles";

type ProfileSliderProps = {
  titles: string[];
};

const ProfileSlider: React.FC<ProfileSliderProps> = ({ titles }) => (
  <View style={styles.allSlidesContainer}>
    {titles.map((title, index) => (
      <View style={styles.individualSlideContainer} key={index}>
        <Text style={styles.individualSlideText}>{title}</Text>
      </View>
    ))}
  </View>
);

export default ProfileSlider;
