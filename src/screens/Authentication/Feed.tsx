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

import React from "react";
import { TextInput } from "@react-native-material/core";

const Feed = () => (
  <TextInput 
    variant="outlined" 
    label="Label" 
    style={{ margin: 20}}
  />
);

export default Feed;

