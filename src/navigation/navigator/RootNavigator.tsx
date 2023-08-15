import React from 'react'
import TabNavigator from './TabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeNavigator from './WelcomeNavigator';
import Friends from '../../screens/friends/Friends';
import MyFriendsScreen from '../../screens/friends/MyFriendsScreen';
import UniversityGroupsScreen from '../../screens/universityMentoring/UniversityGroupsScreen';
import MentorhipScreen from '../../screens/universityMentoring/MentorhipScreen';
import MentorsScreen from '../../screens/universityMentoring/MentorsScreen';
import MyMentorshipScreen from '../../screens/universityMentoring/MyMentorshipScreen';
import UniversityPeopleScreen from '../../screens/universityMentoring/UniversityPeopleScreen';
import UserProfileScreen from '../../screens/profile';

export type RootStackParamList = {
  Welcome: undefined;
  Main : undefined;
  Login:undefined;
  UniversityGroupsScreen : undefined;
  MentorshipScreen : undefined;
  MentorsScreen : undefined;
  MyMentorshipScreen: undefined;
  UniversityPeopleScreen: undefined;
  Friends:undefined;
  MyFriendsScreen:undefined;
  UserProfileScreen: undefined;
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="Main">
        <RootStack.Screen name='Welcome' component={WelcomeNavigator} options={{headerShown: false}}/>
        <RootStack.Screen name='Friends' component={Friends} options={{headerShown: false}}/>
        <RootStack.Screen name='MyFriendsScreen' component={MyFriendsScreen} options={{headerShown: false}}/>


        <RootStack.Group>
            <RootStack.Screen name='Main' component={TabNavigator} options={{headerShown : false}}/>
        </RootStack.Group>

        <RootStack.Screen name="UniversityGroupsScreen" component={UniversityGroupsScreen} options={{headerShown: false}}/>
        <RootStack.Screen name="MentorshipScreen" component={MentorhipScreen} options={{headerShown: false}}/>
        <RootStack.Screen name="MentorsScreen" component={MentorsScreen} options={{headerShown: false}}/>
        <RootStack.Screen name="MyMentorshipScreen" component={MyMentorshipScreen} options={{headerShown: false}}/>
        <RootStack.Screen name="UniversityPeopleScreen" component={UniversityPeopleScreen} options={{headerShown: false}}/>


        {/* Profile Screen */}
        <RootStack.Screen name='UserProfileScreen' component={UserProfileScreen} options={{headerShown: false}} />


    </RootStack.Navigator>
  )
}

export default RootNavigator