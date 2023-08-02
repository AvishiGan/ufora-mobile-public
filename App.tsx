//custom fonts
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

//React Navigation
import RootStack from "./src/navigation/Nav/RootStack";

import Navigator from "./routes/profileStack";
import { ScrollView } from "react-native-gesture-handler";
import ProfileStack from "./routes/profileStack";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [fontsLoaded] = useFonts({
    Text: require("./assets/fonts/Switzer-Variable.ttf"),
    ItalicText: require("./assets/fonts/Switzer-VariableItalic.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <ScrollView> */}
        {/* <RootStack /> */}
        <ProfileStack />
        {/* </ScrollView> */}
      </SafeAreaView>
    </>
  );
}
