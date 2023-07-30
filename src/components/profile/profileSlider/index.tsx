import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { ButtonMedium } from "../../../constants";

type ProfileSliderProps = {
  slideTitles: string[];
};

/**
 *
 * @param param0 | ProfileSliderProps
 * @returns | This component returns the slider of the user profile
 */
const ProfileSlider: React.FC<ProfileSliderProps> = ({ slideTitles }) => (
  <View style={styles.allSlidesContainer}>
    {slideTitles.map((slideTitle, index) => (
      <View style={styles.individualSlideContainer} key={index}>
        <ButtonMedium>{slideTitle}</ButtonMedium>
      </View>
    ))}
  </View>
);

export default ProfileSlider;
