import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from "../../constants";
import { ChevronLeft } from 'lucide-react-native';
import { PageTitleSemibold } from '../../constants/fonts/';
import styles from './blogStyles.styles';

const HeaderLeft = () => {
  return (
  <View style={styles.headerLeft}>
    <TouchableOpacity>
      <ChevronLeft color={COLORS.brandGrey} size={SIZES.iconSize}/>
    </TouchableOpacity>
    <PageTitleSemibold>
          <Text style={styles.headerTitle}>Blog Centre</Text>
    </PageTitleSemibold>
  </View>
  )
}

export default HeaderLeft;