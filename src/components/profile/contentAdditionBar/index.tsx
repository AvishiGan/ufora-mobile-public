import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import AddIcon from "../../../../assets/svg/myProfile/common/addIcon";
import { RegularNormal } from "../../../constants";

type ContentAdditionBarProps = {
  title: string;
};

const ContentAdditionBar: React.FC<ContentAdditionBarProps> = ({ title }) => (
  <View style={styles.iconAndTextContainer}>
    <AddIcon width={24} height={24} />
    <RegularNormal>{title}</RegularNormal>
  </View>
);

export default ContentAdditionBar;
