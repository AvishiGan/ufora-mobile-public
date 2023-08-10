import React, {Component, FunctionComponent, useEffect, useState} from "react";
import { TextInput, useTheme } from "@react-native-material/core";
import axios from 'axios';
import {View, StyleSheet,Image, SafeAreaView, Button, TouchableOpacity} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import EyeOff from "../../../assets/icons/eye-off.png";
import envs from "../../services/config/env"

// interface TextInputWithFocusBorderProps {
//   label: string;
//   helperText: string;
//   leading: string;
//   value: string;
//   onChangeText: (text: string) => void;
//   secureTextEntry?: boolean;
//   showPasswordToggle?: boolean;
//   imageSource?: string;
//   leadingIcon?: React.ReactElement;
// }

// const TextInputWithFocusBorder: React.FC<TextInputWithFocusBorderProps> = ({
//   label,
//   helperText,
//   leading,
//   value,
//   onChangeText,
//   secureTextEntry = false,
//   showPasswordToggle = false,
//   imageSource,
//   leadingIcon,
// }) => {

//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };
  
//   const styles = StyleSheet.create({
//     input: {
//       flex: 1,
//       fontSize: 16,
//       color: '#B8B8B8',
//       fontWeight: "400",
//       marginLeft: 8,
//     },
//   });

//   return (
//     <View>
//       <Image source={imageSource} style={{ marginRight: 18,marginLeft: 4, padding: 5 }} />

//       <TextInput
//         variant="outlined"
//         label={label}
//         color="#87929D"
//         //helperText={helperText}
//         //leading = {leading}
//         value={value}
//         secureTextEntry={secureTextEntry && !showPassword}
//         onChangeText={onChangeText}
//         style={{ marginLeft: 45 , width: 300, alignItems: "center", flexDirection: "row" }}
//       />
//       {showPasswordToggle && (
//         <TouchableOpacity onPress={togglePasswordVisibility} style={{ marginLeft: 8 }}>
//           <Image source={EyeOff} />
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

const Feed: FunctionComponent = () => {
  const {API_PATH} = envs;
  const [username, setUsername] = useState('');
  useEffect(() => {
    const makeAPIRequestWithBearerToken = async () => {
      try {
        // Retrieve the token from SecureStore
        const token = await SecureStore.getItemAsync('token');
        console.log(token)

        if (!token) {
          console.error('Token not found in SecureStore.');
          return;
        }

        const response = await axios.post(`${API_PATH}/test`, null, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        console.log('API response:', response.data);
        console.log('API response status:', response.status);
        
      } catch (error: any) {
        if (error.response) {
          // The request was made and the server responded with a status code that falls out of the range of 2xx
          const errorMessage = `${JSON.stringify(error.response.data)}`
          alert(errorMessage);
          console.error("API error: ", error.response.data);
          console.error("API error status: ", error.response.status);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("API error: No response received");
          console.log(error);
        } else {
          // Something happened in setting up the request that triggered an Error
          const errorMessage = `${JSON.stringify(error.message)}`
          alert(errorMessage);
          console.error("API error: ", error.message);
        }
      }
    };

    makeAPIRequestWithBearerToken();
  }, []);

  return(
    <View>
      <SafeAreaView>
        <Button 
          title={"Fetch Me"} 
          //onPress={makeAPIRequestWithBearerToken}
        />

      {/* <TextInputWithFocusBorder
        //imageSource={require("../../../assets/icons/password.png")} 
        label="Username / Email"
        leadingIcon={<Icon name="lock" size={24} color="black" style={{ margin: 8 }} />}
        //helperText="Enter your username"
        //leading="100"
        value={username}
        onChangeText={setUsername}
        secureTextEntry={true} 
        showPasswordToggle={true}
        
      />    */}
        
        </SafeAreaView>
    </View>
  )
}
export default Feed; 