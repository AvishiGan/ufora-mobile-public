// import React, { FunctionComponent } from "react";
// import { StatusBar } from "expo-status-bar";
// import { ImageSourcePropType, Text, View, Image } from "react-native";
// import logo from "../../../assets/logo.png";
// import google from "../../../assets/icons/google.png";
// import apple from "../../../assets/icons/apple.png";
// import RegularButton from "../../components/buttons/RegularButton";
// import UnfilledButton from "../../components/buttons/UnfilledButton";
// import { GestureResponderEvent } from "react-native";
// import { TouchableOpacity } from "react-native";
// import SmallButton from "../../components/buttons/SmallButton";
// import Authentication, {
//   handlePressGoogle,
//   handlePressApple,
// } from "../../components/auth/Authentication";
// import LightText from "../../constants/fonts/LightText";
// import BoldText from "../../constants/fonts/BoldText";
// import MediumText from "../../constants/fonts/MediumText";
// import RegularText from "../../constants/fonts/RegularText";

// //navigation
// {
//   /*import { RootStackParamList } from "../nav/RootStack";
// import {StackScreenProps} from "@react-navigation-stack";

// type Props = StackScreenProps<RootStackParamList, "Welcome">;*/
// }

// interface CustomImageProps {
//   source: ImageSourcePropType;
// }

// const CustomImage: FunctionComponent<CustomImageProps> = ({ source }) => {
//   return <Image source={source} />;
// };

// interface WelcomeProps {}

// //const Welcome: FunctionComponent<Props> = ({navigation}) => {
// const Welcome: FunctionComponent<WelcomeProps> = () => {
//   return (
//     <>
//       <StatusBar />
//       {/* welcome container */}
//       <View>
//         {/* Top section */}
//         <View className="items-center mt-32 justify-center">
//           <CustomImage source={logo} />
//           <View className="items-center mt-2">
//             <BoldText className="text-4xl mb-1">Welcome!</BoldText>
//             <RegularText className="flex-wrap text-base">
//               Login to your account,{" "}
//             </RegularText>
//             <RegularText className="flex-shrink-0 mb-8 text-base">
//               or Create Account to get started
//             </RegularText>
//           </View>
//         </View>

//         {/* Bottom section */}
//         {/*Buttons */}
//         <View className="flex-row mt-80 justify-between ml-7 mr-7">
//           <UnfilledButton className="bg-transparent" onPress={() => {}}>
//             <Text className="text-blue-500">Create Account</Text>
//           </UnfilledButton>

//           <SmallButton className="" onPress={() => {}}>
//             <Text className="text-white">Log In</Text>
//           </SmallButton>

          
//         </View>

//         <Authentication
//           onPressGoogle={handlePressGoogle}
//           onPressApple={handlePressApple}
//         />
//       </View>
//     </>
//   );
// };

// export default Welcome;
