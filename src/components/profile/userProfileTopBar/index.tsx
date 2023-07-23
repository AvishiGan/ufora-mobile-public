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
const UserProfileTopBar: React.FC<PageTitleBarProps> = ({ title }) => (
  <View style={styles.headerIconsContainer}>
    <View style={styles.backIconNameContainer}>
      {/* Back icon comes here */}
      <Text style={styles.profileName}>{title}</Text>
    </View>
    <View style={styles.chatSearchIconsContainer}>
      {/* Chat and Search icons come here */}
    </View>
  </View>
);

export default UserProfileTopBar;
