// import React, { FunctionComponent, useRef, useState } from "react";
// import { StatusBar } from "expo-status-bar";
// import {
//   KeyboardAvoidingView,
//   Text,
//   View,
//   StyleSheet,
//   TextInput,
// } from "react-native";
// import logo from "../../../assets/logo.png";
// import RegularButton from "../../components/buttons/RegularButton";
// import { TouchableOpacity } from "react-native";
// import Logo from "../../components/logo/Logo";
// import InputField from "../../components/inputField/OTPInput";
// import RegularNormal from "../../constants/fonts/RegularNormal";

// //navigation
// import { RootStackParamList } from "../../navigation/Nav/RootStack";
// import { StackScreenProps } from "@react-navigation/stack";
// import { Field, Formik } from "formik";
// import axios from "axios";
// type Props = StackScreenProps<RootStackParamList, "OTP">;

// interface FormValues {
//   [key: string]: string;
// }

// const OTP: FunctionComponent<Props> = ({navigation}) => {

//   const inputRefs = [
//     useRef<TextInput>(null),
//     useRef<TextInput>(null),
//     useRef<TextInput>(null),
//     useRef<TextInput>(null),
//     useRef<TextInput>(null),
//     useRef<TextInput>(null),
//   ];

//   const initialValues: FormValues = {
//     num1: "",
//     num2: "",
//     num3: "",
//     num4: "",
//     num5: "",
//     num6: "",
//   };

//   const focusNextField = (index: number) => {
//     if (index < inputRefs.length - 1) {
//       inputRefs[index + 1].current?.focus();
//     }
//   };

//   const handleSubmit = async (values: FormValues) => {
//    //const ip = process.env.IP
//    //console.log(ip)
//      navigation.navigate("SelectUniversity");

//  };

//   return (
//     <KeyboardAvoidingView keyboardVerticalOffset={250} behavior="padding" style={styles.container}>
//       <StatusBar />
//       <View>
//         {/* Top section */}
//         <Logo source={logo} mainText="OTP" subText="Please enter the OTP sent to your Email"/>


//         {/* Bottom section */}
//         <View style={{ marginTop: 360, alignItems: "center", justifyContent: "center"}}>
//         <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//           {({ handleChange, values }) => (
//             <>
//               <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 8 }}>
//                 {inputRefs.map((ref, index) => (
//                   <View key={index}>
//                     <TextInput
//                       ref={ref}
//                       placeholder="0"
//                       style={styles.input}
//                       maxLength={1}
//                       keyboardType="numeric"
//                       onChangeText={(value) => {
//                         handleChange(`num${index + 1}`)(value);
//                         if (value) {
//                           focusNextField(index);
//                         }
//                       }}
//                       value={values[`num${index + 1}`]}
//                     />
//                   </View>
//                 ))}
//               </View>
//               {/* Button */}
//               <View style={{ alignItems: "center", justifyContent: "center", marginTop: 30, width: 280 }}>
//                 <RegularButton onPress={handleSubmit}>
//                   <Text style={{ color: "#FEFEFE" }}>Verify</Text>
//                 </RegularButton>
//               </View>
//             </>
//           )}
//         </Formik>

//           <View style={{ marginTop: 25, alignItems: 'center',flexDirection: 'row'}}>
//             <RegularNormal>
//               <Text style={{ alignItems: 'center'}}>Didn't receive an OTP?</Text>
//             </RegularNormal>
//             <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
//               <View>
//                 <RegularNormal>
//                     <Text style={{ color: '#2656FF' }}>Resend OTP</Text>
//                   </RegularNormal>
//               </View>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//   },
//   input: {
//     width: 48,
//     height: 48,
//     borderWidth: 1,
//     borderColor: "gray",
//     textAlign: "center",
//     fontSize: 16,
//     fontWeight: "400",
//     borderRadius: 12,
//   },
// });

// export default OTP;
