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



// import React, { FunctionComponent, useState } from "react";
// import { StyleSheet, View, Image } from "react-native";
// import { TextInput } from "@react-native-material/core";

// interface InputFieldProps {
//   imageSource?: string;
//   placeholder: string;
//   value: string;
//   onChangeText: (text: string) => void;
//   secureTextEntry?: boolean;
//   showPasswordToggle?: boolean;
//   style?: object;
// }

// const InputField: FunctionComponent<InputFieldProps> = ({
//   imageSource,
//   placeholder,
//   value,
//   onChangeText,
//   secureTextEntry = false,
//   showPasswordToggle = false,
//   style = {},
// }) => {
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const styles = StyleSheet.create({
//     input: {
//       fontSize: 16,
//       color: "#B8B8B8",
//       fontWeight: "400",
//     },
//     container: {
//       flexDirection: "row",
//       alignItems: "center",
//       backgroundColor: "transparent",
//       borderWidth: 1,
//       borderRadius: 15,
//       marginBottom: 2,
//       padding: 12,
//       borderColor: "#87929D",
//     },
//   });

//   return (
//     <View style={[styles.container, style]}>
//       <Image source={imageSource} style={{ marginRight: 18, marginLeft: 4, padding: 5 }} />
//       {/* Add the closing angle bracket here */}
//       <TextInput
//         variant="outlined"
//         placeholder={placeholder}
//         value={value}
//         secureTextEntry={secureTextEntry && !showPassword}
//         onChangeText={onChangeText}
//         style={[styles.input, { flex: 1 }, style]}
//       />
//     </View>
//   );
// };

// export default InputField;
