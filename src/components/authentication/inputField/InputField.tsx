import { ReactNode } from "react";
import React, { FunctionComponent, useState } from "react";
import {
  TextInput,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import { EyeOff } from "lucide-react-native";

interface InputFieldProps {
  iconComponent?: ReactNode;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  showPasswordToggle?: boolean;
  style?: object;
  error: string;
  onBlur?: () => void;
}

const InputField: FunctionComponent<InputFieldProps> = ({
  iconComponent,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  showPasswordToggle = false,
  style = {},
  error,
  onBlur,
}) => {
  const [touched, setTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const styles = StyleSheet.create({
    inputText: {
      fontSize: 14,
      fontWeight: "400",
    },
    errorText: {
      color: "#CC3535",
      fontSize: 12,
      marginTop: 0,
      marginLeft: 4,
      fontFamily: "Switzer Variable",
    },
    input: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "transparent",
      borderWidth: 1,
      borderRadius: 15,
      marginBottom: 2,
      padding: 8,
      width: 320,
      borderColor: "#87929D",
    },
    inputError: {
      borderColor: "#CC3535",
    },
    icon: {
      marginRight: 10,
      marginLeft: 4,
      padding: 5,
    },
  });

  return (
    <View>
      <View style={[styles.input, error ? styles.inputError : null]}>
        {/* <Image source={imageSource} style={{ marginRight: 18,marginLeft: 4, padding: 5, tintColor: error ? "#CC3535" : "#B8B8B8", }} /> */}
        <View style={styles.icon}>{iconComponent}</View>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={error ? "#CC3535" : "#B8B8B8"}
          value={value}
          secureTextEntry={secureTextEntry && !showPassword}
          onChangeText={onChangeText}
          style={[styles.inputText, { flex: 1 }, style]}
          onBlur={onBlur}
        />
        {showPasswordToggle && (
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={{ marginLeft: 8 }}
          >
            <EyeOff color={error ? "#CC3535" : "#B8B8B8"} size={24} />
          </TouchableOpacity>
        )}
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

export default InputField;
