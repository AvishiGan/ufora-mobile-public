import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Dropdown = () => {
    const [selectedValue, setSelectedValue] = useState(null);
  
    const dropdownOptions = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ];
  
    const handleValueChange = (value) => {
      setSelectedValue(value);
    };
  
    return (
      <View>
        <RNPickerSelect
          onValueChange={handleValueChange}
          items={dropdownOptions}
          placeholder={{ label: 'Select an option', value: null }}
          value={selectedValue}
        />
      </View>
    );
  };
  
  export default Dropdown