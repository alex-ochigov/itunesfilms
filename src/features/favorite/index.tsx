import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListScreen from './views/ListScreen';
import type {FavoriteStackParamList} from './types';

const FavoriteStack = createNativeStackNavigator<FavoriteStackParamList>();

const FavoriteStackViews = () => {
  return (
    <FavoriteStack.Navigator screenOptions={{headerShown: false}}>
      <FavoriteStack.Screen name="List" component={ListScreen} />
    </FavoriteStack.Navigator>
  );
};

export default FavoriteStackViews;
