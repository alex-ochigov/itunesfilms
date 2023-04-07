import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from './views/SignInScreen';
import RegisterScreen from './views/RegisterScreen';
import type {AuthStackParamList} from './types';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackViews = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="SignIn"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackViews;
