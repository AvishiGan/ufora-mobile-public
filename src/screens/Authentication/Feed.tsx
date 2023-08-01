// import React, { useState } from 'react'
// import {
//   SafeAreaView,
//   Text,
//   View,
// } from "react-native";
// import InputField from '../../components/inputField/InputField';

// const Feed = () => {
//   const [username, setUsername] = useState('');

//   const handleUsernameChange = (text: string) => {
//     setUsername(text);
//   };
//   return(
//     <SafeAreaView>
//     <InputField
//       placeholder="Username"
//       value="username"
//       onChangeText={handleUsernameChange}
//       style={{ margin: 16 }}
//       imageSource={require("../../../assets/icons/user.png")}
//     />
//   </SafeAreaView>
//   )
// };
// export default Feed



import React, {Component, useEffect} from "react";
import { TextInput } from "@react-native-material/core";
import axios from 'axios';
import {View, Text, SafeAreaView, Button} from 'react-native';
import * as SecureStore from 'expo-secure-store';

const Feed = () => {
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

        const response = await axios.post("http://192.168.1.6:3000/test", null, {
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

      <TextInput 
        variant="outlined" 
        label="Label" 
        style={{ margin: 20}}
      /> 
      </SafeAreaView>
    </View>
  )
}
  
  

export default Feed;

