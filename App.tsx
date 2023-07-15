import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import ProfileScreen from "./src/screens/profile/index";
import IntroCard from "./src/screens/profile/cards/intro/index";
import BasicInfoCard from "./src/screens/profile/cards/basicInfo/index";
import { LucidCake } from "./assets";
import EducationCard from "./src/screens/profile/cards/education";
import BadgesCard from "./src/screens/profile/cards/badges";
import SkillHexagonCard from "./src/screens/profile/cards/skillHexagon";
import ClubsAndSocietiesCard from "./src/screens/profile/cards/clubsAndSocieties";
import AchievementsCard from "./src/screens/profile/cards/achievements";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* <ProfileScreen /> */}
      <IntroCard />
      <BasicInfoCard />
      <EducationCard />
      <BadgesCard />
      <SkillHexagonCard />
      <ClubsAndSocietiesCard />
      <AchievementsCard />
      {/* <LucidCake width={45} height={45} /> */}
      {/* <LucidCake /> */}
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

/**
 * Binu's code
 */
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
