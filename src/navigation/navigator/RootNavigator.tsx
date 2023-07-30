import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import MyFriends from '../screens/MyFriends';

export type RootStackParamList = {
    Main : undefined;
    MyFriendScreen : undefined; 
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
        <RootStack.Group>
            <RootStack.Screen name='Main' component={TabNavigator}/>
        </RootStack.Group>

        <RootStack.Screen name='MyFriendScreen' component={MyFriends} options={{ headerShown: false }}/>
    </RootStack.Navigator>
  )
}

export default RootNavigator