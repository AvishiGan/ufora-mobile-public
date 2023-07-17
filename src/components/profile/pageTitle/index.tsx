import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "./styles";

/**
 * TypeScript type declaration
 *
 */
type PageTitleBarProps = {
  title: string;
};

/**
 *
 * @param param0 | PageTitleBarProps
 * @returns | React.FC<PageTitleBarProps>
 */
const PageTitleBar: React.FC<PageTitleBarProps> = ({ title }) => (
  <View style={styles.fullContainer}>
    <View style={styles.nameBackContainer}>
      <Text style={styles.name}>{title}</Text>
    </View>
  </View>
);

export default PageTitleBar;
