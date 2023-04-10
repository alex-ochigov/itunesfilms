import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListScreen from './views/ListScreen';
import MovieScreen from '@shared/views/MovieScreen';
import type {FavoriteStackParamList} from './types';

const FavoriteStack = createNativeStackNavigator<FavoriteStackParamList>();

const FavoriteStackViews = () => {
  return (
    <FavoriteStack.Navigator screenOptions={{headerShown: false}}>
      <FavoriteStack.Screen name="Favorite" component={ListScreen} />
      <FavoriteStack.Screen name="Movie" component={MovieScreen} />
    </FavoriteStack.Navigator>
  );
};

export default FavoriteStackViews;
