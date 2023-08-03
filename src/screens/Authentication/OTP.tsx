// import React, { FunctionComponent, useState } from "react";
// import { StatusBar } from "expo-status-bar";
// import {
//   KeyboardAvoidingView,
//   Text,
//   View,
//   StyleSheet,
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
// type Props = StackScreenProps<RootStackParamList, "OTP">;

// interface FormValues {
//   num1: string;
//   num2: string;
//   num3: string;
//   num4: string;
//   num5: string;
//   num6: string;
// }

// const OTP: FunctionComponent<Props> = ({navigation}) => {
//   const initialValues: FormValues = {
//     num1: "",
//     num2: "",
//     num3: "",
//     num4: "",
//     num5: "",
//     num6: "",
//   };

//   const handleVerify = (values: FormValues) => {
//     //const handleVerify = () => Alert.alert("Login");
//     // Making the API request
//     //console.log(values);
//     navigation.navigate("Feed");
//   };

//   return (
//     <KeyboardAvoidingView behavior="padding" style={styles.container}>
//       <StatusBar />
//       <View>
//         {/* Top section */}
//         <Logo source={logo} mainText="OTP" subText="Please enter the OTP sent to your Email"/>


//         {/* Bottom section */}
//         <View style={{ paddingHorizontal: 10, marginTop: 350, alignItems: "center", justifyContent: "center"}}>
//         <Formik initialValues={initialValues} onSubmit={handleVerify}>
//         {({ handleChange, handleSubmit, values }) => (
//           <View>
//             <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 8 }}>
//               <View>
//                 <Field
//                   component={InputField}
//                   name="num1"
//                   placeholder="0"
//                 />
//               </View>

//               <View>
//                 <Field
//                   component={InputField}
//                   name="num2"
//                   placeholder="0"
//                 />
//               </View>

//               <View>
//                 <Field
//                   component={InputField}
//                   name="num3"
//                   placeholder="0"
//                 />
//               </View>

//               <View>
//                 <Field
//                   component={InputField}
//                   name="num4"
//                   placeholder="0"
//                 />
//               </View>

//               <View>
//                 <Field
//                   component={InputField}
//                   name="num5"
//                   placeholder="0"
//                 />
//               </View>

//               <View>
//                 <Field
//                   component={InputField}
//                   name="num6"
//                   placeholder="0"
//                 />
//               </View> 
//             </View>

//             {/* Button */}
//             <View style={{ marginLeft:25 ,alignItems: "center", justifyContent: "center", marginTop: 25, width: 280 }}>
//               <RegularButton onPress={handleSubmit}>
//                 <Text style={{ color: "#FEFEFE" }}>Verify</Text>
//               </RegularButton>
//             </View>
//           </View>
//         )}
//       </Formik>

//           <View style={{ marginTop: 30, alignItems: 'center',flexDirection: 'row'}}>
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
//       width: '80%',
//       height: 40,
//       borderWidth: 1,
//       borderColor: 'gray',
//   },
// });

// // export default OTP;
