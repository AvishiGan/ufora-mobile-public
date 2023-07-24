import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "./styles";

type ContentAdditionBarProps = {
  title: string;
};

/**
 *
 * @param param0 | ContentAdditionBarProps
 * @returns | This component returns the addition bar of the user profile
 */
const ContentAdditionBar: React.FC<ContentAdditionBarProps> = ({ title }) => (
  <View style={styles.iconAndTextContainer}>
    {/* + icon comes here */}
    <Text style={styles.text}>{title}</Text>
  </View>
);

export default ContentAdditionBar;
