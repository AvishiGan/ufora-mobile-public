import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "./styles";
import AddIcon from "../../../../assets/svg/myProfile/common/addIcon";

type ContentAdditionBarProps = {
  title: string;
};

const ContentAdditionBar: React.FC<ContentAdditionBarProps> = ({ title }) => (
  <View style={styles.iconAndTextContainer}>
    <AddIcon width={24} height={24} />
    <Text style={styles.text}>{title}</Text>
  </View>
);

export default ContentAdditionBar;
