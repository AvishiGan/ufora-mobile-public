import React from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import AddIcon from "../../../assets/svg/myProfile/common/addIcon";
import { RegularNormal } from "../../constants";

type ContentAdditionBarProps = {
  title: string;
  onPress?: () => void;
};

const ContentAdditionBar: React.FC<ContentAdditionBarProps> = ({
  title,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.iconAndTextContainer}>
      <AddIcon width={24} height={24} />
      <RegularNormal>{title}</RegularNormal>
    </View>
  </TouchableOpacity>
);

export default ContentAdditionBar;
