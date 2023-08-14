import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from "../../constants";
import { ChevronLeft } from 'lucide-react-native';
import { PageTitleSemibold } from '../../constants/fonts/';
import { useNavigation } from '@react-navigation/native';
import styles from './blogStyles.styles';

interface HeaderLeftProps {
  showTitle: boolean; 
  headerTitle: string;
}

const HeaderLeft: React.FC<HeaderLeftProps> = ({ showTitle, headerTitle }) => {

  const navigation=useNavigation();

  const handleGoBack = () => {
    navigation.goBack(); // Navigate back when the button is clicked
  };

  return (
  <View style={styles.headerLeft}>
    <TouchableOpacity onPress={handleGoBack}>
      <ChevronLeft color={COLORS.brandGrey} size={SIZES.iconSize}/>
    </TouchableOpacity>
    {showTitle && ( // Conditionally render the title based on the showTitle prop
      <PageTitleSemibold>
            <Text style={styles.headerTitle}>{headerTitle}</Text>
      </PageTitleSemibold>
    )}
  </View>
  )
}

export default HeaderLeft;