// import React from "react";
// import { View, StyleSheet, ScrollView } from "react-native";
// import MyProfile from "./src/screens/profile";

// export default function App() {
//   return (
//     <ScrollView>
//       <MyProfile />
//     </ScrollView>
//   );
// }

import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Welcome from "./src/screens/Authentication/Welcome";
import RootNavigator from "./src/navigation/Nav/RootStack";
import { NavigationContainer } from "@react-navigation/native";

//custom fonts
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

//React Navigation
import RootStack from "./src/navigation/Nav/RootStack";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Text": require("./assets/fonts/Switzer-Variable.ttf"),
    "ItalicText": require("./assets/fonts/Switzer-VariableItalic.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <> 
    <RootStack />
    </>
  );
}
