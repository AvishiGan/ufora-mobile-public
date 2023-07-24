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



import React, {Component} from "react";
import { TextInput } from "@react-native-material/core";
import axios from 'axios';
import {View, Text, SafeAreaView, Button} from 'react-native';


const Feed = () => {
  const callGetUsersList = () => {
    axios
      .get('https://crudcrud.com/api/be01073d24b24fd885964735d8457109/users')
      .then(response =>{
        console.log("Response:", response?.data);
      }).catch(error => {
        console.log("Error:",error);
      })
  };

  const callGetUsersByIDList = (userID: string) => {
    axios
      .get(`https://crudcrud.com/api/be01073d24b24fd885964735d8457109/users/${userID}`)
      .then(response =>{
        console.log("Response:", response?.data);
      }).catch(error => {
        console.log("Error:",error);
      })
  };

  const callAddUsers = () => {
    let params = {userID:1, name: 'Avishi'};
    axios
      .post('https://crudcrud.com/api/be01073d24b24fd885964735d8457109/users',params)
      .then(response =>{
        console.log("Response:", response?.data)
      }).catch(error => {
        console.log("Error:",error);
      })
  }

  const callUpdateUser = (userID: string) => {
    let params = {userID:1, name: 'Avishi'};
    axios
      .put(
        `https://crudcrud.com/api/be01073d24b24fd885964735d8457109/users/${userID}`,params,
      )
      .then(response =>{
        console.log("Response:", response?.data);
      }).catch(error => {
        console.log("Error:",error);
      })
  }

  const callDeleteUser = (userID: string) => {
    axios
      .delete(
        `https://crudcrud.com/api/be01073d24b24fd885964735d8457109/users/${userID}`,
      )
      .then(response =>{
        console.log("Response:", response?.data);
      }).catch(error => {
        console.log("Error:",error);
      })
  }

  return(
    <View>
      <SafeAreaView>

        <Button 
          title={"Fetch Me"} 
          onPress={() => {
            callGetUsersList();
          }}
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

