// custom fonts
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

// React Navigation
import RootStack from "./src/navigation/Nav/RootStack";
import {
  ProfileAboutSection,
  ProfileBlogSection,
  ProfileCommonSection,
  ProfilePostSection,
} from "./src/screens";
import { UserProfileTabs } from "./src/navigation";
import TopTabNavigator from "./src/navigation/navigator/middleTabNavigator/MiddleTabNavigator";
import MiddleTabNavigator from "./src/navigation/navigator/middleTabNavigator/MiddleTabNavigator";
import { CreatePost } from "./src/components";
import UserProfile from "./src/screens/profile/UserProfile";

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
      {/* <RootStack /> */}
      {/* <ProfileCommonSection />
      <MiddleTabNavigator /> */}
      {/* <CreatePost /> */}
      <UserProfile />
    </>
  );
}
