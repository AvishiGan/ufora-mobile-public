import React from 'react';
// import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { Search, FileText, PlusCircle } from 'lucide-react-native';
import { RegularBig, SemiBoldBig } from '../../constants/fonts';
import styles from "./blogStyles.styles";

// Use satate for search
// const [searchTerm, setSearchTerm] = useState();

interface UpperBodyProps {
  navigation: any; 
}

const UpperBody: React.FC<UpperBodyProps> = ({navigation}) => {

  const handleAddBlog = () => {
    navigation.navigate('AddBlog'); // Navigate to the 'AddBlog' screen when 'Add Blog' is clicked
  };

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
          <TouchableOpacity style={styles.buttonCard} onPress={handleAddBlog}>
              <PlusCircle color={COLORS.brandGrey} size={40} />
              <SemiBoldBig><Text>Add Blog</Text></SemiBoldBig>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default UpperBody;