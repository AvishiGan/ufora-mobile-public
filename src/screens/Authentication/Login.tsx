// import React, { FunctionComponent, useState } from "react";
// import { StatusBar } from "expo-status-bar";
// import {
//   ImageSourcePropType,
//   Text,
//   View,
//   Image,
//   TextInput,
// } from "react-native";
// import logo from "../../../assets/logo.png";
// import google from "../../../assets/icons/google.png";
// import apple from "../../../assets/icons/google.png";
// import User from "../../../assets/icons/user.png";
// import Password from "../../../assets/icons/password.png";
// import Eyeoff from "../../../assets/icons/eye-off.png";
// import RegularButton from "../../components/buttons/RegularButton";
// import { GestureResponderEvent } from "react-native";
// import { TouchableOpacity } from "react-native";
// import Authentication, {
//   handlePressGoogle,
//   handlePressApple,
// } from "../../components/auth/Authentication";
// import InputField from "../../components/inputField/InputField";
// import BoldText from "../../constants/fonts/BoldText";
// import RegularText from "../../constants/fonts/RegularText";
// import LightText from "../../constants/fonts/LightText";
// import MediumText from "../../constants/fonts/MediumText";

// interface CustomImageProps {
//   source: ImageSourcePropType;
// }

// const CustomImage: FunctionComponent<CustomImageProps> = ({ source }) => {
//   return <Image source={source} />;
// };

// const Login: FunctionComponent<LoginProps> = ({ onPressLogin }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleUsernameChange = (text: string) => {
//     setUsername(text);
//   };

//   const handlePasswordChange = (text: string) => {
//     setPassword(text);
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <>
//       <StatusBar />

//       <View>
//         {/* Top section */}
//         <View className="items-center mt-40 justify-center">
//           <CustomImage source={logo} />
//           <View className="items-center mt-2">
//             <BoldText className="mb-1 text-4xl">Login</BoldText>
//             <RegularText className="flex-wrap">
//               Login to your account{" "}
//             </RegularText>
//           </View>
//         </View>

//         {/* Bottom section */}
//         <View className="px-10 mt-32">
//           <View className="">
//             <LightText className="text-gray-600 mb-1">
//               Username / Email / Phone Number
//             </LightText>
//             <View className="flex flex-row items-center bg-transparent border rounded-2xl mb-2 p-1">
//               <View className="p-2">
//                 <Image source={User} />
//               </View>
//               <InputField
//                 placeholder="Username / Email / Phone Number"
//                 value={username}
//                 onChangeText={handleUsernameChange}
//               />
//             </View>
//           </View>

//           <View className="flex-col">
//             <LightText className="text-gray-600 mb-1">Password</LightText>
//             <View className="flex flex-row items-center bg-transparent border rounded-2xl mb-2 p-1">
//               <View className="p-2">
//                 <Image source={Password} />
//               </View>
//               <TextInput
//                 className="text-x2"
//                 placeholder="*********"
//                 value={password}
//                 secureTextEntry={!showPassword}
//                 onChangeText={handlePasswordChange}
//               />
//               <TouchableOpacity className="flex justify-end ml-40">
//                 <Image source={Eyeoff} />
//               </TouchableOpacity>
//             </View>

//             <View className="mt-0 ml-48">
//               <RegularText>
//                 <Text className="text-blue-500">Forgot Password?</Text>
//               </RegularText>
//             </View>
//           </View>

//           {/* Button */}
//           <View className="mt-7 items-center">
//             <RegularButton className="" onPress={() => {}}>
//               <Text className="text-white">Log In</Text>
//             </RegularButton>
//           </View>
//           <View className="mt-3">
//             <MediumText>
//               <Text className="text-sm items-center">
//                 Don't have an account? Create Account
//               </Text>
//             </MediumText>
//           </View>
//         </View>
//         <Authentication
//           onPressGoogle={handlePressGoogle}
//           onPressApple={handlePressApple}
//         />
//       </View>
//     </>
//   );
// };

// export default Login;
