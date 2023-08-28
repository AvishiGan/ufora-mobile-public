// import React, { FunctionComponent } from "react";
// import {
//   GestureResponderEvent,
//   TouchableOpacity,
//   Image,
//   ImageSourcePropType,
// } from "react-native";
// import { View } from "react-native";
// import google from "../../../assets/icons/google.png";
// import apple from "../../../assets/icons/apple.png";
// import SmallText from "../../constants/fonts/SmallMedium";
// import MediumText from "../../constants/fonts/SmallMedium";
// import SmallMedium from "../../constants/fonts/SmallMedium";

// interface CustomImageProps {
//   source: ImageSourcePropType;
// }

// const CustomImage: FunctionComponent<CustomImageProps> = ({ source }) => {
//   return <Image source={source} />;
// };

// interface ImagesSectionProps {
//   onPressGoogle: (event: GestureResponderEvent) => void;
//   onPressApple: (event: GestureResponderEvent) => void;
// }

// const Authentication: FunctionComponent<ImagesSectionProps> = ({
//   onPressGoogle,
//   onPressApple,
// }) => {
//   const handlePressGoogle = (event: GestureResponderEvent) => {
//     // Handle the onPressGoogle event
//     //onPressGoogle(event);
//   };

//   const handlePressApple = (event: GestureResponderEvent) => {
//     // Handle the onPressApple event
//     //onPressApple(event);
//   };

//   return (
//     <View style={{ alignItems: "center", marginTop: 20 }}>
//       <SmallMedium>Or continue with</SmallMedium>
//       <View
//         style={{
//           flexDirection: "row",
//           marginTop: 10,
//           justifyContent: "space-between",
//           gap:61
//         }}
//       >
//         <TouchableOpacity onPress={onPressGoogle}>
//           <CustomImage source={google} style={{ width: 30, height: 30 }} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={onPressApple}>
//           <CustomImage source={apple} style={{ width: 30, height: 30 }} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default Authentication;
