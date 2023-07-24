import React from 'react';
// import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from "./blogStyles.styles";
// import BoldItalicText from '../../constants/fonts/BoldItalic';
import { COLORS, SIZES } from '../../constants';
import { Search, FileText, PlusCircle } from 'lucide-react-native';

// Use satate for search
// const [searchTerm, setSearchTerm] = useState();

const UpperBody = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapContainer}>
        <View style={styles.searchInput}>
          <Search color={COLORS.placeHolder} size={SIZES.iconSize} />
          {/* <BoldItalicText> */}
              <TextInput
                placeholder='Find Blogs...'
                placeholderTextColor={COLORS.placeHolder}
                value=''
              />
          {/* </BoldItalicText> */}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonCard}>
              <FileText color={COLORS.brandGrey} size={40} />
              <Text>My Articles</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCard}>
              <PlusCircle color={COLORS.brandGrey} size={40} />
              <Text>Add Blog</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default UpperBody;