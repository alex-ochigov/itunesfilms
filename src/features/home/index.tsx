import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './views/HomeScreen';
import SearchScreen from './views/SearchScreen';
import MovieScreen from '../../shared/views/MovieScreen';
import type {HomeStackParamList} from './types';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackViews = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{headerShown: false, animation: 'fade'}}>
      <HomeStack.Screen name="Featured" component={HomeScreen} />
      <HomeStack.Screen name="Search" component={SearchScreen} />
      <HomeStack.Screen
        name="Movie"
        component={MovieScreen}
        options={{animation: 'default'}}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackViews;
