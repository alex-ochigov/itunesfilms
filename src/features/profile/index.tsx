import React from 'react';
import ProfileScreen from './views/ProfileScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {ProfileStackParamList} from './types';

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStackViews = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{headerShown: false}}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackViews;
