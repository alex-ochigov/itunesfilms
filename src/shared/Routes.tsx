import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BlurView} from '@react-native-community/blur';
import SplashScreen from './views/SplashScreen';
import HomeStackViews from '@features/home';
import FavoriteStackViews from '@features/favorite';
import AuthStackViews from '@features/auth';
import ProfileStackViews from '@features/profile';
import useColorScheme from './hooks/useColorScheme';
import type {RootStackParamList, TabIconProps} from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const BottomTabs = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false, animation: 'fade'}}>
        <RootStack.Screen name="Splash" component={SplashScreen} />
        <RootStack.Screen name="Auth" component={AuthStackViews} />
        <RootStack.Screen name="Home" component={Tabs} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const Tabs = () => {
  const renderFeaturedTabIcon = ({color, size}: TabIconProps) => {
    return <Ionicons name="home-outline" size={size} color={color} />;
  };

  const renderFavoriteTabIcon = ({color, size}: TabIconProps) => {
    return <Ionicons name="heart-outline" size={size} color={color} />;
  };

  const renderProfileTabIcon = ({color, size}: TabIconProps) => {
    return <Ionicons name="person-circle-outline" size={size} color={color} />;
  };

  const {currentScheme} = useColorScheme();

  const renderBackground = () => {
    return (
      <BlurView
        style={StyleSheet.absoluteFill}
        blurAmount={10}
        blurType={currentScheme}
      />
    );
  };

  return (
    <BottomTabs.Navigator
      id="tabs"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarBackground: renderBackground,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'transparent',
          borderTopColor: 'transparent',
        },
      }}>
      <BottomTabs.Screen
        name="FeedTab"
        component={HomeStackViews}
        options={{
          tabBarIcon: renderFeaturedTabIcon,
        }}
      />
      <BottomTabs.Screen
        name="FavoriteTab"
        component={FavoriteStackViews}
        options={{
          tabBarIcon: renderFavoriteTabIcon,
        }}
      />
      <BottomTabs.Screen
        name="ProfileTab"
        component={ProfileStackViews}
        options={{
          tabBarIcon: renderProfileTabIcon,
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default Routes;
