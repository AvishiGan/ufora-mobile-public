import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ProfileScreen from "./src/screens/profile/index";
import IntroCard from "./src/screens/profile/cards/intro/index";
import BasicInfoCard from "./src/screens/profile/cards/basicInfo/index";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProfileScreen /> */}
      <IntroCard />
      <BasicInfoCard />
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// import { StatusBar } from "expo-status-bar";
// import { Text, View } from "react-native";
// import Welcome from "./src/app/Welcome";
// import RootNavigator from "./navigator/RootNavigator";
// import { NavigationContainer } from "@react-navigation/native";

// //custom fonts
// import AppLoading from "expo-app-loading";
// import { useFonts } from "expo-font";

// //React Navigation
// import RootStack from "../ufora/src/nav/RootStack";

// export default function App() {
//   const [fontsLoaded] = useFonts({
//     PoppinsRegular: require("./src/assets/fonts/Poppins-Regular.ttf"),
//     PoppinsMedium: require("./src/assets/fonts/Poppins-Medium.ttf"),
//     PoppinsBold: require("./src/assets/fonts/Poppins-Bold.ttf"),
//   });

//   if (!fontsLoaded) {
//     return <AppLoading />;
//   }

//   return (
//     // <RootStack />
//     <NavigationContainer>
//       <RootNavigator />
//     </NavigationContainer>
//   );
// }
