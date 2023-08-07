import React from 'react'
import TabNavigator from './TabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Main : undefined;
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
        <RootStack.Group>
            <RootStack.Screen name='Main' component={TabNavigator} options={{headerShown : false}}/>
        </RootStack.Group>
    </RootStack.Navigator>
  )
}

export default RootNavigator