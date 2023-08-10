import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
// import Welcome from "./src/screens/Authentication/Welcome";
import RootNavigator from "./src/navigation/navigator/RootNavigator";
// import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";

//custom fonts
// import AppLoading from "expo-app-loading";
// import { useFonts } from "expo-font";

//React Navigation
import WelcomeNavigator from "./src/navigation/navigator/WelcomeNavigator";
import ProfileStack from "./routes/profileStack";

// export default function App() {
//   const [fontsLoaded] = useFonts({
//     Text: require("./assets/fonts/Switzer-Variable.ttf"),
//     ItalicText: require("./assets/fonts/Switzer-VariableItalic.ttf"),
//   });

//   if (!fontsLoaded) {
//     return <AppLoading />;
//   }

//   return (
//     <NavigationContainer>
//       <RootNavigator />
//       {/* <ProfileStack /> */}
//     </NavigationContainer>
//   );
// }

// // //////////////////////////////////////////////////////////////////////////
// // SHEHAN ENTRY

import { NavigationContainer } from "@react-navigation/native";
// import RootNavigator from "./src/navigation/Navigator/RootNavigator";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
// import { Text } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Text: require("./assets/fonts/Switzer-Variable.ttf"),
    ItalicText: require("./assets/fonts/Switzer-VariableItalic.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
