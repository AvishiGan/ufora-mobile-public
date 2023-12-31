import React, { FunctionComponent } from "react";
import { Image, ImageSourcePropType, View, TextStyle  } from "react-native";
import BoldHeading from "../../../constants/fonts/BoldHeading";
import RegularBig from "../../../constants/fonts/RegularBig";
import UforaLogo from "./UforaLogo";

interface LogoProps {
  source: string;
  mainText: string;
  subText: string;
  additionalText?: string;
}

const Logo: FunctionComponent<LogoProps> = ({ source, mainText, subText, additionalText }) => {
  return (
    <View style={{ alignItems: "center", marginTop: 100, justifyContent: "center" }}>
      <UforaLogo />
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
