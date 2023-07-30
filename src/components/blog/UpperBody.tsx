import React from 'react';
// import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from "./blogStyles.styles";
import { COLORS, SIZES } from '../../constants';
import { Search, FileText, PlusCircle } from 'lucide-react-native';
import { RegularBig, SemiBoldBig } from '../../constants/fonts';

// Use satate for search
// const [searchTerm, setSearchTerm] = useState();

const UpperBody = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapContainer}>
        <View style={styles.searchInput}>
          <Search color={COLORS.placeHolder} size={SIZES.iconSize} />
            {/* <RegularBig> */}
              <TextInput
                placeholder='Find blogs...'
                placeholderTextColor={COLORS.placeHolder}
                value=''
              />
            {/* </RegularBig> */}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonCard}>
              <FileText color={COLORS.brandGrey} size={40} />
              <SemiBoldBig><Text>My Articles</Text></SemiBoldBig>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCard}>
              <PlusCircle color={COLORS.brandGrey} size={40} />
              <SemiBoldBig><Text>Add Blog</Text></SemiBoldBig>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default UpperBody;