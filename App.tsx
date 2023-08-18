import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import WelcomeNavigator from "./src/navigation/navigator/WelcomeNavigator";
import RootNavigator from "./src/navigation/navigator/RootNavigator";
import React, { useState, useEffect } from 'react';

 //remove the following 3 lines after interim
// import { LogBox } from 'react-native';
// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// LogBox.ignoreAllLogs();//Ignore all log notifications

export default function App() {
  const [fontsLoaded] = useFonts({
    Text: require("./assets/fonts/Switzer-Variable.ttf"),
    ItalicText: require("./assets/fonts/Switzer-VariableItalic.ttf"),
  });

  const [appIsReady, setAppIsReady] = useState(false);

  // SplashScreen code
  useEffect(() => {
    async function prepare() {
      try {
        // This will prevent the splash screen from hiding too soon
        await SplashScreen.preventAutoHideAsync();
        
        // Do any other app preparation logic you might have here
        
      } catch (e) {
        console.warn(e);
      } finally {
        // Wait for fonts to load before setting the app as ready
        if (fontsLoaded) {
          setAppIsReady(true);
        }
      }
    }

    prepare();
  }, [fontsLoaded]);

  useEffect(() => {
    if (appIsReady) {
      // Once app is ready, hide the splash screen
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}