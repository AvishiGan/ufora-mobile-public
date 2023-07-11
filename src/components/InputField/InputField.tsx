import { Eye, EyeOff } from "lucide-react-native";
import React, { useState } from "react";
import { TextInput, View, TouchableOpacity, Image } from "react-native";

interface InputFieldProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  showPasswordToggle?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
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

  return (
    <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "transparent", borderWidth: 1, borderRadius: 8, marginBottom: 2, padding: 4 }}>
      <TextInput
        placeholder={placeholder}
        value={value}
        secureTextEntry={secureTextEntry && !showPassword}
        onChangeText={onChangeText}
        style={{ flex: 1 }}
      />
      {showPasswordToggle && (
        <TouchableOpacity onPress={togglePasswordVisibility} style={{ marginLeft: 8 }}>
          <Image source={showPassword ? Eye : EyeOff} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputField;
