import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Placeholder from './views/Placeholder';
import HomeStackViews from '../features/home';
import FavoriteStackViews from '../features/favorite';

const RootStack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="home"
          component={Tabs}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const Tabs = () => {
  return (
    <BottomTabs.Navigator
      id="tabs"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <BottomTabs.Screen
        name="FeedTab"
        component={HomeStackViews}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="FavoriteTab"
        component={FavoriteStackViews}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="ProfileTab"
        component={Placeholder}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default Routes;
