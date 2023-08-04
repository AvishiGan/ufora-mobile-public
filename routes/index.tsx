import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  ProfileAboutSection,
  ProfileBlogSection,
  ProfilePortfolioSection,
  ProfilePostSection,
} from "../src/screens";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="About" component={ProfileAboutSection} />
      <Tab.Screen name="Posts" component={ProfilePostSection} />
      <Tab.Screen name="Blog" component={ProfileBlogSection} />
      <Tab.Screen name="Portfolio" component={ProfilePortfolioSection} />
    </Tab.Navigator>
  );
}
