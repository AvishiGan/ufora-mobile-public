import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "./styles";

type PageTitleBarProps = {
  title: string;
};

const ContentAdditionBar: React.FC<PageTitleBarProps> = ({ title }) => (
  <View style={styles.iconAndTextContainer}>
    {/* + icon comes here */}
    <Text style={styles.text}>{title}</Text>
  </View>
);

export default ContentAdditionBar;
