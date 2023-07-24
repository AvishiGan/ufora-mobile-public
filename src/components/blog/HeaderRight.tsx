import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from "../../constants";
import { Search, MessagesSquare } from 'lucide-react-native';
import styles from './blogStyles.styles';

const HeaderRight = () => {
  return (
  <View style={styles.headerRight}>
    <TouchableOpacity>
      <Search color={COLORS.brandGrey} size={SIZES.iconSize} />
    </TouchableOpacity>
    <TouchableOpacity>
      <MessagesSquare color={COLORS.brandGrey} size={SIZES.iconSize} />
    </TouchableOpacity>
  </View>
  )
}

export default HeaderRight;