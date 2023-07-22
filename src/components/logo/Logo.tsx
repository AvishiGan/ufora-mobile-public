import React, { FunctionComponent } from "react";
import { Image, ImageSourcePropType, View, TextStyle  } from "react-native";
import BoldHeading from "../../constants/fonts/BoldHeading";
import RegularBig from "../../constants/fonts/RegularBig";

interface LogoProps {
  source: ImageSourcePropType;
  mainText: string;
  subText: string;
  additionalText?: string;
}

const Logo: FunctionComponent<LogoProps> = ({ source, mainText, subText, additionalText }) => {
  return (
    <View style={{ alignItems: "center", marginTop: 100, justifyContent: "center" }}>
      <Image source={source} style={{ width: 143, height: 47 }} /> 
      <View style={{ alignItems: "center", marginTop: 14 }}>
        <BoldHeading>{mainText}</BoldHeading>
        <RegularBig style={{ flexWrap: "wrap", marginTop: 5 }}>{subText}</RegularBig>
        {additionalText && (
          <RegularBig style={{ flexShrink: 0, marginBottom: 8 }}>
            {additionalText}
          </RegularBig>
        )}
      </View>
    </View>
  );
};

export default Logo;
