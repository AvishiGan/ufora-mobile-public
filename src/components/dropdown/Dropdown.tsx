import { View, StyleSheet, Image } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React, { FunctionComponent, useState } from 'react'

interface DropdownProps {
  imageSource?: string;
  value: string;
  onChangeText: (text: string) => void;

}

const Dropdown:FunctionComponent<DropdownProps> = ({imageSource, value, onChangeText}) => {
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "transparent",
      borderWidth: 1,
      borderRadius: 15,
      marginBottom: 2,
      width: 320,
      borderColor: '#87929D',
    },
    image: {
      marginRight: 0,
      marginLeft: 15,
      padding: 5,
    },
    picker: {
      flex: 1,
    },
    placeholder: {
      fontSize: 16, 
      color: '#B8B8B8',
      fontWeight: "400",
    },
  });


  return (

    <View style={styles.container}>
      {imageSource && <Image source={imageSource} style={styles.image} />}
      <Picker
        selectedValue={value}
        onValueChange={(itemValue, itemIndex) => onChangeText(itemValue)}
        style={styles.picker}

      >
        <Picker.Item label="University" value="" style={styles.placeholder} />
        <Picker.Item label="University of Colombo" value="University of Colombo" />
        <Picker.Item label="University of Peradeniya" value="University of Peradeniya" />
        <Picker.Item label="University of Moratuwa" value="University of Moratuwa" />
        <Picker.Item label="University of Kelaniya" value="University of Kelaniya" />
        <Picker.Item label="University of Vavuniya" value="University of Vavuniya" />
        <Picker.Item label="University of Jaffna" value="University of Jaffna" />
        <Picker.Item label="University of Sri Jayawardanapura" value="University of Sri Jayawardanapura" />
        <Picker.Item label="University of Ruhuna" value="University of Ruhuna" />
      </Picker>
    </View>
  )
}

export default Dropdown