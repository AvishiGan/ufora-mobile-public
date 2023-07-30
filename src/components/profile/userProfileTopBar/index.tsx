import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import {
  BackIcon,
  ChatIcon,
  SearchIcon,
} from "../../../../assets/svg/myProfile";
import { PageTitleSemibold } from "../../../constants";

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
      <BackIcon width={8} height={14} color="#4F4E4E" />
      <PageTitleSemibold>{titleBarName}</PageTitleSemibold>
    </View>
    <View style={styles.chatSearchIconsContainer}>
      {/* Search icon */}
      <SearchIcon size={24} strokeColor="#4F4E4E" />
      {/* Chat icon */}
      <ChatIcon size={24} strokeColor="#4F4E4E" />
    </View>
  </View>
);

export default UserProfileTopBar;
