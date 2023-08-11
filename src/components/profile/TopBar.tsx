import React from "react";
import { View, TouchableOpacity } from "react-native"; // Import TouchableOpacity
import { styles } from "./styles";
import { BackIcon, ChatIcon, SearchIcon } from "../../../assets/svg/myProfile";
import { PageTitleSemibold } from "../../constants";
import { useNavigation } from "@react-navigation/native";

type PageTitleBarProps = {
  titleBarName: string;
};

const TopBar: React.FC<PageTitleBarProps> = ({ titleBarName }) => {
  const navigation = useNavigation(); // Get the navigation object

  const handleGoBack = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  return (
    <View style={styles.headerIconsContainer}>
      <View style={styles.backIconNameContainer}>
        {/* Back icon with TouchableOpacity */}
        <TouchableOpacity onPress={handleGoBack}>
          <BackIcon width={8} height={14} color="#4F4E4E" />
        </TouchableOpacity>
        <PageTitleSemibold>{titleBarName}</PageTitleSemibold>
      </View>
      <View style={styles.chatSearchIconsContainer}>
        <SearchIcon size={24} strokeColor="#4F4E4E" />
        <ChatIcon size={24} strokeColor="#4F4E4E" />
      </View>
    </View>
  );
};

export default TopBar;
