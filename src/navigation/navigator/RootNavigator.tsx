import React from 'react'
import TabNavigator from './TabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeNavigator from './WelcomeNavigator';

export type RootStackParamList = {
  Welcome: undefined;
  Main : undefined;
  Login:undefined;
  UniversityGroupsScreen : undefined;
  MentorshipScreen : undefined;
  MentorsScreen : undefined;
  MyMentorshipScreen: undefined;
  UniversityPeopleScreen: undefined;
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="Main">
        <RootStack.Screen name='Welcome' component={WelcomeNavigator} options={{headerShown: false}}/>

        <RootStack.Group>
            <RootStack.Screen name='Main' component={TabNavigator} options={{headerShown : false}}/>
        </RootStack.Group>
    </RootStack.Navigator>
  )
}

export default RootNavigator