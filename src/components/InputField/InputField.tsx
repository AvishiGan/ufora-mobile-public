//import { Eye, EyeOff } from "lucide-react-native";
import React, { FunctionComponent, useState } from "react";
import { TextInput, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import EyeOff from "../../../assets/icons/eye-off.png";

interface InputFieldProps {
  imageSource?: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  showPasswordToggle?: boolean;
  style?: object;
}

const InputField:FunctionComponent <InputFieldProps> = ({
  imageSource,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  showPasswordToggle = false,
  style = {},
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const styles = StyleSheet.create({
    input: {
      fontSize: 16,
      color: '#B8B8B8',
      fontWeight: "400",
    },
  });

  return (
    <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "transparent", borderWidth: 1, borderRadius: 15, marginBottom: 2, padding: 12, width:320, borderColor:'#87929D' }}>
      <Image source={imageSource} style={{ marginRight: 18,marginLeft: 4, padding: 5 }} />
      <TextInput
        placeholder={placeholder}
        value={value}
        secureTextEntry={secureTextEntry && !showPassword}
        onChangeText={onChangeText}
        style={[styles.input, { flex: 1 }, style]}
      />
      {showPasswordToggle && (
        <TouchableOpacity onPress={togglePasswordVisibility} style={{ marginLeft: 8 }}>
          <Image source={EyeOff} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputField;



{/*import React, { FunctionComponent, useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

interface InputFieldProps {
  placeholder: string;
  value: string;
}

const InputField: FunctionComponent<InputFieldProps> = ({placeholder, value}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChangeText = (text: string) => {
    setInputValue(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        placeholder={placeholder}
        placeholderTextColor="#888"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={handleChangeText}
        value={inputValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
  },
  input: {paddingHorizontal: 10,paddingVertical: 8,borderWidth: 1,borderColor: '#ccc',borderRadius: 4,fontSize: 16,},
  inputFocused: {
    borderColor: '#aaa',
  },
});

export default InputField;*/}








{/*import React from 'react';
import { FloatingLabelInput } from 'react-native-floating-label-input';

interface InputFieldProps {
  label: string;
}

const InputField: React.FC<InputFieldProps> = ({ label }) => {
  return (
    <FloatingLabelInput
      label={label}
      containerStyles={{
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 8,
        marginBottom: 16,
      }}
      inputStyles={{
        fontSize: 16,
      }}
    />
  );
};

export default InputField;*/}






