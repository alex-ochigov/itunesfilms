import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from './views/ProfileScreen';
import PreferencesScreen from './views/PrefrencesScreen';
import type {ProfileStackParamList} from './types';

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStackViews = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{headerShown: false}}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="Preferences" component={PreferencesScreen} />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackViews;
