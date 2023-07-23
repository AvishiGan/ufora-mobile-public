import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "./styles";

/**
 * TypeScript type declaration
 *
 */
type PageTitleBarProps = {
  titleBarName: string;
};

/**
 *
 * @param param0 | PageTitleBarProps
 * @returns | React.FC<PageTitleBarProps>
 */
const UserProfileTopBar: React.FC<PageTitleBarProps> = ({ titleBarName }) => (
  <View style={styles.headerIconsContainer}>
    <View style={styles.backIconNameContainer}>
      {/* Back icon comes here */}
      <Text style={styles.profileName}>{titleBarName}</Text>
    </View>
    <View style={styles.chatSearchIconsContainer}>
      {/* Chat and Search icons come here */}
    </View>
  </View>
);

export default UserProfileTopBar;
