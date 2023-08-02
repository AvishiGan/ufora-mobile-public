import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { ButtonMediumCustom } from "../../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ProfileStackParamList } from "../../../../routes/profileStack";

type ProfileSliderProps = {
  slideTitles: string[];
};

const ProfileSlider: React.FC<ProfileSliderProps> = ({ slideTitles }) => {
  const [activeSlide, setActiveSlide] = useState<number | null>(null);

  // Annotate the navigation prop with the correct type
  const navigation =
    useNavigation<
      StackNavigationProp<ProfileStackParamList, keyof ProfileStackParamList>
    >();

  const handleSlidePress = (index: number) => {
    setActiveSlide(index);

    switch (index) {
      case 0:
        navigation.navigate("ProfileAboutSection");
        break;
      case 1:
        navigation.navigate("ProfilePostSection");
        break;
      case 2:
        navigation.navigate("ProfileBlogSection");
        break;
      case 3:
        navigation.navigate("ProfilePortfolioSection");
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.allSlidesContainer}>
      {slideTitles.map((slideTitle, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleSlidePress(index)}
          style={[
            styles.individualSlideContainer,
            activeSlide === index ? styles.activeSlide : null,
          ]}
        >
          {/* Pass the color prop to ButtonMediumCustom */}
          <ButtonMediumCustom
            color={activeSlide === index ? "#2656FF" : "#FFFFFF"}
          >
            {slideTitle}
          </ButtonMediumCustom>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ProfileSlider;
