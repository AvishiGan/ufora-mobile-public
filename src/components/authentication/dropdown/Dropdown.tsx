import { ReactNode } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React, { FunctionComponent, useState } from 'react'
import { GraduationCap } from 'lucide-react-native';

interface DropdownProps {
  iconComponent?: ReactNode;
  value: string;
  onChangeText: (text: string) => void;
  error: string
  onBlur?: () => void;
}

const Dropdown:FunctionComponent<DropdownProps> = ({iconComponent, value, onChangeText, error, onBlur}) => {
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "transparent",
      borderWidth: 1,
      borderRadius: 15,
      marginBottom: 2,
      width: 320,
      borderColor: error ? '#CC3535' : "#87929D",
    },
    picker: {
      flex: 1,
    },
    placeholder: {
      fontSize: 16, 
      color: error ? '#CC3535': '#B8B8B8',
      fontWeight: "400",
    },
    errorText: {
      color: '#CC3535',
      fontSize: 12,
      marginTop: 0,
      marginLeft: 4
    },
    inputError: {
      borderColor: "#CC3535",
    }
  });


  return (
    <View>
      <View style={styles.container}>
        <View style={{marginLeft: 15}}>
           <GraduationCap color={error ? "#CC3535" : "#B8B8B8"} size={25} />
        </View>
      <Picker
        selectedValue={value}
        onValueChange={(itemValue, itemIndex) => onChangeText(itemValue)}
        style={styles.picker}
        onBlur={onBlur}

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
    {error? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
    
  )
}

export default Dropdown