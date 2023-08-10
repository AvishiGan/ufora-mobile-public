import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CreatePost from "../../components/profile/createPost/CreatePost";

const Stack = createStackNavigator();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CreatePost" component={CreatePost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
