// import React, { FunctionComponent, useState } from "react";
// import { StatusBar } from "expo-status-bar";
// import {ImageSourcePropType,Text,View,Image, KeyboardAvoidingView,StyleSheet} from "react-native";
// import logo from "../../../assets/logo.png";
// import { TouchableOpacity } from "react-native";
// import RegularNormal from "../../constants/fonts/RegularNormal";
// import Logo from "../../components/logo/Logo";
// import SmallButton from "../../components/buttons/SmallButton";
// import UnfilledButton from "../../components/buttons/UnfilledButton";
// import InputField from "../../components/inputField/InputField";

// //navigation
// import { RootStackParamList } from "../../navigation/Nav/RootStack";
// import { StackScreenProps } from "@react-navigation/stack";
// import { Field, Formik } from "formik";
// import axios from "axios";
// type Props = StackScreenProps<RootStackParamList, "ForgotPassword">;

// interface FormValues {
//   email: string;
// }

// const ForgotPassword: FunctionComponent<Props> = ({ navigation }) => {
//   const initialValues: FormValues = {
//     email: "",
//   };

//   const handleNext = (values: FormValues) => {
//     // try {
//     //   const response = await axios.post("http://10.22.167.182:3000/...",{
//     //     username: values.email,
//     //   });

//     //   console.log(values);
//       navigation.navigate("Feed");

//     //   console.log("API Response: ", response.data);
//     // } catch (error: any) {

//     //   if (error.response) {
//     //     // The request was made and the server responded with a status code that falls out of the range of 2xx
//     //     console.error("API error: ", error.response.data);
//     //     console.error("API error status: ", error.response.status);
//     //   } else if (error.request) {
//     //     // The request was made but no response was received
//     //     console.error("API error: No response received");
//     //     console.log(error);
//     //   } else {
//     //     // Something happened in setting up the request that triggered an Error
//     //     console.error("API error: ", error.message);
//     //   }
//     // }
//   };

//   return (
//       <KeyboardAvoidingView behavior="padding" style={styles.container}>
//       <StatusBar />
//       <View style={{alignItems: "center"}}>
//         {/* Top section */}
//         <Logo source={logo} mainText="Forgot Password" subText="Choose an Account type to get started "/>


//         {/* Bottom section */}
//         <View style={{paddingHorizontal: 10, marginTop: 350, alignItems: "center"}}>
//           <Formik initialValues={initialValues} onSubmit={handleNext}>
//             {({ handleChange, handleSubmit, values }) => (
//               <View>
//                 <View
//                   style={{
//                     flexDirection: "row",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     backgroundColor: "transparent",
//                     borderRadius: 20,
//                     padding: 2,
//                   }}
//                 >
//                   <Field
//                     component={InputField}
//                     imageSource={require("../../../assets/icons/mail.png")}
//                     name="email"
//                     placeholder="Please enter your Email"
//                   />
//                 </View>


//                 {/* Button */}
//                 <View style={{flexDirection: "row",marginTop: 30,alignItems: "center",gap: 10,}} >
//                   <UnfilledButton onPress={() => navigation.navigate('Login')}>
//                     <Text style={{ color: "#2656FF" }}>Back</Text>
//                   </UnfilledButton>

//                   <SmallButton onPress={() => navigation.navigate('ForgotPassOTP')}>
//                     <Text style={{ color: "#FEFEFE" }}>Next</Text>
//                   </SmallButton>
//                 </View>
//               </View>
//             )}
//           </Formik>

//           <View style={{ marginTop: 20, alignItems: 'center', marginBottom: 20}}>
//             <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
//               <View>
//                 <RegularNormal>
//                     <Text style={{ color: '#2656FF' }}>Can't reset your password?</Text>
//                   </RegularNormal>
//               </View>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//       </KeyboardAvoidingView>
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

// // export default ForgotPassword;
