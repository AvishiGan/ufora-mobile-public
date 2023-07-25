import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "./styles";
import { SvgXml } from "react-native-svg";

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
 * @returns | This component returns the top bar of the user profile
 */
const UserProfileTopBar: React.FC<PageTitleBarProps> = ({ titleBarName }) => (
  <View style={styles.headerIconsContainer}>
    <View style={styles.backIconNameContainer}>
      {/* Back icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
      >
        <path
          d="M7 13L1 7L7 1"
          stroke="#4F4E4E"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <Text style={styles.profileName}>{titleBarName}</Text>
    </View>
    <View style={styles.chatSearchIconsContainer}>
      {/* Search icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
          stroke="#4F4E4E"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21 21L16.7 16.7"
          stroke="#4F4E4E"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      {/* Chat icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M18 9H20C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V22L18 18H12C11.4696 18 10.9609 17.7893 10.5858 17.4142C10.2107 17.0391 10 16.5304 10 16V15M14 9C14 9.53043 13.7893 10.0391 13.4142 10.4142C13.0391 10.7893 12.5304 11 12 11H6L2 15V4C2 2.9 2.9 2 4 2H12C12.5304 2 13.0391 2.21071 13.4142 2.58579C13.7893 2.96086 14 3.46957 14 4V9Z"
          stroke="#4F4E4E"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </View>
  </View>
);

export default UserProfileTopBar;
