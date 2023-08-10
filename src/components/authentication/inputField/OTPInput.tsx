//import { Eye, EyeOff } from "lucide-react-native";
import React, { FunctionComponent, useState } from "react";
import { TextInput, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import EyeOff from "../../../assets/icons/eye-off.png";

interface InputFieldProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  showPasswordToggle?: boolean;
}

const OTPInput:FunctionComponent <InputFieldProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  showPasswordToggle = false,
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
        marginLeft: 6
        },
    });

  return (
    <View style={{ flexDirection: "row", alignItems: "center",backgroundColor: "transparent", borderWidth: 1, borderRadius: 15, marginBottom: 2, padding: 12, width:48, height:50, borderColor:'#87929D'}}>
      <TextInput
        placeholder={placeholder}
        value={value}
        secureTextEntry={secureTextEntry && !showPassword}
        onChangeText={onChangeText}
        style={[styles.input, { flex: 1 }]}
      />
    </View>
  );
};

export default OTPInput;

