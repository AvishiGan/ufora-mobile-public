import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from "../../constants";
import { ChevronLeft } from 'lucide-react-native';
import styles from './blogStyles.styles';
import SemiboldText from '../../constants/fonts/SemiboldText';


const HeaderLeft = () => {
  return (
  <View style={styles.headerLeft}>
    <TouchableOpacity>
      <ChevronLeft color={COLORS.brandGrey} size={SIZES.iconSize}/>
    </TouchableOpacity>
    <SemiboldText>
        <Text style={styles.headerTitle}>Blog Centre</Text>
    </SemiboldText>
    <TouchableOpacity>
    
    </TouchableOpacity>
  </View>
  )
}

export default HeaderLeft;